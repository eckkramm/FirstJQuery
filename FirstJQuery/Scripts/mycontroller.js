var views = ["page1", "page2", "page3"];

$(document).ready(function () {

    switchView("page2");
    $("#btnC1").click(function () { switchView("page2"); });
    $("#btnC2").click(function () { switchView("page3"); });
    $("#btnC3").click(function () { switchView("page1"); LoadData(); });
    $("#btnSaveLastname").click(SaveLastname);
    $(".btnDelete").click(function () {
        $(this).parents("tr:first")[0].remove();
    });
});

function switchView(newView) {
    for (var i = 0; i < views.length; i++) {
        if (newView == views[i]) {
            $("#" + newView).show();
        }
        else {
            $("#" + views[i]).hide();
        }
    }
}