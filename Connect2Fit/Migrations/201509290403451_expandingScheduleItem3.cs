namespace Connect2Fit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class expandingScheduleItem3 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.ScheduleItems", "Duration");
        }
        
        public override void Down()
        {
            AddColumn("dbo.ScheduleItems", "Duration", c => c.Time(nullable: false, precision: 7));
        }
    }
}
