namespace Connect2Fit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class expandingScheduleItem7 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.ScheduleItems", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.AspNetUsers", "ScheduleItem_id", "dbo.ScheduleItems");
            DropIndex("dbo.ScheduleItems", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.AspNetUsers", new[] { "ScheduleItem_id" });
            CreateTable(
                "dbo.ApplicationUserScheduleItems",
                c => new
                    {
                        ApplicationUser_Id = c.String(nullable: false, maxLength: 128),
                        ScheduleItem_id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.ApplicationUser_Id, t.ScheduleItem_id })
                .ForeignKey("dbo.AspNetUsers", t => t.ApplicationUser_Id, cascadeDelete: true)
                .ForeignKey("dbo.ScheduleItems", t => t.ScheduleItem_id, cascadeDelete: true)
                .Index(t => t.ApplicationUser_Id)
                .Index(t => t.ScheduleItem_id);
            
            CreateTable(
                "dbo.ScheduleItemApplicationUsers",
                c => new
                    {
                        ScheduleItem_id = c.Int(nullable: false),
                        ApplicationUser_Id = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => new { t.ScheduleItem_id, t.ApplicationUser_Id })
                .ForeignKey("dbo.ScheduleItems", t => t.ScheduleItem_id, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.ApplicationUser_Id, cascadeDelete: true)
                .Index(t => t.ScheduleItem_id)
                .Index(t => t.ApplicationUser_Id);
            
            DropColumn("dbo.ScheduleItems", "ApplicationUser_Id");
            DropColumn("dbo.AspNetUsers", "ScheduleItem_id");
        }
        
        public override void Down()
        {
            AddColumn("dbo.AspNetUsers", "ScheduleItem_id", c => c.Int());
            AddColumn("dbo.ScheduleItems", "ApplicationUser_Id", c => c.String(maxLength: 128));
            DropForeignKey("dbo.ScheduleItemApplicationUsers", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropForeignKey("dbo.ScheduleItemApplicationUsers", "ScheduleItem_id", "dbo.ScheduleItems");
            DropForeignKey("dbo.ApplicationUserScheduleItems", "ScheduleItem_id", "dbo.ScheduleItems");
            DropForeignKey("dbo.ApplicationUserScheduleItems", "ApplicationUser_Id", "dbo.AspNetUsers");
            DropIndex("dbo.ScheduleItemApplicationUsers", new[] { "ApplicationUser_Id" });
            DropIndex("dbo.ScheduleItemApplicationUsers", new[] { "ScheduleItem_id" });
            DropIndex("dbo.ApplicationUserScheduleItems", new[] { "ScheduleItem_id" });
            DropIndex("dbo.ApplicationUserScheduleItems", new[] { "ApplicationUser_Id" });
            DropTable("dbo.ScheduleItemApplicationUsers");
            DropTable("dbo.ApplicationUserScheduleItems");
            CreateIndex("dbo.AspNetUsers", "ScheduleItem_id");
            CreateIndex("dbo.ScheduleItems", "ApplicationUser_Id");
            AddForeignKey("dbo.AspNetUsers", "ScheduleItem_id", "dbo.ScheduleItems", "id");
            AddForeignKey("dbo.ScheduleItems", "ApplicationUser_Id", "dbo.AspNetUsers", "Id");
        }
    }
}
