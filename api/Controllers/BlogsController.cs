using BlogApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net.Http;
using System.Xml.Linq;

namespace BlogApi.Controllers;

[Route("api/[controller]")]
[ApiController]
public class BlogsController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly HttpClient _httpClient;

    public BlogsController(AppDbContext context, IHttpClientFactory httpClientFactory)
    {
        _context = context;
        _httpClient = httpClientFactory.CreateClient();
    }

    // GET: api/blogs
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Blog>>> GetBlogs()
    {
        var blogs = await _context.Blogs
            .Select(b => new Blog
            {
                Id = b.Id,
                Title = b.Title ?? "",       // NULL ise boş string ata
                Content = b.Content ?? "",   // NULL ise boş string ata
                PublishedDate = b.PublishedDate
            })
            .ToListAsync();

        return blogs;
    }

    // GET: api/blogs/5
    [HttpGet("{id:int}")]  // int kısıtlaması ekledim
    public async Task<ActionResult<Blog>> GetBlog(int id)
    {
        var blog = await _context.Blogs.FindAsync(id);

        if (blog == null)
        {
            return NotFound();
        }

        return blog;
    }

    // POST: api/blogs
    [HttpPost]
    public async Task<ActionResult<Blog>> PostBlog(Blog blog)
    {
        _context.Blogs.Add(blog);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetBlog), new { id = blog.Id }, blog);
    }

    // GET: api/blogs/import/my-medium-posts
    [HttpGet("import/my-medium-posts")]
    public async Task<IActionResult> ImportMyMediumPosts()
    {
        string username = "asomaniadev";
        string rssUrl = $"https://medium.com/feed/@{username}";

        try
        {
            var rssContent = await _httpClient.GetStringAsync(rssUrl);
            var doc = XDocument.Parse(rssContent);

            XNamespace contentNs = "http://purl.org/rss/1.0/modules/content/";
            var items = doc.Descendants("item");

            int importedCount = 0;

            foreach (var item in items)
            {
                string title = item.Element("title")?.Value ?? "";
                string link = item.Element("link")?.Value ?? "";

                string contentValue = item.Element(contentNs + "encoded")?.Value ?? "";

                string pubDateStr = item.Element("pubDate")?.Value ?? "";
                DateTime pubDate = DateTime.TryParse(pubDateStr, out var dt) ? dt : DateTime.Now;

                bool exists = await _context.Blogs.AnyAsync(b => b.Link == link);
                if (exists)
                    continue;

                var blog = new Blog
                {
                    Title = title,
                    Content = contentValue, 
                    Link = link,
                    PublishedDate = pubDate
                };

                _context.Blogs.Add(blog);
                importedCount++;
            }

            await _context.SaveChangesAsync();

            return Ok(new { Imported = importedCount });
        }
        catch (Exception ex)
        {
            return BadRequest(new { error = ex.Message });
        }
    }

    // PUT: api/blogs/5
    [HttpPut("{id:int}")]
    public async Task<IActionResult> PutBlog(int id, Blog blog)
    {
        if (id != blog.Id)
        {
            return BadRequest();
        }

        _context.Entry(blog).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Blogs.Any(e => e.Id == id))
            {
                return NotFound();
            }
            throw;
        }

        return NoContent();
    }

    // DELETE: api/blogs/5
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteBlog(int id)
    {
        var blog = await _context.Blogs.FindAsync(id);
        if (blog == null)
        {
            return NotFound();
        }

        _context.Blogs.Remove(blog);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
