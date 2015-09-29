namespace Connect2Fit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class expandingScheduleItem2 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.ScheduleItems", "ClassName", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.ScheduleItems", "ClassName", c => c.String());
        }
    }
}
