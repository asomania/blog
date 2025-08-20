using Microsoft.EntityFrameworkCore;
using BlogApi; // AppDbContext'in olduğu namespace

var builder = WebApplication.CreateBuilder(args);

// Veritabanı bağlantı dizesini yapılandırma
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddHttpClient();


// DbContext'i ekleyin ve SQL Server kullanarak yapılandırın
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(connectionString));

// CORS yapılandırması
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", builder =>
    {
        builder.WithOrigins("http://localhost:5173")  // Frontend adresi
               .AllowAnyMethod()
               .AllowAnyHeader()
               .AllowCredentials(); // Eğer kimlik doğrulama (cookie, token) gerekiyorsa
    });
});

// MVC yapılandırması
builder.Services.AddControllers();

// Swagger yapılandırması
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Swagger sadece geliştirme ortamında etkinleştirilir
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// CORS'u etkinleştir
app.UseCors("AllowSpecificOrigin");

app.UseHttpsRedirection();  // HTTPS yönlendirmelerini etkinleştir
app.UseAuthorization();     // Yetkilendirmeyi etkinleştir

// Controller'ları uygulamaya bağlayın
app.MapControllers();

// Uygulamanın çalışmasını başlatın
app.Run();
