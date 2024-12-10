using Microsoft.EntityFrameworkCore;
using BlogApi.Models;

public class AppDbContext : DbContext
{
    public DbSet<Blog> Blogs { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }
}
