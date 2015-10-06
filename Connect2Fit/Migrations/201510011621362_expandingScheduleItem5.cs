namespace Connect2Fit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class expandingScheduleItem5 : DbMigration
    {
        public override void Up()
        {
            
            DropIndex("dbo.AspNetUsers", new[] { "ApplicationUser_Id" });
            AddColumn("dbo.ScheduleItems", "ApplicationUser_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.ScheduleItems", "ApplicationUser_Id");
            DropColumn("dbo.AspNetUsers", "ApplicationUser_Id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "ApplicationUser_Id", c => c.String(maxLength: 128));
            DropIndex("dbo.ScheduleItems", new[] { "ApplicationUser_Id" });
            DropColumn("dbo.ScheduleItems", "ApplicationUser_Id");
            CreateIndex("dbo.AspNetUsers", "ApplicationUser_Id");
        }
    }
}
