namespace Connect2Fit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class cleandatabase2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.ClientsScheduleItems", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.ClientsScheduleItems", "ScheduleItem_id", "dbo.ScheduleItems");
            DropIndex("dbo.ClientsScheduleItems", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.ClientsScheduleItems", new[] { "ScheduleItem_id" });
            DropTable("dbo.ClientsScheduleItems");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.ClientsScheduleItems",
                c => new
                    {
                        ApplicationUser_Id = c.String(nullable: false, maxLength: 128),
                        ScheduleItem_id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.ApplicationUser_Id, t.ScheduleItem_id });
            
            CreateIndex("dbo.ClientsScheduleItems", "ScheduleItem_id");
            CreateIndex("dbo.ClientsScheduleItems", "ApplicationUser_Id");
            AddForeignKey("dbo.ClientsScheduleItems", "ScheduleItem_id", "dbo.ScheduleItems", "id", cascadeDelete: true);
            AddForeignKey("dbo.ClientsScheduleItems", "ApplicationUser_Id", "dbo.AspNetUsers", "Id", cascadeDelete: true);
        }
    }
}
