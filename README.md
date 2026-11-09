# ANIMA — Studio Créatif

Site vitrine one-page d'ANIMA Studio (Lausanne · Genève · Suisse), à l'esthétique éditoriale sombre inspirée de config.figma.com.

Contenu de marque issu du profil Instagram [@anima.studio.ch](https://instagram.com/anima.studio.ch) : création de contenu & communication digitale, pour les marques, les lieux & les événements — « Là où votre image prend vie ».

## Aperçu

- **Interface** : fond `#131313`, wordmark serif italique « Anima ✦ » avec astérisque en rotation, libellés de section en mono majuscules, boutons à filets 1px et angles droits.
- **Animations** : ruban photos pleine largeur défilant en continu (boucle 100 s), entrée du wordmark en cascade rejouée au scroll, révélations IntersectionObserver, compteurs animés, accordéon FAQ fluide, drawer de réservation, estimateur de devis interactif (CHF).
- **Accessibilité** : skip-link, `prefers-reduced-motion`, focus géré, `aria-expanded` sur l'accordéon, images en lazy-loading.

## Technique

Site statique en un seul fichier — aucun build nécessaire.

- HTML unique (`index.html`)
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
