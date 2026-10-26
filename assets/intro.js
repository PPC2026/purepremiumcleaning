/* Animation de déploiement du logo PPC, d'après brand-kit/kit/animation-deploiement.html.
   Sigle PPC en fondu (300 ms), tenue, puis les trois initiales s'écartent vers leur place dans le logo
   (900 ms, cubic-bezier(.7,0,.2,1)), le C descendant en seconde ligne ; à 550 ms du mouvement les mots
   se révèlent entre elles (600 ms), puis sortie en fondu (400 ms). Un peu plus de 2 s au total.
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
      '<div class="sigle" aria-hidden="true"><span>P</span><span>P</span><span>C</span></div>' +
      '<div class="l1"><span class="w"><span class="i">P</span><span class="r">URE</span></span><span class="w"><span class="i">P</span><span class="r">REMIUM</span></span></div>' +
      '<div class="l2"><span class="w"><span class="i">C</span><span class="r">LEANING</span></span></div>' +
    '</div>';
  document.body.appendChild(intro);
  var logo = intro.firstChild, inits = [].slice.call(logo.querySelectorAll('.i'));
  var sigle = logo.querySelector('.sigle'), sig = [].slice.call(sigle.querySelectorAll('span'));

  function mesurer() {
    // Le sigle de mesure (invisible) est centré sur la hauteur du logo ; chaque initiale reçoit
    // la transformation qui l'amène sur sa lettre du sigle.
    var lr = logo.getBoundingClientRect(), sr = sigle.getBoundingClientRect();
    sigle.style.top = ((lr.height - sr.height) / 2) + 'px';
    inits.forEach(function (el) { el.style.transition = 'none'; el.style.transform = 'none'; });
    void logo.offsetWidth;
    var fs1 = parseFloat(getComputedStyle(sig[0]).fontSize);
    inits.forEach(function (el, k) {
      var a = sig[k].getBoundingClientRect(), b = el.getBoundingClientRect();
      var sc = fs1 / parseFloat(getComputedStyle(el).fontSize);
      el.dataset.t = 'translate(' + (a.left - b.left) + 'px,' + (a.bottom - b.bottom) + 'px) scale(' + sc + ')';
      el.style.transform = el.dataset.t;
    });
    inits.forEach(function (el) { void el.offsetWidth; el.style.transition = ''; });
  }
  function ouvrir() {
    logo.classList.add('open'); logo.classList.remove('closed');
    inits.forEach(function (el) { el.style.transform = 'none'; });
  }
  function fin() { if (intro.parentNode) intro.parentNode.removeChild(intro); }
  function lancer() {
    mesurer();
    setTimeout(function () { logo.classList.add('in'); }, 30);
    setTimeout(ouvrir, 500);
    setTimeout(function () { intro.classList.add('out'); }, 1750);
    setTimeout(fin, 2150);
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
