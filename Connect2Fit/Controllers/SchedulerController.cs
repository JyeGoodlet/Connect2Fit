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




        // GET: Scheduler
        public ActionResult Index()
        {
            return RedirectToAction("Calendar", "Scheduler");
        }


        public ActionResult Calendar()
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
            var db = new ApplicationDbContext();

            //set instructor to be logged in user
            item.instructor = db.Users.Where(x => x.Email == User.Identity.Name).ToList()[0];

            db.scheduleItems.Add(item);
            db.SaveChanges();

            return View(item);
        }


    }
}