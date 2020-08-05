using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace backend.src.Models
{
    public class CreateLessonModel
    {
        [Required, MinLength(3)]
        public string Name { get; set; }
        [Required]
        public string Avatar { get; set; }
        [Required]
        public string Whatsapp { get; set; }
        [Required]
        public string Bio { get; set; }
        [Required]
        public string Subject { get; set; }
        [Required]
        public decimal Price { get; set; }
        [Required, MinLength(1)]
        public IList<Schedule> Schedule { get; set; }

    }

    public class Schedule
    {
        public int WeekDay { get; set; }
        [Required, RegularExpression(@"([01]?[0-9]|2[0-3]):[0-5][0-9]", ErrorMessage = "Example: 8:00 or 16:00")]
        public string From { get; set; }
        [Required, RegularExpression(@"([01]?[0-9]|2[0-3]):[0-5][0-9]", ErrorMessage = "Example: 8:00 or 16:00")]
        public string To { get; set; }
    }
}