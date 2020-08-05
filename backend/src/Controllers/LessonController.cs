using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using backend.src.data;
using backend.src.dtos;
using backend.src.Entities;
using backend.src.Models;
using backend.src.utils;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace backend.src.Controllers
{
    [ApiController]
    [Route("lessons")]
    public class LessonController : ControllerBase
    {
        private readonly Context _context;

        public LessonController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Index([FromQuery] int weekday, [Required] string subject, [Required] string time)
        {
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }

            int timeInMinutes = HourUtils.HourToMinute(time);
            
            var Lessons = from lesson in _context.Lessons.Include(l => l.User).Include(l => l.LessonSchedules)
                            join lessonSchedule in _context.LessonSchedules
                                on lesson.Id equals lessonSchedule.LessonId
                            join user in _context.Users
                                on lesson.UserId equals user.Id
                            where 
                                    lesson.Subject == subject
                                    && lessonSchedule.WeekDay == weekday
                                    && lessonSchedule.From <= timeInMinutes
                                    && lessonSchedule.To > timeInMinutes
                            select lesson;

            return Ok(Lessons.ToList());
        }


        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateLessonModel model)
        {
            if(!ModelState.IsValid){
                return BadRequest(ModelState);
            }

            User user = new User(model.Name, model.Avatar, model.Whatsapp, model.Bio);
            await _context.Users.AddAsync(user);

            Lesson lesson = new Lesson(model.Subject, model.Price, user.Id);
            await _context.Lessons.AddAsync(lesson);

            IList<LessonSchedule> lessonSchedule = ScheduleToListLessonSchedule.Generate(model.Schedule, lesson.Id);
            await _context.LessonSchedules.AddRangeAsync(lessonSchedule);

            await _context.SaveChangesAsync();
            return Created($"lesson/{lesson.Id}", new { success = true });
        }
    }
}
