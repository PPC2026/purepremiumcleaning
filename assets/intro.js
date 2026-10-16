/* Animation de déploiement du logo PPC, d'après brand-kit/kit/animation-deploiement.html.
   Monogramme PP / C en fondu (300 ms), tenue, puis déploiement (900 ms, cubic-bezier(.7,0,.2,1)),
   lettres en fondu 500 ms décalé de 250 ms, puis sortie en fondu (400 ms). Moins de 2 s au total.
   Premier chargement de la session seulement ; rien si prefers-reduced-motion. Chargé en tête de <body>. */
(function () {
  var cle = 'ppc-intro-vue';
  try {
    if (sessionStorage.getItem(cle)) return;
    sessionStorage.setItem(cle, '1');
  } catch (e) { return; }
  if (window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var intro = document.createElement('div');
  intro.className = 'intro';
  intro.setAttribute('aria-hidden', 'true');
  intro.innerHTML =
    '<div class="logo-a">' +
      '<div class="l1"><span class="w"><span>P</span><span class="r">URE</span></span><span class="w"><span>P</span><span class="r">REMIUM</span></span></div>' +
      '<div class="l2"><span class="w"><span>C</span><span class="r">LEANING</span></span></div>' +
    '</div>';
  document.body.appendChild(intro);
  var logo = intro.firstChild, rs = [].slice.call(logo.querySelectorAll('.r'));

  function mesurer() {
    rs.forEach(function (r) {
      r.style.transition = 'none'; r.style.maxWidth = 'none';
      r.dataset.w = r.scrollWidth;
      r.style.maxWidth = ''; void r.offsetWidth; r.style.transition = '';
    });
  }
  function ouvrir() {
    logo.classList.add('open');
    rs.forEach(function (r) { r.style.maxWidth = r.dataset.w + 'px'; });
  }
  function fin() { if (intro.parentNode) intro.parentNode.removeChild(intro); }
  function lancer() {
    mesurer();
    setTimeout(function () { logo.classList.add('in'); }, 30);
    setTimeout(ouvrir, 500);
    setTimeout(function () { intro.classList.add('out'); }, 1450);
    setTimeout(fin, 1850);
  }

  // On attend Jost (300 ms au plus) pour mesurer les lettres avec la bonne police.
  var parti = false;
  function go() { if (!parti) { parti = true; lancer(); } }
  if (document.fonts && document.fonts.load) {
    Promise.all([document.fonts.load('500 46px Jost'), document.fonts.load('400 22px Jost')]).then(go, go);
  }
  setTimeout(go, 300);
  intro.addEventListener('click', function () { intro.classList.add('out'); setTimeout(fin, 400); });
})();
