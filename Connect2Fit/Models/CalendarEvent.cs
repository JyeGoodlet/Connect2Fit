﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Connect2Fit.Models
{
    public class CalendarEvent
    {

        public int id { get; set; }

        public string time { get; set; }

        public string duration { get; set; }

        public string title { get; set; }

        public string instructor { get; set; }

        public int attendiesCount { get; set; }

        public bool LoggedInUserAttending { get; set; }
       



    }
}