# Site Pure Premium Cleaning (purepremiumcleaning.fr)

Site statique (GitHub Pages) : `index.html`, `paris.html`, `nice.html`, `services.html`, `a-propos.html`. Le simulateur de devis est dans `index.html` (constantes `TARIFS_IDF`, `TARIFS_NICE`, `TARIFS_CANNES`, fonctions `setZone`, `calc`). Les noms de fichiers sont sensibles à la casse : `index.html` en minuscules.

## Référence de marque

Le brand kit complet (Markdown, PDF, tokens, logos, polices, maquette) est conservé hors de ce dépôt public. Le site actuel est encore dans l'ancienne charte (Cormorant Garamond, vert #2C4A35) : la refonte la remplace.

## Charte PPC v1.0 (résumé)

- Esprit : minimalisme premium. L'espace et le vert rare font la marque. Pas d'or, pas de filets décoratifs, pas d'ombre, pas de dégradé.
- Couleurs : papier #FAF8F4 (fond, ~55 %), lin #F2ECDF (sections, cartes, ~20 %), forêt #1F3A2B (marque, ~15 %), encre #171A16 (texte), sauge #9DB09A (touche rare, jamais en texte sur clair). Texte secondaire #4A5246, légendes #6B695C, filets #E6E0D2.
- Le forêt n'est jamais un statut. Statuts : OK #3E7C4F/#E4EFE5, attention #935E10/#F6EBD7, alerte #A63A2B/#F5E2DE.
- Polices : Jost (logo, titres en Light 300, étiquettes en Medium 500 capitales, interlettrage .18em) ; Instrument Sans (texte 17px/1.6, interface, chiffres tabulaires).
- Logo : fichiers officiels du brand kit uniquement. Monogramme = logo replié PP / C. Animation de déploiement : l'animation de référence du brand kit (900 ms, cubic-bezier(.7,0,.2,1)), une fois par session, respecter prefers-reduced-motion.
- Formes : grille 8 px, sections 104/64 px, rayons 4/10/pilule, filets 1 px #E6E0D2. Un seul bouton plein forêt par vue.
- Icônes : jeu PPC du brand kit, trait 1,5 px, 24 px, jamais remplies.
- Systèmes : preuve photo (vraie photo + tampon « Rotation terminée · ville · typologie · heure · nb photos » + pastille forêt) ; étiquette de prix (aplat forêt, puce sauge « Prix public », total Jost Light, HT + TTC, « tarifs standards, hors remise volume »).
- Ton : vouvoiement, factuel, phrases courtes, pas de point d'exclamation. Signature : « Chaque rotation compte. » Titre d'accueil : « Une qualité qui ne varie pas. »
- Coordination : aucun prénom dans les promesses (« coordination dédiée, 7j/7 : une équipe joignable et des outils automatisés »). La rubrique équipe devient « Fondateurs » : Quentin et Liza (textes dans le brand kit, section 9).
- Emplacements réservés kemptum / My Business Brain : bloc « Suivi en direct » (section coordination) et 3e carte « Fondateurs », masqués (hidden) au lancement.

## Zone Cannes

Cannes = grille Nice + 15 %, ménage seul : linge et amenities verrouillés avec un message. Déjà appliqué dans `index.html` sur la branche `brand-kit-cannes`.
