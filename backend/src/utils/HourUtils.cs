using System;
using System.Collections.Generic;
using System.Linq;

namespace backend.src.utils
{
    public static class HourUtils
    {
        public static int HourToMinute(string hourText)
        {
            List<int> listHourToMinute =  hourText.Split(':').Select(Int32.Parse).ToList();
            int hour = listHourToMinute[0];
            int minute = listHourToMinute[1];

            return (hour * 60) + minute;
        }
    }
}