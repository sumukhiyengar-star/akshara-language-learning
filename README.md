# Akshara

Akshara is a small, browser-based language-learning prototype for Kannada, Sanskrit, Tamil, Telugu, and Malayalam. Practice a character by tracing it, match everyday words to their English meanings, and assemble a sentence from word tiles.

## Run it

No package installation or build step is required. Open `index.html` in a modern browser. Learning progress and the selected language are saved in that browser using local storage.

## Install on Android

Akshara is an installable Progressive Web App. Publish the project on an HTTPS host, open its address in Chrome on the Android phone, then use Chrome's **Install app** or **Add to Home screen** action. The in-app Install button appears when Chrome makes the install prompt available. The first visit caches the app shell for offline reopening; direct `file://` opening is for desktop preview and cannot install the app.

## Publish for phone access

One free option is GitHub Pages:

1. Create a GitHub repository and upload the project files.
2. In the repository, open **Settings > Pages**, choose **Deploy from a branch**, then select the `main` branch and `/ (root)`.
3. After publishing, open `https://<username>.github.io/<repository>/` in Chrome on your Android phone.
4. Choose **Install app** or **Add to Home screen** from Chrome's menu.

The published HTTPS address is required for Android installation and offline support. The local `file://` preview is only for desktop use.

## Current scope

- Three introductory character, vocabulary, and sentence exercises for each language.
- English meanings and transliteration guides alongside native scripts.
- Pointer and touch support for tracing, answer feedback, XP, and a daily goal indicator.
- Optional phrase playback using the browser's speech synthesis voices when available.
- Android home-screen installation and offline app-shell caching when served over HTTPS.

The lesson content is a starter set, not a complete course. Speech voices and script fonts depend on the browser and operating system. Have a fluent speaker review and expand the content before using it as formal instruction.
