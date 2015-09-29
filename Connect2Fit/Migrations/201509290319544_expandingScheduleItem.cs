namespace Connect2Fit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class expandingScheduleItem : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ScheduleItems", "ClassName", c => c.String());
            AddColumn("dbo.ScheduleItems", "Duration", c => c.Time(nullable: false, precision: 7));
            AddColumn("dbo.AspNetUsers", "ScheduleItem_id", c => c.Int());
            CreateIndex("dbo.AspNetUsers", "ScheduleItem_id");
            AddForeignKey("dbo.AspNetUsers", "ScheduleItem_id", "dbo.ScheduleItems", "id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.AspNetUsers", "ScheduleItem_id", "dbo.ScheduleItems");
            DropIndex("dbo.AspNetUsers", new[] { "ScheduleItem_id" });
            DropColumn("dbo.AspNetUsers", "ScheduleItem_id");
            DropColumn("dbo.ScheduleItems", "Duration");
            DropColumn("dbo.ScheduleItems", "ClassName");
        }
    }
}
