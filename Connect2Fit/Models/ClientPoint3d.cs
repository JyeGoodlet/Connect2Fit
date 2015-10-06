using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Connect2Fit.Models
{
    public class ClientPoint3D
    {
        public int pointId { get; set; }

        public int clientId { get; set; }

        public double x { get; set; }

        public double y { get; set; }

        public double z { get; set; }

    }
}