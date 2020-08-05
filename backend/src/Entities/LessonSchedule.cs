using System;


namespace backend.src.Entities
{
    public class LessonSchedule
    {
        public LessonSchedule(){}

        public LessonSchedule(int weekDay, int from, int to, Guid lessonId)
        {
            WeekDay = weekDay;
            From = from;
            To = to;
            LessonId = lessonId;
        }

        public Guid Id { get; set; }
        public int WeekDay { get; set; }
        public int From { get; set; }
        public int To { get; set; }
        public Guid LessonId { get; set; }
        public Lesson Lesson { get; set; }
    }
}