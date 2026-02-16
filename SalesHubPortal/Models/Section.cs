using SalesHubPortal.Models;

namespace SalesHubPortal.Models
{

    public class Section
    {
        public string Name { get; set; } = string.Empty;
        public List<LinkItem> Links { get; set; } = new();
    }

}
