# UtilityHub

**Everyday tools that just work.**

Free · Private · Offline-ready · No accounts · No tracking

Everything runs in your browser.

## What's included

**47 tools** across 8 categories:

| Category | Tools |
|----------|--------|
| Money | Tip & bill split, percentage, interest, loan/EMI, discount, fuel cost, salary converter |
| Time | Age, date difference, world clock, countdown/stopwatch, working days, Unix timestamp, week number |
| Text | Word counter, case converter, text cleaner, diff, lorem, line tools, markdown preview |
| Health | BMI, body fat, TDEE, ideal weight, water intake, pregnancy due date |
| Converters | Units, number bases, Roman numerals, color, file size, angle |
| Generators | Password/passphrase, random number, decision maker, UUID, QR pattern |
| Everyday | Recipe scaler, cost splitter, name/team picker, simple budget |
| Visual | Palette, contrast checker, image↔Base64, CSS gradient, box shadow |

## Features

- Instant search + category filters
- Dark / Light theme (persisted)
- Mobile-first, clean UI
- Keyboard: press `/` to focus search
- Copy-to-clipboard on results
- 100% client-side — nothing leaves the device
- No ads, no accounts, no trackers

## Run locally

Open `index.html` in any modern browser, or:

```bash
npx serve .
```

## Deploy to GitHub Pages

1. Create a new public repository
2. Upload the contents of this folder (or push via git)
3. Repo **Settings → Pages → Source**: Deploy from branch `main`, folder `/ (root)`
4. Site goes live at `https://<username>.github.io/<repo>/`

## Structure

```
utility-hub/
├── index.html
├── css/styles.css
├── js/
│   ├── tools-data.js
│   ├── app.js
│   ├── tool-common.js
│   └── tools-impl.js
├── tools/          # one HTML page per tool
├── icons/favicon.svg
├── manifest.json
└── README.md
```

## Privacy

- No network requests from tools
- No analytics by default
- Preferences in localStorage only
- Password generation uses Web Crypto on-device

## License

MIT
