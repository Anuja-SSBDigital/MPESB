using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MPESB.Models;

namespace MPESB.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            ViewBag.Title = "Home";
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Title = "About Us";
            return View();
        }

        public ActionResult Dashboard()
        {
            ViewBag.Title = "Dashboard";
            return View();
        }

        public ActionResult Mission()
        {
            ViewBag.Title = "Mission & Vision";
            return View();
        }

        public ActionResult OnlineForm()
        {
            ViewBag.Title = "Online Form";
            return View();
        }

        public ActionResult AdmitCard()
        {
            ViewBag.Title = "Admit Card";
            return View();
        }

        public ActionResult Results()
        {
            ViewBag.Title = "Results";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Title = "Contact Us";
            return View();
        }
    }
}
