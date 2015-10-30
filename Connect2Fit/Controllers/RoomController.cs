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

            if (User.IsInRole("Instructor"))
            {
                return View("InstructorRoom", scheduleItem);
            }
            else if (User.IsInRole("Client"))
            {
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