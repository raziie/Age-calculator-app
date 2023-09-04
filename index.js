$(".btn").on("mouseover", function() {
    $(".btn").addClass("hover");
});

$(".btn").on("mouseout", function() {
    $(".btn").removeClass("hover");
});

$("input").on("focus", function() {
    $(this).addClass("focused");
    $(this).removeClass("red-border");
    var label = $("label[for='" + $(this).attr('id') + "']");
    label.removeClass("red");
    $("#" + $(this).attr('id') + "-error").text("");
});

$("input").on("focusout", function() {
    $(this).removeClass("focused");
});

$(".btn").on("click", function() {

    const today = new Date();
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth() + 1;
    const thisDay = today.getDate();

    var problem = false;

    if (($("#day").val() === "") || ($("#day").val() > 31)) {
        problem = true;
        $("#day").addClass("red-border");
        var label = $("label[for='day']");
        label.addClass("red");
        if ($("#day").val() === "") {
            $("#day-error").text("This field is required");
        } else {
            $("#day-error").text("Must be a valid day");
        }
    }
    
    if (($("#month").val() === "") || ($("#month").val() > 12)) {
        problem = true;
        $("#month").addClass("red-border");
        var label = $("label[for='month']");
        label.addClass("red");
        if ($("#month").val() === "") {
            $("#month-error").text("This field is required");
        } else {
            $("#month-error").text("Must be a valid month");
        }
    }

    if (($("#year").val() === "") || ($("#year").val() > thisYear)) {
        problem = true;
        $("#year").addClass("red-border");
        var label = $("label[for='year']");
        label.addClass("red");
        if ($("#year").val() === "") {
            $("#year-error").text("This field is required");
        } else {
            $("#year-error").text("Must be in the past");
        }
    }

    if (($("#day").val() == 31) && !is31($("#month").val())) {
        problem = true;
        $("input").addClass("red-border");
        $("label").addClass("red");
        $("#day-error").text("Must be a valid date");
    }

    if (!problem) {
        const birthYear = $("#year").val();
        const birthMonth = $("#month").val();
        const birthDay = $("#day").val();
        const age = ((thisYear - birthYear) * 365) + ((thisMonth - birthMonth) * 31) + (thisDay - birthDay); 
        const years = Math.floor(age / 365);
        const months = Math.floor((age % 365) / 31);
        const days = Math.floor((age % 365) % 31);
        $("#years").text(years);
        $("#months").text(months);
        $("#days").text(days);
    }    
});

function is31 (month) {
    thirtyOnes = [1,3,5,7,8,10,12];
    if (thirtyOnes.includes(month)) {
        return true;
    } else {
        return false;
    }
}