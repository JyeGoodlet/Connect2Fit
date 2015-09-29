using Connect2Fit.Models;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Connect2Fit.Controllers
{
    public class SchedulerController : Controller
    {

        private ApplicationDbContext db;

        public SchedulerController()
        {
            db = new ApplicationDbContext();

        }



        // GET: Scheduler
        public ActionResult Index()
        {
            return RedirectToAction("Calendar", "Scheduler");
        }


        public ActionResult Calendar()
        {
            return View();
        }

        //changing from calendar based system to a 7 day list system
        public ActionResult Schedule()
        {
            return View();
        }


        [Authorize(Roles = "Instructor")]
        public ActionResult ScheduleClass()
        {

            return View();

        }


        [HttpPost]
        [Authorize(Roles = "Instructor")]
        public ActionResult ScheduleClass(ScheduleItem item)
        {

            //set instructor to be logged in user
            item.instructor = db.Users.Where(x => x.Email == User.Identity.Name).ToList()[0];
            if (ModelState.IsValid)
            {
                db.scheduleItems.Add(item);
                db.SaveChanges();
            }

            return View(item);
        }


        public JsonResult ScheduledClasses(DateTime start, DateTime end)
        {

            //get all scheduled Classes in date range from the database
            var items = (from item in db.scheduleItems
                        where item.ClassDateTime > start
                        && item.ClassDateTime < end
                        select item).ToList();

            //create CalandarEvent Items
            List<CalendarEvent> calEventItems = new List<CalendarEvent>();
            foreach(var item in items)
            {
                calEventItems.Add(new CalendarEvent{ title = item.instructor.Email, allDay = false, start = item.ClassDateTime });

            }



            //return them as a json object.
            return Json(calEventItems, JsonRequestBehavior.AllowGet);

        }


    }
}