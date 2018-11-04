using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace VueDemo2.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string viewname)
        {
            if (string.IsNullOrEmpty(viewname))
            {
                return View("Index");
            }
            else
            {
                return View(viewname);
            }
        }

        public ActionResult List(string count)
        {
            IList<string> list = new List<string>();
            if (!string.IsNullOrEmpty(count))
            {
                for (int i = 0; i < int.Parse(count); i++)
                {
                    list.Add(String.Format("servere side data {0}", i));
                }
            }

            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}