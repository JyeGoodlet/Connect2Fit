namespace Connect2Fit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class expandingScheduleItem8 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ScheduleItems", "maxAttendies", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ScheduleItems", "maxAttendies");
        }
    }
}
