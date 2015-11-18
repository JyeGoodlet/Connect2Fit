using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Collections.Generic;

namespace Connect2Fit.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class ApplicationUser : IdentityUser
    {

        public string Name { get; set; }

        public virtual ICollection<ScheduleItem> ScheduleItems { get; set; } 

        public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<ApplicationUser> manager)
        {
            // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
            var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
            // Add custom user claims here
            return userIdentity;
        }
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext()
            : base("DB_Connect2Fit", throwIfV1Schema: false)
        {
        }

        public DbSet<ScheduleItem> scheduleItems { get; set; }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            /*
            .Map(t => t.MapLeftKey("dbo.Client_id")
         .MapRightKey("dbo.ScheduleItem_id")
         .ToTable("dbo.ClientsScheduleItems"));
            */

            modelBuilder.Entity<ApplicationUser>().HasMany(x => x.ScheduleItems).WithMany().Map(t => t.ToTable("ClientsScheduleItems")); ;
            modelBuilder.Entity<ScheduleItem>().HasMany(x => x.Clients ).WithMany().Map(t => t.ToTable("ScheduleItemsClients"));

            base.OnModelCreating(modelBuilder);
        }

    }
}