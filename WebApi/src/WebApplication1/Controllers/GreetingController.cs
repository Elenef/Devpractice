using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Topic.Models;
using System.Collections.ObjectModel;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class GreetingController : Controller
    {
        Random rnd = new Random();
        static string[] greetings_array = new string[4] { "Hello", "Welcome", "Hey", "Good morning" };
        // 
        // GET: api/greeting/
        [HttpGet]



        public JsonResult Get()
        {
            string Greeting;
            return Json(Greeting = greetings_array[rnd.Next(0, greetings_array.Length)]);
            
        }



    }
}
