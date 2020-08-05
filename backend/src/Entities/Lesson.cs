using System;
using System.Collections.Generic;

namespace backend.src.Entities
{
    public class Lesson
    {
        public Lesson() { }


        public Lesson(string subject, decimal cost, Guid userId)
        {
            Subject = subject;
            Cost = cost;
            UserId = userId;
        }
        public Guid Id { get; set; }
        public string Subject { get; set; }
        public decimal Cost { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
        public virtual IList<LessonSchedule> LessonSchedules { get; set; }
    }
}