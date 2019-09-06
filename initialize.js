AOS.init(
    {
      once: true
    }
  );

$(".navbar-burger").click(function() {
  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  $(".navbar-burger").toggleClass("is-active");
  $(".navbar-end").toggleClass("has-text-centered");
  $(".navbar-menu").toggleClass("is-active is-flex is-vertical-align");
});