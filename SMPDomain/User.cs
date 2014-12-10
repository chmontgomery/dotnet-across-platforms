using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SMPDomain
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public User()
        {
            
        }

        public User(string firstName, string lastName)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
        }

        public string getUserName()
        {
            return this.FirstName + " " + this.LastName;
        }
    }
}
