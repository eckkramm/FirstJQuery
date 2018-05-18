


function LoadDemoData(onSuccess, onError) {
    $.ajax({
        url: "http://localhost",
        cache: false,
        type: "get",
        dataType: "json",
        success: onSuccess,
        error: onError,
        data: ""

    });
}