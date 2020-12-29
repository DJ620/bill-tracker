$(document).ready(() => {

    console.log("hello world");

    $("#newBill").on("submit", event => {
        event.preventDefault();
        if ($("#billName").val() && $("#billAmount").val()){
            let info = {
                name: $("#billName").val().trim(),
                amount: $("#billAmount").val().trim()
            };
            $.ajax({
                url: "/newBill",
                method: "POST",
                data: info
            }).then(response => {
                console.log(response);
                console.log("got it");
            });
        };
    });
});
