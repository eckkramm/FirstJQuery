
function hideContent() {
    $("p").hide();
}


function SaveLastname() {
    lastname = $("#lastname").val();
    //$("p").text("Hello " + lastname);
    $("#listing").append(addToList(lastname));
     $(".btnDelete").click(function () {
         temp = $(this).parent("tr:first");
         $(this).parents("tr:first")[0].remove();
    });
}

function addToList(entry) {
   
    $(".btnDelete").off();
   
    return "<tr><td>" + entry + "</td><td>false</td>" +
        "<td><button class='btnDelete btn btn-warning'>delete</button></td></tr>";
}

function LoadData() {
    //make ajax call
    LoadDemoData(DemoDataLoadSuccess, DemoDataLoadError);
}

function DemoDataLoadSuccess(data) {
    alert(data.action);
}

function DemoDataLoadError(error) {
    alert("Arghh!");

}