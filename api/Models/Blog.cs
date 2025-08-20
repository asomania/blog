namespace BlogApi.Models;

public class Blog
{
    public int Id { get; set; }
    public string? Title { get; set; }  
    public string? Content { get; set; } 
    public string? Link { get; set; }  
    public DateTime? PublishedDate { get; set; }
}
