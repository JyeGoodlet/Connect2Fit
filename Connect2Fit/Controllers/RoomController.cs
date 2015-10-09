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
        public ActionResult Index(int id)
        {
            return View(id);
        }

        //after the views have been created this can be merged into a single Room action. with different views
        public ActionResult InstructorRoom(int id = 1)
        {
            //get schedule details
            ScheduleItem scheduleItem = db.scheduleItems.SingleOrDefault(x => x.id == id);

            return View(scheduleItem);
        }

        public ActionResult ClientRoom(int id = 1)
        {

            //get schedule details
            ScheduleItem scheduleItem = db.scheduleItems.SingleOrDefault(x => x.id == id);
            return View(scheduleItem);
        }

        public ActionResult WebRtcTest(int id = 1)
        {
            return View(id);

        }


        public JsonResult GetAttendies(int id)
        {
            ScheduleItem scheduleItem = db.scheduleItems.SingleOrDefault(x => x.id == id);

            var attendies = from item in scheduleItem.ApplicationUsers
                            select new { name = item.Email };
            return Json(attendies, JsonRequestBehavior.AllowGet);
           
        }


       



    }
}