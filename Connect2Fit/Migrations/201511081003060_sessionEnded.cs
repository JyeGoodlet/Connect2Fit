namespace Connect2Fit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class sessionEnded : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ScheduleItems", "sessionEnded", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.ScheduleItems", "sessionEnded");
        }
    }
}
