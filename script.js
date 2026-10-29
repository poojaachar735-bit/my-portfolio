// Email address used by the Email buttons. Leave it empty to hide them.
var EMAIL = "poojaachar735@gmail.com";

(function () {
  if (!EMAIL) return;
  document.querySelectorAll(".email-link").forEach(function (a) {
    a.href = "mailto:" + EMAIL;
    a.hidden = false;
  });
})();

(function () {
  var tabs = [["t-java", "p-java"], ["t-py", "p-py"]];
  tabs.forEach(function (pair) {
    document.getElementById(pair[0]).addEventListener("click", function () {
      tabs.forEach(function (p) {
        var on = p[0] === pair[0];
        document.getElementById(p[0]).setAttribute("aria-selected", on ? "true" : "false");
        document.getElementById(p[1]).hidden = !on;
      });
    });
  });
})();