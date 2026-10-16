/* Pure Premium Cleaning — menu mobile. */
(function () {
  var b = document.querySelector('.burger'), m = document.getElementById('menu-mobile');
  if (!b || !m) return;
  function fermer() { m.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); }
  b.addEventListener('click', function () {
    var ouvert = m.classList.toggle('open');
    b.setAttribute('aria-expanded', ouvert ? 'true' : 'false');
  });
  m.addEventListener('click', function (e) { if (e.target.closest('a')) fermer(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fermer(); });
})();
