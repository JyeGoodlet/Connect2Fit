using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Connect2Fit.Controllers
{
    public class RoomController : Controller
    {
        // GET: Room
        public ActionResult Index(int id)
        {
            return View(id);
        }

        //after the views have been created this can be merged into a single Room action. with different views
        public ActionResult InstructorRoom(int id)
        {
            return View(id);
        }

        public ActionResult ClientRoom(int id)
        {
            return View(id);
        }

        public ActionResult WebRtcTest(int id = 1)
        {
            return View(id);

        }



    }
}