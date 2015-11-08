using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Connect2Fit.Models
{
    public class CalendarEvent
    {

        public int id { get; set; }

        public long orderDate { get; set; }

        public string date { get; set; }

        public string time { get; set; }

        public string duration { get; set; }

        public string title { get; set; }

        public string instructor { get; set; }

        public int attendiesCount { get; set; }

        public string[] attendies { get; set; }

        public bool LoggedInUserAttending { get; set; }

        public int maxAttendies { get; set; }

        public bool sessionEnded { get; set; }






    }
}