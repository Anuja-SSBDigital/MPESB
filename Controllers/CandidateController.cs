using Microsoft.AspNetCore.Mvc;

namespace MPESB.Controllers
{
    public class CandidateController : Controller
    {
        // GET: Candidate/ExamSchedule
        public ActionResult ExamSchedule()
        {
            ViewBag.Title = "Exam Schedule";
            return View();
        }

        // GET: Candidate/RuleBook
        public ActionResult RuleBook()
        {
            ViewBag.Title = "Rule Book";
            return View();
        }

        // GET: Candidate/Statistics
        public ActionResult Statistics()
        {
            ViewBag.Title = "Statistical Information";
            return View();
        }

        // GET: Candidate/OldQuestionPaper
        public ActionResult OldQuestionPaper()
        {
            ViewBag.Title = "Old Question Papers";
            return View();
        }

        // GET: Candidate/Objections
        public ActionResult Objections()
        {
            ViewBag.Title = "Question Objections / Response Sheet";
            return View();
        }

        // GET: Candidate/DownloadForms
        public ActionResult DownloadForms()
        {
            ViewBag.Title = "Download Forms";
            return View();
        }

        // GET: Candidate/ImportantNotices
        public ActionResult ImportantNotices()
        {
            ViewBag.Title = "Important Notices";
            return View();
        }

        // GET: Candidate/RTI
        public ActionResult RTI()
        {
            ViewBag.Title = "Right to Information";
            return View();
        }
    }
}
