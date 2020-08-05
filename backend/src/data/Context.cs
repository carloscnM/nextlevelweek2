using backend.src.Entities;
using Microsoft.EntityFrameworkCore;

namespace backend.src.data{
    public class Context : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Lesson> Lessons { get; set; }
        public DbSet<LessonSchedule> LessonSchedules { get; set; }
        public Context(DbContextOptions<Context> options) : base(options) 
        {
            
        }
        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // builder.Entity<LessonSchedule>()
            //     .HasOne(ls => ls.Lesson)
            //     .WithMany(l => l.LessonSchedules)
            //     .HasForeignKey(ls => ls.LessonId);


            builder.Entity<Lesson>()
                .HasMany(l => l.LessonSchedules)
                .WithOne(ls => ls.Lesson)
                .HasForeignKey(ls => ls.LessonId);
        }
    }
}