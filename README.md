# ANIMA — Studio Créatif

Site vitrine multi-pages d'ANIMA Studio (Lausanne · Genève · Suisse), à l'esthétique éditoriale sombre inspirée de config.figma.com.

Contenu de marque issu du profil Instagram [@anima.studio.ch](https://instagram.com/anima.studio.ch) : création de contenu & communication digitale, pour les marques, les lieux & les événements — « Là où votre image prend vie ».

## Aperçu

- **Interface** : fond `#131313`, wordmark serif italique « Anima ✦ » avec astérisque en rotation, libellés de section en mono majuscules, boutons à filets 1px et angles droits.
- **Animations** : entrée du wordmark en cascade rejouée au scroll, révélations IntersectionObserver, compteurs animés, accordéon FAQ fluide, drawer de réservation, estimateur de devis interactif (CHF), **tunnel 3D scroll-piloté** (9 cartes en spirale d'angle d'or qui volent vers la caméra sur fond **noir pur**, port vanilla de l'animation React « Perspective Tunnel », repli statique en `prefers-reduced-motion`).
- **Bento grid** (skill [apple-bento-grid](https://github.com/hubeiqiao/apple-bento-grid), installé dans `~/.zcode/skills/apple-bento-grid/`) : tout ce qui suit la section « Soyons honnêtes, » — sections Services, Projets, Estimateur et FAQ de l'accueil, puis **l'intégralité** des pages Services et Portfolio — est composé en grilles bento zero-gap (gap 6px, cartes blanches 18px, Sora / DM Sans, pills `#f0f0f2`, accents orange `#FF4D00` / cyan `#00b4d8` / vert `#34d399`, thème clair Apple `#f5f5f7`). Typologie de cartes du skill : Hero (liseré dégradé), Stat, Category + pills, Badge, Quote (fond sombre), Highlight (dégradé plein), cartes image. Interactions conservées dans les cartes : estimateur, accordéon FAQ, filtres portfolio.
- **Logo** : le logo image du hero (`logo_blanc_web.png`, blanc) est utilisé partout dans les en-têtes du site, identique au hero et constant au scroll ; la version noire (`logo_intro_4x.png`) est réservée aux fonds blancs (intro).
- **Accessibilité** : skip-link, `prefers-reduced-motion`, focus géré, `aria-expanded` sur l'accordéon, images en lazy-loading.

## Structure du site

Le hero de l'accueil (refait de zéro) combine :

- **Fond** : `studio_minimaliste_16x9_1920x1080.png` sur ordinateur — affichée **telle quelle** en qualité maximale, image entière jamais rognée, marges fond noir — et `Studio futuriste bleu aux reflets symétriques.png` sur mobile, plein écran centré ;
- **Logo** : `LOGO BLANC.png` (découpé au pixel : `logo_blanc_web.png`) en haut à gauche ;
- **Navbar** : pilule **bordure blanche 2,5 px** (Accueil · Services · À propos · Portfolio) + loupe et MENU à droite ;
- **Titre** : « Là où votre image prend vie. » en Playfair Display **romain** (pas d'italique), posé directement sur la photo sans panneau ;
- **Bulle services** : une seule carte « Nos Services » à droite avec `bulle services.png` (version web : `btn_services.jpg`) — arrondi doux 22 px, bordure blanche 2,5 px, au ratio exact de son image (jamais rognée), titre en haut à gauche (limité à 44 % de la largeur), bouton flèche circulaire en bas à gauche ; **aucune bulle sur mobile** (CTA « Découvrir nos services » à la place).

Le tout en HTML/CSS fluide (aucun flou nulle part), animé en cascade au chargement, et responsive : colonne à gauche sur ordinateur, empilement natif sur mobile.

| Page | Contenu |
|---|---|
| `index.html` | Accueil — hero image (nav pilule, titre, bulle « Nos Services »), tunnel immersif (galerie 3D scroll-pilotée, fond noir pur), puis **grilles bento** : services, projets, estimateur interactif, FAQ |
| `services.html` | Page **100 % bento** : en-tête grille (hero + stats + quote), les 4 services en grilles bento avec ancres `#creation-contenu`, `#reseaux-sociaux`, `#evenementiel`, `#photoshoots` (ancres directes), renvoi estimateur |
| `apropos.html` | L'histoire du studio, les chiffres, la méthode en 4 jalons, manifeste |
| `portfolio.html` | Page **100 % bento** : grille filtrable de 9 projets (tuile vedette 2×2 + tuiles image), filtres pilules (Mode & éditorial / Événementiel / Gastronomie / Digital), CTA |
| `contact.html` | Formulaire complet (préselection du service via `?service=`), coordonnées, process |

Fonctions transverses : overlay **MENU** (nav plein écran), overlay **recherche** (raccourci `/`, navigation clavier ↑↓↵), drawer de réservation (accueil), `prefers-reduced-motion`.

## Technique

Site statique — aucun build nécessaire.

- 5 pages HTML (`index`, `services`, `apropos`, `portfolio`, `contact`)
- [Tailwind CSS](https://tailwindcss.com) via CDN (thème custom : couleurs `ink` / `tint` / `star`)
- Google Fonts : Instrument Serif, Inter, IBM Plex Mono, **Sora + DM Sans** (cartes bento)
- Design system bento : tokens du skill apple-bento-grid (voir bloc `BENTO GRID` dans le `<style>` de chaque page)
- JavaScript vanilla (aucune dépendance)

## Utilisation en local

```bash
python -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mise en ligne (GitHub Pages)

1. Sur GitHub : **Settings → Pages**
2. Source : *Deploy from a branch* → branche `main`, dossier `/ (root)`
3. Le site sera disponible sur `https://visioflow-france.github.io/animastudio/`

---

© 2026 ANIMA Studio CH — contact@anima.studio.ch
