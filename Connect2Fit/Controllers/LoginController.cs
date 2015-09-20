using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Connect2Fit.Models;

namespace Connect2Fit.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }



        public ActionResult ClientSignUp()
        {

            return View();
        }

        //idea is to have a seperate sign up for clients and instructors
        [HttpPost]
        public ActionResult ClientSignUp(SignupView signup)
        {

            throw new NotImplementedException();

        }
    }
}