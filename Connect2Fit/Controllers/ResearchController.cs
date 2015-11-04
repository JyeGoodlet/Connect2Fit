using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
// this controller contains all the playing around we are doing when identifing or refining the technology used in the project
namespace Connect2Fit.Controllers
{
    public class ResearchController : Controller
    {
        // GET: Research
        public ActionResult Index()
        {
            return View();
        }
        // GET: Motioncap
        public ActionResult Motioncap()
        {
            return View();
        }
        // GET: Trackerjs
        public ActionResult Trackerjs()
        {
            return View();
        }
        // GET: objectTracker
        public ActionResult ObjectTracker()
        {
            return View();
        }
        // GET: auto colour picker tracker
        public ActionResult ColorTracker()
        {
            return View();
        }
        // GET: arm tracker
        public ActionResult ArmTracker()
        {
            return View();
        }
        // GET: arm tracker
        public ActionResult ArmTrackerAngular()
        {
            return View();
        }
        // GET: Arm Waving Animation
        public ActionResult ArmWaving()
        {
            return View();
        }
        // GET: Avatar Test Script
        public ActionResult AvatarTesterAngular()
        {
            return View();
        }
        // GET: Head Snapshot
        public ActionResult HeadSnapshot()
        {
            return View();
        }

        // GET: Audio Dection
        public ActionResult AudioDetection()
        {
            return View();
        }
    }
}