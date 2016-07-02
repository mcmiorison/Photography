$(document).ready(function () {
    $("#submit").click(function () {
        var yourname = $("#yourname").val();
        var youremail = $("#youremail").val();
        var yourmessage = $("#yourmessage").val();
         // Returns successful data submission message when the entered information is stored in database.
        $.post("your_message", {
                yourname: name,
                youremail: email,
                yourmessage: message,
                submit: Submit
            });
        
        });
    });
});


jQuery(document).on('ready', function() {
    jQuery('your_message').bind('submit', function(event){
        event.preventDefault();

        var form = this;
        var json = ConvertFormToJSON(form);

        $.ajax({
            type: "POST",
            url: "submit.php",
            data: json,
            dataType: "json"
        });
		
       
 