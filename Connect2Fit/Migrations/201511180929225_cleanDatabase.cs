namespace Connect2Fit.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class cleanDatabase : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.ApplicationUserScheduleItems", newName: "ClientsScheduleItems");
            RenameTable(name: "dbo.ScheduleItemApplicationUsers", newName: "ScheduleItemsClients");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.ScheduleItemsClients", newName: "ScheduleItemApplicationUsers");
            RenameTable(name: "dbo.ClientsScheduleItems", newName: "ApplicationUserScheduleItems");
        }
    }
}
