using System;
using System.Collections.Generic;
using backend.src.Entities;
using backend.src.Models;
using backend.src.utils;

namespace backend.src.dtos
{
    public static class ScheduleToListLessonSchedule 
    {
        public static IList<LessonSchedule> Generate(IList<Schedule> model, Guid LessonId)
        {
            IList<LessonSchedule> LessonSchedule = new List<LessonSchedule>();

            foreach (var item in model)
            {
                int from = HourUtils.HourToMinute(item.From);
                int to = HourUtils.HourToMinute(item.To);
                LessonSchedule lesson = new LessonSchedule(item.WeekDay, from, to, LessonId);
                LessonSchedule.Add(lesson);
            }

            return LessonSchedule;
        }
    }
}