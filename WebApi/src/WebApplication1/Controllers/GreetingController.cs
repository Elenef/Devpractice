using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.ObjectModel;
using WebApplication1.Models;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class GreetingController : Controller
    {
       
        Random rnd = new Random();
        static string[] greetings_array = new string[] { "Добро пожаловать на наш сервис", "Рады видеть вас на нашем сервисе", "Приветствуем на нашем сервисе"};
        

        // GET: api/greeting/
        [HttpGet]

        
        public List<Topic> Get()
        { 
            return new List<Topic> {
                new Topic {Greeting = greetings_array[rnd.Next(0, greetings_array.Length)] }
            };
        }
        

       


    }
}
