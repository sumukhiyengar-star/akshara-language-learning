# Akshara

Akshara is a small, browser-based language-learning prototype for Kannada, Sanskrit, Tamil, Telugu, and Malayalam. Practice a character by tracing it, match everyday words to their English meanings, and assemble a sentence from word tiles.

## Run it

No package installation or build step is required. Open `index.html` in a modern browser. Learning progress and the selected language are saved in that browser using local storage.

## Install on Android

Akshara is an installable Progressive Web App. Publish the project on an HTTPS host, open its address in Chrome on the Android phone, then use Chrome's **Install app** or **Add to Home screen** action. The in-app Install button appears when Chrome makes the install prompt available. The first visit caches the app shell for offline reopening; direct `file://` opening is for desktop preview and cannot install the app.

## Publish for phone access

The app is published at [https://sumukhiyengar-star.github.io/akshara-language-learning/](https://sumukhiyengar-star.github.io/akshara-language-learning/). Open that address in Chrome on your Android phone, then choose **Install app** or **Add to Home screen** from Chrome's menu. The first visit caches the app shell for offline reopening. The local `file://` preview is only for desktop use.

## Current scope

- Full beginner script charts for all five writing systems, including vowel signs and common special forms; selecting a chart item opens tracing practice.
- Five syllable-composition word rounds and three sentence-building rounds per language, with English meanings and transliteration.
- Browser speech playback for practiced characters and words when a matching system voice is available.
- An offline mini dictionary with 26 common entries per language, searchable by English meaning, transliteration, or native script. No dictionary download or network lookup is required.
- Optional online lookup and per-language Wiktionary downloads. Saved definitions stay in local storage and include Wiktionary attribution; coverage varies, so the bundled glossary remains available offline.
- Pointer and touch support for tracing, answer feedback, XP, and a daily goal indicator.
- Android home-screen installation and offline app-shell caching when served over HTTPS.

The dictionary and lesson content are starter sets, not exhaustive references. Wiktionary may not have entries for every word. Speech voices and script fonts depend on the browser and operating system. Have fluent speakers review and expand the content before using it as formal instruction.
