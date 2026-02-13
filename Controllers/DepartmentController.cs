using Microsoft.AspNetCore.Mvc;

namespace MPESB.Controllers
{
    public class DepartmentController : Controller
    {
        // GET: Department/Advertisements
        public ActionResult Advertisements()
        {
            ViewBag.Title = "Advertisements / Notices";
            return View();
        }

        // GET: Department/Tenders
        public ActionResult Tenders()
        {
            ViewBag.Title = "Tender/RFP/EoI";
            return View();
        }

        // GET: Department/Forms
        public ActionResult Forms()
        {
            ViewBag.Title = "Performa's & Form's Download";
            return View();
        }

        // GET: Department/GADCircular
        public ActionResult GADCircular()
        {
            ViewBag.Title = "GAD Group Examination Circular & Other Order";
            return View();
        }

        // GET: Department/WorkWithUs
        public ActionResult WorkWithUs()
        {
            ViewBag.Title = "Want to Work With Us";
            return View();
        }

        // GET: Department/PressRelease
        public ActionResult PressRelease()
        {
            ViewBag.Title = "Press Release";
            return View();
        }

        // GET: Department/ActViniyam
        public ActionResult ActViniyam()
        {
            ViewBag.Title = "Act and Viniyam";
            return View();
        }
    }
}
