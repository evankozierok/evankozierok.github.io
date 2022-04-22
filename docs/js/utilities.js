jQuery(document).ready(function($){
    $("#copied-dialog").dialog({
        autoOpen: false,
        position: {my: "right", at: "left center", of: "#email-copy", within: "footer"},
        width: 0,
        height: 50,
    });
    
    
});

function copyText(id) {
    var text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);

    $("#copied-dialog").dialog("open");
    // $("#copied-dialog").dialog("moveToTop");
    setTimeout(close, 1000);
}

function close() {
    $("#copied-dialog").dialog("close")
}
