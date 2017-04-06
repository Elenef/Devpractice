using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class ReviewContext : DbContext
    {
        public DbSet<Review> Reviews { get; set; }
        public ReviewContext(DbContextOptions<ReviewContext> options)
            : base(options)
        {
        }
    }
}
