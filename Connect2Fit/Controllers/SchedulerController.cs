using Connect2Fit.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
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

        [HttpGet]
        public JsonResult ScheduledClasses(DateTime day)
        {

            //get all scheduled Classes in date range from the database
            var items = (from item in db.scheduleItems
                        where (EntityFunctions.TruncateTime(item.ClassDateTime)  == day.Date)
                        select item).ToList();

            //create CalandarEvent Items
            List<CalendarEvent> calEventItems = new List<CalendarEvent>();
            foreach(var item in items)
            {
                calEventItems.Add(new CalendarEvent{ id = item.id, time = item.ClassDateTime.ToShortTimeString(), duration = "15 minutes",
                    title = item.ClassName, instructor = item.instructor.Name, attendiesCount = item.ApplicationUsers.Count(), LoggedInUserAttending = item.ApplicationUsers.Contains(db.Users.Find(User.Identity.GetUserId())) });

            }



            //return them as a json object.
            return Json(calEventItems, JsonRequestBehavior.AllowGet);

        }

        //book class
        [HttpPost]
        public JsonResult classEvent(CalendarEvent classEvent)
        {
            //check if user is logged in
            if (!User.Identity.IsAuthenticated)
            {
                return Json(new {message = "Error: User Not Logged In" });
            }

            //get class from database
            var classX = db.scheduleItems.Find(classEvent.id);


            //check if user is already in class
            if (classX.ApplicationUsers.Any(x => x.Id == User.Identity.GetUserId() ))
            {
                return Json(new { message = "Error: Already Attending Class" });
            }

            //check if class is full
            if (classX.ApplicationUsers.Count == 5)
            {
                return Json(new { message = "Error: Class Full" });

            }


            //TODO: check if instructor didnt try to book the class
            

            //if everything is ok book the the class
            classX.ApplicationUsers.Add(db.Users.Find(User.Identity.GetUserId()));
            db.Entry(classX).State = System.Data.Entity.EntityState.Modified;
            db.SaveChanges();



            return Json(new { message = "success" });
        }


    }
}