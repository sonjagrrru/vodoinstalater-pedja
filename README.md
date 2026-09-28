# Vodoinstalater Peđa

Statički prezentacioni sajt za vodoinstalatera Predraga iz Inđije. Napravljen je pomoću Vite-a i nema bazu, CMS, administratorski panel niti serverski API.

## Lokalno pokretanje

```bash
npm install
npm run dev
```

Produkcioni paket se pravi komandom:

```bash
npm run build
```

Rezultat se nalazi u direktorijumu `dist` i može da se postavi na GitHub Pages, Cloudflare Pages, Netlify ili Vercel.

## GitHub Pages

1. Postaviti repozitorijum na GitHub i poslati kod na `main` granu.
2. Otvoriti **Settings > Pages**.
3. Pod **Build and deployment**, kao Source izabrati **GitHub Actions**.
4. Workflow iz `.github/workflows/deploy-pages.yml` automatski će izgraditi i objaviti sajt.
5. Za sopstveni domen otvoriti **Settings > Pages > Custom domain** i uneti domen.

## Bezbednost sadržaja

Posetioci ne mogu da menjaju tekst sajta jer ne postoji forma za administraciju, baza ni javni endpoint za upis podataka. Izmene se rade isključivo u repozitorijumu i ponovo objavljuju kroz GitHub Actions.

Za zaštitu objavljenog sadržaja uključiti dvofaktorsku autentifikaciju na GitHub nalogu, koristiti jedinstvenu lozinku i ne davati drugim nalozima pravo upisa u repozitorijum bez potrebe.

Stranica dodatno koristi restriktivnu Content Security Policy postavku koja ograničava skripte, slike i fontove na fajlove sa istog domena.

## Fotografije

Fotografije su preuzete sa [Pexels-a](https://www.pexels.com/license/) i sačuvane lokalno u `public/images`:

- [Plumber installs pipe fittings](https://www.pexels.com/photo/plumber-installs-pipe-fittings-6419128/), Anıl Karakaya
- [White and blue water meter](https://www.pexels.com/photo/white-and-blue-water-meter-4494656/), Ian Panelo
- [Plastic pipes on wall](https://www.pexels.com/photo/plastic-pipes-on-wall-12142829/)
- [Steel underground heating manifolds](https://www.pexels.com/photo/steel-underground-heating-manifolds-7937299/), Pavel Danilyuk
- [Plumber's wrench on wooden surface](https://www.pexels.com/photo/close-up-photo-of-plumbers-wrench-on-wooden-surface-8488058/), Kindel Media