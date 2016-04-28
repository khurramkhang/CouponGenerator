using EPiServer.Shell.ViewComposition;

namespace EpiServerCommerce.Coupon.Generator
{
    [Component]
    public class RandomCoupons : ComponentDefinitionBase
    {
        public RandomCoupons()
            : base("coupon.generator.randomcoupons")
        {
            Title = "Random Coupons";
            Description = "Generate multiple random Alpha Numeric coupon codes";
            SortOrder = 500;
            PlugInAreas = new[] { "/episerver/cms/assets/defaultgroup", "/episerver/commerce/assets/defaultgroup" };
            Categories = new[] { "commerce" };
        }
    }

}