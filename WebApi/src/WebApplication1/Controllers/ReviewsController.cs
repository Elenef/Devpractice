using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;
using Microsoft.AspNetCore.Cors;
using System.Diagnostics;
using System;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    public class ReviewsController : Controller
    {
       
        private ReviewService service;

        public ReviewsController(ReviewService _service)
        {
            service = _service;
        }

        
        [HttpPost]
        public ReviewContract AddReview([FromBody] ReviewContract data)
        {
            return service.AddReview(data);
        }
        

        [HttpGet]
        public List<ReviewContract> List(string search) {
            if(search == null)
            {
                return service.List();
            }
            return service.SearchList(search);
        }

        


        /*
        private ReviewContext db;
        private List<ReviewContract> res;

        public ReviewsController(ReviewContext context)
        {
            db = context;
        }
        
        

        [HttpGet]
        public List<ReviewContract> List()
        {
            
            List<Review> review = db.Reviews.ToList();
                          
            foreach (Review p in review)
            {
                res.Add(new ReviewContract() { Id = p.Id, Comment = p.Comment, Created = p.Created.ToString(), Name = p.Name });
            }

            return res;
           // return db.Reviews.ToList();
           
        }
    }*/
    }
    
}
