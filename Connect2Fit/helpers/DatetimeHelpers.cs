using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Connect2Fit.helpers
{
    public static class DatetimeHelpers
    {

        public static DateTime NowServerFix(this DateTime value)
        {

            return TimeZoneInfo.ConvertTimeFromUtc(DateTime.Now.ToUniversalTime(), TimeZoneInfo.FindSystemTimeZoneById("AUS Eastern Standard Time"));
        } 

    }
}