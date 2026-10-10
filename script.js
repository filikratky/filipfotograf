// Otevírání a zavírání menu na mobilu
(function () {
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? 'Zavřít' : 'Menu';
  });

  // po kliknutí na odkaz menu zavřít
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'Menu';
    }
  });
})();
