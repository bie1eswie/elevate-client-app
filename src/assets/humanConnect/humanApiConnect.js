function HumanApiConnect(entityNumber, publicToken) {
    var entityNumber = entityNumber;
    var clientId = "5726f93bd107d6ad899e272c48702f1767d60330";

    var publicTokenValue;
    if (publicToken == undefined || publicToken == null) {
        publicTokenValue = "";
    } else {
        publicTokenValue = publicToken;
    }

    var options = {
        clientUserId: encodeURIComponent(entityNumber),
        clientId: clientId,
        publicToken: "",
        finish: function (err, sessionTokenObject) {
            console.log(sessionTokenObject)
        },
        close: function () {
            /* (optional) Called when a user closes the popup
                     without connecting any data sources */
            formComponent.callOnClose(false);
        },
        error: function (err) {
            /* (optional) Called if an error occurs when loading
                     the popup. */
        },
    };
    HumanConnect.open(options);
}