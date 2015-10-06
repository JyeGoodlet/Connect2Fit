namespace Connect2Fit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class expandingScheduleItem9 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ScheduleItems", "sessionTime", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.ScheduleItems", "sessionTime");
        }
    }
}
