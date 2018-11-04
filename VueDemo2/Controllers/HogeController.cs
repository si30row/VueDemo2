using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VueDemo2.Controllers
{
    public class HogeController : Controller
    {
        // GET: Hoge
        public ActionResult Index()
        {
            return View();
        }
    }
}