/* Animation de déploiement du logo PPC, d'après brand-kit/kit/animation-deploiement.html.
   Sigle PPC en fondu (300 ms), tenue, puis déploiement (900 ms, cubic-bezier(.7,0,.2,1)) :
   P → PURE, P → PREMIUM, le C descend en seconde ligne et s'ouvre sur CLEANING ;
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
    '<div class="logo-a closed">' +
      '<div class="l1"><span class="w"><span>P</span><span class="r">URE</span></span><span class="w"><span class="p2">P</span><span class="r">REMIUM</span></span></div>' +
      '<div class="l2"><span class="w"><span class="c">C</span><span class="r">LEANING</span></span></div>' +
    '</div>';
  document.body.appendChild(intro);
  var logo = intro.firstChild, rs = [].slice.call(logo.querySelectorAll('.r'));
  var c = logo.querySelector('.c'), p2 = logo.querySelector('.p2'), l1 = logo.querySelector('.l1');

  function mesurer() {
    rs.forEach(function (r) {
      r.style.transition = 'none'; r.style.maxWidth = 'none';
      r.dataset.w = r.scrollWidth;
      r.style.maxWidth = ''; void r.offsetWidth; r.style.transition = '';
    });
    // Position repliée du C : à la suite du second P, au corps de la première ligne.
    c.style.transition = 'none'; c.style.transform = 'none';
    var fs1 = parseFloat(getComputedStyle(l1).fontSize), fs2 = parseFloat(getComputedStyle(c).fontSize);
    var pr = p2.getBoundingClientRect(), cr = c.getBoundingClientRect();
    c.style.transform = 'translate(' + (pr.right - cr.left) + 'px,' + (pr.bottom - cr.bottom) + 'px) scale(' + (fs1 / fs2) + ')';
    void c.offsetWidth; c.style.transition = '';
  }
  function ouvrir() {
    logo.classList.add('open'); logo.classList.remove('closed');
    rs.forEach(function (r) { r.style.maxWidth = r.dataset.w + 'px'; });
    c.style.transform = 'none';
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
