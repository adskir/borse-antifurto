# ARCA — Sito Vetrina (Bozza Fase 1)

Bozza statica (HTML/CSS/JS puri, nessuna build) per la Fase 1 del preventivo — "Sito Vetrina":
5 pagine, modulo di contatto, integrazione WhatsApp, SEO di base.

Nome brand "ARCA" (dal latino "cassa/scrigno") è un placeholder — nessun nome definitivo
è stato fornito dal cliente. Da confermare o sostituire prima della pubblicazione.

## Struttura delle pagine

- `index.html` — Home: hero (borsa + antifurto smart), value proposition, anteprima collezione, CTA
- `tecnologia.html` — Come funziona il sistema antifurto: sincronizzazione BLE, funzionalità, 3 step di attivazione
- `collezione.html` — Griglia di 6 modelli (segnaposto), con tag "Smart", materiale, prezzo
- `chi-siamo.html` — Storia del brand, valori, processo produttivo
- `contatti.html` — Form di contatto, recapiti, WhatsApp, mappa, iscrizione anteprima lancio

## Design

- **Stile**: minimalismo lusso — nero, crema, oro, molto vuoto, tipografia grande
- **Font**: Cormorant Garamond (titoli, serif elegante) + Jost (testo, sans-serif leggero)
- **Palette**: nero `#14120f`, crema `#f6f1e9`, oro `#a4823a`
- Bottone WhatsApp flottante su ogni pagina (link diretto a `wa.me`)
- Nessuna foto reale — tutte le immagini prodotto sono illustrazioni SVG a linea, coerenti
  con lo stile minimal, in attesa delle foto vere del catalogo

## Come vedere la bozza subito (senza installare nulla)

Apri semplicemente `index.html` nel browser (doppio click) — è un sito statico, funziona anche offline.

## Pubblicare su GitHub + Netlify

1. **GitHub**
   ```
   git init
   git add .
   git commit -m "Bozza sito vetrina ARCA — Fase 1"
   git branch -M main
   git remote add origin <URL-del-tuo-repo>
   git push -u origin main
   ```
2. **Netlify**
   - [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project"
   - Collega il repository GitHub
   - Build command: **vuoto** — Publish directory: **`.`**
   - Deploy in ~30 secondi

   Alternativa più rapida per una demo: trascina la cartella su
   [app.netlify.com/drop](https://app.netlify.com/drop) — nessun account GitHub necessario.

## Cosa NON è ancora pronto (da dire al cliente in presentazione)

- **Nome del brand** — "ARCA" è un placeholder, da validare o sostituire
- **Foto prodotto** — attualmente illustrazioni SVG minimali, da sostituire con fotografia reale del catalogo
- **Testi e prezzi** — indicativi, segnaposto
- **Numeri di telefono, email, indirizzo** — placeholder, da sostituire con i dati reali
- **Modulo contatti** — dimostrativo, non invia ancora dati reali (va collegato a WhatsApp Business API / Netlify Forms / email reale)
- **Dominio** — nella fase di bozza/sviluppo si può usare uno spazio sull'hosting del developer, gratuitamente

## Prossimo passo — Fase 2

Questo sito vetrina è pensato per essere riutilizzato come frontend dell'e-commerce Shopify
(Fase 2 del preventivo): stessa identità visiva, stessa struttura di navigazione, con
l'aggiunta di carrello, gestione magazzino, pagamenti e Google Shopping.
