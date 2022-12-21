$(document).ready(function () {
  $("button").click(function () {
    $("#p1").hide();
  });
  $("#p2").hover(
    function () {
      $(this).hide();
    },
    function () {
      $(this).show();
    }
  );
  $("div").on({
    click: function () {
      alert("click");
    },
    mouseenter: function () {
      $("#p1").hide();
    },
    mouseleave: function () {
      $("#p1").show();
    },
  });
});
