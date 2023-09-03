$(".btn").on("mouseover", function() {
    $(".btn").addClass("hover");
});

$(".btn").on("mouseout", function() {
    $(".btn").removeClass("hover");
});

$("input").on("", function() {
    $(this)
});

$(".btn").on("click", function() {
    const today = new Date();
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth() + 1;
    const thisDay = today.getDate();
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
});
