using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Connect2Fit.Models
{
    public class FlashMessage
    {
        public string Message { get; set; }

        public ContextId Context { get; set; }

        public string ContextString
        {
            get
            {
                var context =
                    this.Context == ContextId.Success ? "alert-success" :
                    this.Context == ContextId.Info ? "alert-info" :
                    this.Context == ContextId.Warning ? "alert-warning" :
                    this.Context == ContextId.Danger ? "alert-danger" : "";

                return context;
            }
        }

        public string Heading
        {
            get
            {
                var context =
                    this.Context == ContextId.Success ? "Success" :
                    this.Context == ContextId.Info ? "Info" :
                    this.Context == ContextId.Warning ? "Warning" :
                    this.Context == ContextId.Danger ? "Danger" : "";

                return context;
            }
        }

        public enum ContextId
        {
            Success,
            Info,
            Warning,
            Danger
        }

    }

    


}