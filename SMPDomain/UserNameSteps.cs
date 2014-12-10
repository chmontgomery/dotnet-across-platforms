using NUnit.Framework;
using TechTalk.SpecFlow;

namespace SMPDomain
{
    [Binding]
    public class UserNameSteps
    {
        User user = new User();
        private string fullName;

        [Given(@"the user's first name")]
        public void GivenTheUserSFirstName()
        {
            user.FirstName = "Chris";
        }

        [Given(@"the user's last name")]
        public void GivenTheUserSLastName()
        {
            user.LastName = "Montgomery";
        }

        [When(@"I get their full name")]
        public void WhenIGetTheirFullName()
        {
            fullName = user.getUserName();
        }

        [Then(@"the result should be their names combines with a space")]
        public void ThenTheResultShouldBeTheirNamesCombinesWithASpace()
        {
            Assert.AreEqual("Chris Montgomery", fullName);
        }
    }
}