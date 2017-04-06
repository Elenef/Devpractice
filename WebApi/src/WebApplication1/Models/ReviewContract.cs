using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class ReviewContract
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public string Created { get; set; }
        public string Name { get; set; }
    }
}
