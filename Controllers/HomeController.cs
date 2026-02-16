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
            ViewBag.ShowSidebar = true;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Title = "About Us";
            ViewBag.ShowSidebar = true;
            return View();
        }

        public ActionResult Dashboard()
        {
            ViewBag.Title = "Dashboard";
            ViewBag.ShowSidebar = false;
            return View();
        }

        public ActionResult Mission()
        {
            ViewBag.Title = "Mission & Vision";
            ViewBag.ShowSidebar = false;
            return View();
        }

        public ActionResult OnlineForm()
        {
            ViewBag.Title = "Online Form";
            ViewBag.ShowSidebar = false;
            return View();
        }

        public ActionResult AdmitCard()
        {
            ViewBag.Title = "Admit Card";
            ViewBag.ShowSidebar = false;
            return View();
        }

        public ActionResult Results()
        {
            ViewBag.Title = "Results";
            ViewBag.ShowSidebar = false;
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Title = "Contact Us";
            ViewBag.ShowSidebar = false;
            return View();
        }
    }
}
