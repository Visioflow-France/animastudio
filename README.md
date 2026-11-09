# ANIMA — Studio Créatif

Site vitrine multi-pages d'ANIMA Studio (Lausanne · Genève · Suisse), à l'esthétique éditoriale sombre inspirée de config.figma.com.

Contenu de marque issu du profil Instagram [@anima.studio.ch](https://instagram.com/anima.studio.ch) : création de contenu & communication digitale, pour les marques, les lieux & les événements — « Là où votre image prend vie ».

## Aperçu

- **Interface** : fond `#131313`, wordmark serif italique « Anima ✦ » avec astérisque en rotation, libellés de section en mono majuscules, boutons à filets 1px et angles droits.
- **Animations** : ruban photos pleine largeur défilant en continu (boucle 100 s), entrée du wordmark en cascade rejouée au scroll, révélations IntersectionObserver, compteurs animés, accordéon FAQ fluide, drawer de réservation, estimateur de devis interactif (CHF).
- **Accessibilité** : skip-link, `prefers-reduced-motion`, focus géré, `aria-expanded` sur l'accordéon, images en lazy-loading.

## Structure du site

Le hero de l'accueil est **l'image `anima_studio_hero_1920x1080.png` affichée telle quelle**, en **plein écran adaptatif** (version web optimisée : `anima_studio_hero.jpg`, qualité 92). Un moteur JS choisit le meilleur mode selon le ratio de l'écran :

- **Couverture ancrée contenu** (ordinateurs) : l'image remplit tout le viewport, zoom centré sur les éléments gravés (logo, nav, cartes, CTA) — jamais rognés ;
- **Letterbox** (ratios très larges, ex. 21:9) : image entière centrée sur fond flouté de la même photo ;
- **Panoramique** (mobile portrait) : plein écran en hauteur + balayage horizontal naturel (léger fondu sur les bords), tous les boutons restent à taille tactile.

Chaque bouton gravé dans l'image — logo, nav (Accueil · Services · À propos · Portfolio), loupe, MENU, CTA « Découvrir nos services → » et les 4 cartes services — est rendu cliquable par une **zone invisible** repositionnée au pixel à chaque redimensionnement (coordonnées mesurées sur le PNG d'origine). Le header HTML n'apparaît que lorsque l'on a défilé passé le hero.

| Page | Contenu |
|---|---|
| `index.html` | Accueil — intro zoom logo, hero image (nav pilule, titre, 4 cartes services), ruban photos, studio, chiffres, services, projets, estimateur, FAQ |
| `services.html` | Les 4 services détaillés avec ancres `#creation-contenu`, `#reseaux-sociaux`, `#evenementiel`, `#photoshoots` (cibles des cartes du hero) |
| `apropos.html` | L'histoire du studio, les chiffres, la méthode en 4 jalons, manifeste |
| `portfolio.html` | Grille de 9 projets filtrable (Mode & éditorial / Événementiel / Gastronomie / Digital) |
| `contact.html` | Formulaire complet (préselection du service via `?service=`), coordonnées, process |

Fonctions transverses : overlay **MENU** (nav plein écran), overlay **recherche** (raccourci `/`, navigation clavier ↑↓↵), drawer de réservation (accueil), `prefers-reduced-motion`.

## Technique

Site statique — aucun build nécessaire.

- 5 pages HTML (`index`, `services`, `apropos`, `portfolio`, `contact`)
- [Tailwind CSS](https://tailwindcss.com) via CDN (thème custom : couleurs `ink` / `tint` / `star`)
- Google Fonts : Instrument Serif, Inter, IBM Plex Mono
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
