# HGCI — site (static)

Fichiers statiques générés pour la version de démonstration du site HGCI.

Structure:

- `index.html` — page d'accueil
- `services.html` — page services
- `ventilation.html` — page dédiée ventilation
- `products.html` — page produits (mini-carousel)
- `contact.html` — page contact
- `js/main.js` — interactions : menu mobile, animations d'apparition et carousel simple

Assets:

- Le site utilise le logo existant à `../assets/logo/logo.jpeg` (référençable depuis le dossier `site/`).
- Images d'exemple proviennent d'Unsplash / Picsum (placeholders) — à remplacer par vos photos.

Utilisation locale rapide:

1) Depuis la racine du projet, lancez un serveur HTTP simple (Python 3):

```bash
cd site
python3 -m http.server 8000
# puis ouvrez http://localhost:8000 in your browser
```

2) Les pages utilisent Tailwind via CDN. Si vous souhaitez un build Tailwind (option production), je peux ajouter une configuration avec Vite/PostCSS.

Notes:

- J'ai choisi l'option "site/" structurée et laissé Tailwind via CDN comme demandé.
- Le JS fournit des animations légères et un simple carousel. Pour des carousels plus robustes, on peut intégrer Swiper ou Glide.
