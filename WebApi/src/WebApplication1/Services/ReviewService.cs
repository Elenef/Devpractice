using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WebApplication1.Models;

namespace WebApplication1.Services
{
    public class ReviewService
    {
        private ReviewContext db;
        private List<ReviewContract> res = new List<ReviewContract> { };
        private Review rev;


        public ReviewService(ReviewContext context)
        {
            db = context;
        }


        public List<ReviewContract> List()
        {
           List <Review> review = db.Reviews.ToList();
                          
            foreach (Review p in review)
            {
                res.Add(new ReviewContract() { Id = p.Id, Comment = p.Comment, Created = p.Created.ToString(), Name = p.Name });
            }

            return res;  
        }


        public List<ReviewContract> SearchList(string searchText)
        {

            List<Review> selectedReviews = db.Reviews.Where(r => r.Comment.Contains(searchText) || r.Name.Contains(searchText)).ToList();
            foreach (Review r in selectedReviews)
            {
                res.Add(new ReviewContract() { Id = r.Id, Comment = r.Comment, Created = r.Created.ToString(), Name = r.Name }); 
            }
           
            return res;

        }

        // private ReviewContract _data = new ReviewContract { Name = "Nick", Comment = "Good"};


        public ReviewContract AddReview(ReviewContract data)
        {
            //data = _data;

            rev = (new Review() {
                Comment = data.Comment,
                Created = DateTime.Now,
                Name = data.Name});

            db.Reviews.Add(rev);
            db.SaveChanges();

            return data;
        }




    }
}
