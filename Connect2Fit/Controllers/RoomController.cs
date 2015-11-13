using Connect2Fit.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Connect2Fit.Controllers
{
    public class RoomController : Controller
    {

        private ApplicationDbContext db;

        public RoomController()
        {
            db = new ApplicationDbContext();

        }


        // GET: Room
        [Authorize(Roles = "Instructor,Client")]
        public ActionResult Index(int id)
        {
            return View(id);
        }

        [Authorize(Roles = "Instructor,Client")]
        public ActionResult Room(int id = 1)
        {

            //get schedule details
            ScheduleItem scheduleItem = db.scheduleItems.SingleOrDefault(x => x.id == id);

            //Check if room can be entered yet. (hour before and hour after block)
            //also check if room exists
            
            if (/*scheduleItem == null || DateTime.Now.ToLocalTime() > scheduleItem.ClassDateTime.ToLocalTime().AddHours(1) || DateTime.Now.ToLocalTime() < scheduleItem.ClassDateTime.ToLocalTime().AddHours(-1) ||*/ scheduleItem.sessionEnded)
            {

                //redirect to my classes for now
                return RedirectToAction("MyClasses", "Scheduler");

            }

            if (User.IsInRole("Instructor"))
            {
                //check if user is instructor for the class
                if (scheduleItem.instructor.Email != User.Identity.Name)
                {
                    return RedirectToAction("MyClasses", "Scheduler");

                }
                 

                return View("InstructorRoom", scheduleItem);
            }
            else if (User.IsInRole("Client"))
            {
                //check if user is client of the class
                if (scheduleItem.ApplicationUsers.Where(x => x.Email == User.Identity.Name).ToList().Count == 0)
                {
                    return RedirectToAction("MyClasses", "Scheduler");
                }

                return View("ClientRoom", scheduleItem);
            }
            else
            {
                throw new HttpException("Role Not Found");
            }


           

        }


        public ActionResult WebRtcTest(int id = 1)
        {
            return View(id);

        }

        [Authorize(Roles = "Instructor,Client")]
        public JsonResult GetAttendies(int id)
        {
            ScheduleItem scheduleItem = db.scheduleItems.SingleOrDefault(x => x.id == id);

            var attendies = (from item in scheduleItem.ApplicationUsers
                            select new { id = item.Id, name = item.Email }).ToDictionary
                            ( g => g.id, g => g);

            

            return Json(attendies, JsonRequestBehavior.AllowGet);
           
        }


       



    }
}