({
	onInit : function(component, event, helper) {
        try {
    			console.log('>> selectedClient : ' + component.get("v.selectedClient"));
    			helper.getRecentlyViewed(component);
        } catch(e) {
        }
    },

    openAndLogin : function(component, event, helper) {
       var loginUrl = event.target.id;
       console.log('>> loginUrl : ' + loginUrl);
       window.open(loginUrl);
    },

    openAndEdit : function(component, event, helper) {
        //window.open("https://www.w3schools.com");
        var id = event.target.id;
        console.log('>> Id : ' + id);
        var editUrl =  '/' + id + '/e';
        window.open(editUrl);
    },

    addCredential : function(component, event, helper) {
        //window.open("https://www.w3schools.com");
        var id = event.target.id;
        console.log('>> Id : ' + id);
        var newRecordUrl =  '/a0B/e?retURL=%2Fa0B%2Fo';
        window.open(newRecordUrl);
    },

    fetchCreds : function(component, event, helper) {
	   
       console.log('>> selectedClient : ' + component.get("v.selectedClient"));
       helper.getAllClientCreds(component, event, helper);
    },

    viewDetails : function(component, event, helper) {
	   
       console.log('>> Inside viewDetails');
       console.log('>> selectedClient : ' + component.get("v.selectedClient"));
       helper.getClientDetails(component, event, helper);
    },

    openRota : function(component, event, helper) {
     
       console.log('>> Inside openRota');
       var rotaUrl = 'https://docs.google.com/spreadsheets/d/1buC1DiYUzhMXb9ysOyVhqlnolq1JIf6WABuPf3Dm59g/edit#gid=0';
       window.open(rotaUrl);
    },

    openTimesheet : function(component, event, helper) {
     
       console.log('>> Inside openTimesheet');
       var kimbleUrl = 'https://makepositive--kimbleone.eu1.visual.force.com/apex/timesheet?sfdc.tabName=01rD00000006oBF';
       window.open(kimbleUrl);
    },

    openUkBankHolidays : function(component, event, helper) {
     
       console.log('>> Inside openUkBankHolidays');
       var ukBankHolidaysUrl = 'https://www.gov.uk/bank-holidays';
       window.open(ukBankHolidaysUrl);
    },

    openGtm : function(component, event, helper) {
     
       console.log('>> Inside openGtm');
       var openGtmUrl = 'https://www.gotomeeting.com/redirect/host/host-meeting';
       window.open(openGtmUrl);
    },

    openSlack : function(component, event, helper) {
     
       console.log('>> Inside openSlack');
       var openSlackUrl = 'https://makepositive.slack.com/messages/G5UKQPHTM/';
       window.open(openSlackUrl);
    }
})