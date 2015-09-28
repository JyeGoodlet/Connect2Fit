using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Connect2Fit.Models
{
    public class CalendarEvent
    {

        public string title { get; set; }

        public DateTime start { get; set; }

        public bool allDay { get; set; }


    }
}