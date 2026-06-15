# ZUZULAND e-commerce web

Prémiový statický e-commerce prototyp pro značku ZUZULAND.

## Obsah

- Homepage s hero sekcí
- Kategorie Sativa, Hybrid, Indica
- Shop s produktovou mřížkou a filtrem
- Produktový detail
- B2B sekce a kontaktní formulář
- Reference, FAQ a footer
- Minimalistický slide cart

## Spuštění

Projekt je čistý statický web. Stačí otevřít soubor `index.html` v prohlížeči.

Pro lokální server lze použít například:

```bash
python -m http.server 4173
```

Potom otevřít:

```text
http://127.0.0.1:4173/
```

## Struktura

```text
zuzuland-site/
  assets/
  index.html
  styles.css
  script.js
  README.md
  .gitignore
```

## GitHub

Nejjednodušší postup:

1. Vytvořit nový repozitář na GitHubu.
2. Nahrát obsah složky `zuzuland-site`.
3. Zapnout GitHub Pages:
   - Settings
   - Pages
   - Deploy from branch
   - Branch `main`
   - Folder `/root`

Web pak poběží jako GitHub Pages stránka.

## Poznámka

Texty a produktová tvrzení je vhodné před ostrým spuštěním zkontrolovat podle aktuální legislativy a obchodních podmínek.
