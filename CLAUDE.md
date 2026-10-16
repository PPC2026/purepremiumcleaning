# Site Pure Premium Cleaning (purepremiumcleaning.fr)

Site statique servi par GitHub Pages depuis `main` : `index.html`, `paris.html`, `nice.html`, `cannes.html`, `services.html`, `a-propos.html`, `mentions-legales.html`, `cgv.html`. Styles : `assets/brand/tokens.css` + `assets/site.css` ; scripts : `assets/site.js` (menu mobile), `assets/intro.js` (animation du logo). Le simulateur de devis est dans `index.html` (constantes `TARIFS_IDF`, `TARIFS_NICE`, `TARIFS_CANNES`, fonctions `setZone`, `calc` ; `index.html?zone=cannes#tarifs` ouvre une zone). Noms de fichiers sensibles à la casse : `index.html` en minuscules.

## Règle absolue : sur GitHub, uniquement le site

Ce dépôt est **public**. Il ne contient que ce que le site sert aux visiteurs : les pages HTML, leurs scripts et styles, et les ressources affichées (`assets/brand/` : logos, polices, icônes, `tokens.css`).

- **Jamais de commit** de documents internes : brand book (MD, PDF), maquettes, gabarits (devis, facture, grille), consignes, notes, captures, archives `.zip`, données clients ou tarifs agents.
- Ces documents vivent dans le dossier local **`brand-kit/`**, ignoré par git (`.gitignore`). Lis-le librement, ne le déplace jamais dans le dépôt, n'en copie pas de contenu dans un fichier suivi par git, à part ce qu'une page publique du site doit afficher.
- Avant chaque commit : `git status` et vérifie qu'aucun fichier de `brand-kit/`, aucun `.md` interne ni aucun `.pdf` n'est ajouté.
- `_config.yml` exclut `CLAUDE.md`, `README.md` et `brand-kit` de ce que publie GitHub Pages : garde-le à jour si tu ajoutes un fichier technique à la racine.

## Référence de marque

Le brand kit complet est dans `brand-kit/` sur l'ordinateur de Quentin (pas sur GitHub) :

- `brand-kit/kit/ppc-brand-kit.md` : la charte complète, à lire avant toute modification visuelle ou de contenu ;
- `brand-kit/maquettes/site.html` : la maquette de référence de la refonte (simulateur : `?zone=cannes`) ;
- `brand-kit/kit/animation-deploiement.html` : l'animation officielle du monogramme ;
- `brand-kit/kit/patch-simulateur-cannes.md` : la zone Cannes, déjà appliquée dans `index.html`.

Si `brand-kit/` est absent, travaille avec le résumé ci-dessous et demande à Quentin de dézipper `brand-kit.zip` à la racine du dépôt.

## Charte PPC v1.0 (résumé)

- Esprit : minimalisme premium. L'espace et le vert rare font la marque. Pas d'or, pas de filets décoratifs, pas d'ombre, pas de dégradé.
- Couleurs : papier #FAF8F4 (fond, ~55 %), lin #F2ECDF (sections, cartes, ~20 %), forêt #1F3A2B (marque, ~15 %), encre #171A16 (texte), sauge #9DB09A (touche rare, jamais en texte sur clair). Texte secondaire #4A5246, légendes #6B695C, filets #E6E0D2.
- Le forêt n'est jamais un statut. Statuts : OK #3E7C4F/#E4EFE5, attention #935E10/#F6EBD7, alerte #A63A2B/#F5E2DE.
- Polices : Jost (logo, titres en Light 300, étiquettes en Medium 500 capitales, interlettrage .18em) ; Instrument Sans (texte 17px/1.6, interface, chiffres tabulaires). Fichiers dans `assets/brand/fonts/`, déclarés dans `assets/brand/tokens.css`.
- Logo : fichiers de `assets/brand/logo/` uniquement, jamais retapé. Monogramme = logo replié PP / C. Animation de déploiement au premier chargement de la session (900 ms, cubic-bezier(.7,0,.2,1)), désactivée si prefers-reduced-motion.
- Formes : grille 8 px, sections 104/64 px, rayons 4/10/pilule, filets 1 px #E6E0D2. Un seul bouton plein forêt par vue.
- Icônes : `assets/brand/icons/`, trait 1,5 px, 24 px, jamais remplies, en SVG inline avec `stroke="currentColor"`.
- Systèmes : preuve photo (photo + tampon + pastille forêt, voir « Photos » ci-dessous) ; étiquette de prix (aplat forêt, puce sauge « Prix public », total Jost Light, HT + TTC, « tarifs standards, hors remise volume »).
- Ton : vouvoiement, factuel, phrases courtes, pas de point d'exclamation. Signature : « Chaque rotation compte. » Titre d'accueil : « Une qualité qui ne varie pas. »
- Coordination : aucun prénom dans les promesses (« coordination dédiée, 7j/7 : une équipe joignable et des outils automatisés »). La rubrique équipe devient « Fondateurs » : Quentin et Liza (textes dans le brand kit, section 9).
- Emplacements réservés kemptum / My Business Brain : bloc « Suivi en direct » (section coordination) et 3e carte « Fondateurs », présents dans le HTML mais masqués (`hidden`) au lancement.

## Photos de logements

- Pour tous les emplacements de photos de logements (accueil, services, zones, pages Paris, Nice, Cannes), utilise les images de `assets/img/` : générées avec Nano Banana pour la vidéo motion design PPC, droits sans restriction, déjà optimisées en WebP. Ajoute un texte alternatif descriptif à chacune.
  - `chambre-haussmannienne`, `salon-haussmannien`, `entree-haussmannienne`, `cuisine-paris`, `sejour-salle-a-manger`, `sdb-marbre-paris`, `sdb-vasque-paris` : intérieurs parisiens (accueil, page Paris, services).
  - `chambre-nice-vue-mer` : Côte d'Azur (pages Nice et Cannes, carte de zone).
  - `lit-coin-hotelier` : gros plan, idéal pour le cadre preuve photo ou la section « La preuve ».
  - Pas de photo propre à Cannes : réutilise `chambre-nice-vue-mer` ou un intérieur neutre, sans légende qui la situe à Cannes.
- **Cadre « preuve photo »** : une image générée ne doit jamais présenter une intervention précise comme réelle. Tant que Quentin n'a pas fourni une vraie photo de rapport, le tampon reste générique : « Rapport photo envoyé à chaque rotation », sans ville, heure ni nombre de photos. Le tampon détaillé (« Rotation terminée · ville · typologie · heure · nb photos ») est réservé aux vraies photos.
- Jamais de visage ni de personne identifiable générée présentée comme un agent ou un client PPC.

## Zone Cannes

Cannes = grille Nice + 15 %, ménage seul : linge et amenities verrouillés avec le message « Cannes : ménage seul pour le moment. La location de linge et les amenities ne sont pas encore disponibles sur ce secteur. » Déjà en place dans `index.html` sur la branche `brand-kit-cannes`, **pas encore en ligne** : elle sortira avec la refonte.

## Prochaine tâche : la refonte du site

Quand Quentin lance la refonte (« lance la refonte », « refonte du site »), suis ce brief :

1. **Lis d'abord** `brand-kit/kit/ppc-brand-kit.md` en entier, puis ouvre `brand-kit/maquettes/site.html` : c'est la cible de l'accueil, ordinateur et mobile.
2. **Travaille sur une branche** `refonte-v2` créée depuis `brand-kit-cannes` (elle contient déjà Cannes et `assets/brand/`), jamais directement sur `main` : `main` est en ligne. Tout part en une seule fusion : refonte, Cannes et ressources.
3. **Refais les pages dans la nouvelle charte** : `index.html` (accueil fidèle à la maquette), `paris.html`, `nice.html`, une nouvelle `cannes.html` sur le même modèle (ménage seul pour l'instant), `services.html`, `a-propos.html` (rubrique « Fondateurs » avec les textes du brand kit). Styles partagés dans `assets/brand/tokens.css` plus une feuille commune, pas de framework, pas de build : le site reste du HTML statique.
4. **Le simulateur ne change pas de logique** : garde intactes les grilles `TARIFS_IDF`, `TARIFS_NICE`, `TARIFS_CANNES`, les prix du linge et des amenities, le supplément cuisine de 0,10 €/SDB, le verrouillage Cannes, la copie du devis et l'envoi WhatsApp. Seul l'habillage change (étiquette de prix forêt, puce « Prix public »).
5. **Mentions légales et CGV** : reprends le texte actuel tel quel, seule la mise en forme change.
6. **Ajoute l'animation de déploiement** du logo au premier chargement, en suivant `brand-kit/kit/animation-deploiement.html`.
7. **Vérifie avant de proposer** : contrastes de la charte, rendu à 390 px et à 1 440 px sans défilement horizontal, `prefers-reduced-motion`, aucun lien cassé, et ces totaux du simulateur : Cannes studio = 36,00 € HT ; Cannes 3 ch · 2 SDB = 99,00 € HT ; Nice 3 ch · 2 SDB = 86,00 € HT ; Paris studio + 1 kit double + hygiène + cuisine, conso, WC pour 2 voyageurs et 1 WC = 42,85 € HT.
8. **Vérification manuelle dans Chrome** (connecteur Claude in Chrome) : ouvre chaque page en local puis sur l'aperçu de la branche, à 1 440 px et en vue mobile. Parcours le simulateur sur les trois zones (dont le verrouillage Cannes), les liens WhatsApp et e-mail, les mentions légales et CGV, l'animation du logo. Fais une capture par page et signale tout écart avec la maquette.
9. **Avant de pousser** : `git status`, rien de `brand-kit/` ni aucun document interne dans le commit. Ouvre une pull request `refonte-v2` → `main` avec les captures, et laisse Quentin valider avant toute fusion.
10. **Après la mise en ligne** : vérifie purepremiumcleaning.fr dans Chrome, puis rappelle à Quentin la vidéo d'annonce de l'ouverture de Cannes.
