$(window).width() < 350 ? new Twitch.Embed("twitch-embed", {
    width: 280,
    height: 380,
    channel: "jmarcolan",
    allowfullscreen: !0
}) : $(window).width() > 350 && $(window).width() < 600 ? new Twitch.Embed("twitch-embed", {
    width: 300,
    height: 480,
    channel: "jmarcolan",
    allowfullscreen: !0
}) : $(window).width() > 600 && $(window).width() < 900 ? new Twitch.Embed("twitch-embed", {
    width: 550,
    height: 480,
    channel: "jmarcolan",
    allowfullscreen: !0
}) : $(window).width() > 900 && $(window).width() < 1200 ? new Twitch.Embed("twitch-embed", {
    width: 850,
    height: 480,
    channel: "jmarcolan",
    allowfullscreen: !0
}) : $(window).width() > 1200 && new Twitch.Embed("twitch-embed", {
    width: 1150,
    height: 520,
    channel: "jmarcolan",
    allowfullscreen: !0
}), $(".nav__link.home").click(function() {
    $(".section.home").addClass("active"), $(".section.cursos").removeClass("active"), $(".section.posts").removeClass("active"), $(".section.sobre").removeClass("active"), $(".section.contribuir").removeClass("active")
}), $(".nav__link.cursos").click(function() {
    $(".section.cursos").addClass("active"), $(".section.home").removeClass("active"), $(".section.posts").removeClass("active"), $(".section.sobre").removeClass("active"), $(".section.contribuir").removeClass("active")
}), $(".nav__link.posts").click(function() {
    $(".section.posts").addClass("active"), $(".section.home").removeClass("active"), $(".section.cursos").removeClass("active"), $(".section.sobre").removeClass("active"), $(".section.contribuir").removeClass("active")
}), $(".nav__link.sobre").click(function() {
    $(".section.sobre").addClass("active"), $(".section.home").removeClass("active"), $(".section.cursos").removeClass("active"), $(".section.posts").removeClass("active"), $(".section.contribuir").removeClass("active")
}), $(".nav__link.contribuir").click(function() {
    $(".section.contribuir").addClass("active"), $(".section.home").removeClass("active"), $(".section.cursos").removeClass("active"), $(".section.posts").removeClass("active"), $(".section.sobre").removeClass("active")
}), $(".icon-wrapper").click(function() {
    $(".icon__menu").toggleClass("active-menu"), $(".nav-menu").toggleClass("active-menu"), $(".section.home").removeClass("active"), $(".section.cursos").removeClass("active"), $(".section.posts").removeClass("active"), $(".section.sobre").removeClass("active"), $(".section.contribuir").removeClass("active"), !1 === $(".icon__menu").hasClass("active-menu") && $(".section.home").addClass("active")
}), $(".nav-menu__link.home").click(function() {
    $(".icon__menu").toggleClass("active-menu"), $(".nav-menu").toggleClass("active-menu"), $(".section.home").toggleClass("active"), $(".section.cursos").removeClass("active"), $(".section.posts").removeClass("active"), $(".section.sobre").removeClass("active"), $(".section.contribuir").removeClass("active")
}), $(".nav-menu__link.cursos").click(function() {
    $(".icon__menu").toggleClass("active-menu"), $(".nav-menu").removeClass("active-menu"), $(".section.cursos").addClass("active"), $(".section.home").removeClass("active"), $(".section.posts").removeClass("active"), $(".section.sobre").removeClass("active"), $(".section.contribuir").removeClass("active")
}), $(".nav-menu__link.posts").click(function() {
    $(".icon__menu").toggleClass("active-menu"), $(".nav-menu").removeClass("active-menu"), $(".section.posts").addClass("active"), $(".section.home").removeClass("active"), $(".section.cursos").removeClass("active"), $(".section.sobre").removeClass("active"), $(".section.contribuir").removeClass("active")
}), $(".nav-menu__link.sobre").click(function() {
    $(".icon__menu").toggleClass("active-menu"), $(".nav-menu").removeClass("active-menu"), $(".section.sobre").addClass("active"), $(".section.home").removeClass("active"), $(".section.cursos").removeClass("active"), $(".section.posts").removeClass("active"), $(".section.contribuir").removeClass("active")
}), $(".nav-menu__link.contribuir").click(function() {
    $(".icon__menu").toggleClass("active-menu"), $(".nav-menu").removeClass("active-menu"), $(".section.contribuir").addClass("active"), $(".section.home").removeClass("active"), $(".section.cursos").removeClass("active"), $(".section.posts").removeClass("active"), $(".section.sobre").removeClass("active")
});