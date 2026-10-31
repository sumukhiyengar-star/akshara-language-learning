function makeDictionary(entries) {
  return entries.map(([native, roman, meaning]) => ({ native, roman, meaning }));
}

const languages = {
  kannada: {
    name: 'Kannada', symbol: 'ಕ', words: [
      { native: 'ನೀರು', roman: 'nīru', meaning: 'water' },
      { native: 'ಮನೆ', roman: 'mane', meaning: 'house' },
      { native: 'ನಮಸ್ಕಾರ', roman: 'namaskāra', meaning: 'hello / greetings' }
    ], alphabet: [
      { label: 'Independent vowels', items: [['ಅ', 'a'], ['ಆ', 'ā'], ['ಇ', 'i'], ['ಈ', 'ī'], ['ಉ', 'u'], ['ಊ', 'ū'], ['ಋ', 'ṛ'], ['ೠ', 'ṝ'], ['ಌ', 'ḷ'], ['ೡ', 'ḹ'], ['ಎ', 'e'], ['ಏ', 'ē'], ['ಐ', 'ai'], ['ಒ', 'o'], ['ಓ', 'ō'], ['ಔ', 'au']] },
      { label: 'Consonants', items: [['ಕ', 'ka'], ['ಖ', 'kha'], ['ಗ', 'ga'], ['ಘ', 'gha'], ['ಙ', 'ṅa'], ['ಚ', 'ca'], ['ಛ', 'cha'], ['ಜ', 'ja'], ['ಝ', 'jha'], ['ಞ', 'ña'], ['ಟ', 'ṭa'], ['ಠ', 'ṭha'], ['ಡ', 'ḍa'], ['ಢ', 'ḍha'], ['ಣ', 'ṇa'], ['ತ', 'ta'], ['ಥ', 'tha'], ['ದ', 'da'], ['ಧ', 'dha'], ['ನ', 'na'], ['ಪ', 'pa'], ['ಫ', 'pha'], ['ಬ', 'ba'], ['ಭ', 'bha'], ['ಮ', 'ma'], ['ಯ', 'ya'], ['ರ', 'ra'], ['ಲ', 'la'], ['ವ', 'va'], ['ಶ', 'śa'], ['ಷ', 'ṣa'], ['ಸ', 'sa'], ['ಹ', 'ha'], ['ಳ', 'ḷa']] },
      { label: 'Vowel signs', items: [['ಾ', 'ā'], ['ಿ', 'i'], ['ೀ', 'ī'], ['ು', 'u'], ['ೂ', 'ū'], ['ೃ', 'ṛ'], ['ೄ', 'ṝ'], ['ೢ', 'ḷ'], ['ೣ', 'ḹ'], ['ೆ', 'e'], ['ೇ', 'ē'], ['ೈ', 'ai'], ['ೊ', 'o'], ['ೋ', 'ō'], ['ೌ', 'au'], ['್', 'virāma']] },
      { label: 'Other signs and common conjuncts', items: [['ಂ', 'anusvāra'], ['ಃ', 'visarga'], ['ೞ', 'ḻa (archaic)'], ['ಕ್ಷ', 'kṣa'], ['ಜ್ಞ', 'jña']] }
    ], dictionary: makeDictionary([
      ['ನೀರು', 'nīru', 'water'], ['ಮನೆ', 'mane', 'house / home'], ['ಅಮ್ಮ', 'amma', 'mother'], ['ಅಪ್ಪ', 'appa', 'father'], ['ಪುಸ್ತಕ', 'pustaka', 'book'], ['ಶಾಲೆ', 'śāle', 'school'], ['ಊಟ', 'ūṭa', 'food / meal'], ['ಹಣ್ಣು', 'haṇṇu', 'fruit'], ['ಮಗು', 'magu', 'child'], ['ಸ್ನೇಹಿತ', 'snēhita', 'friend'], ['ಸಮಯ', 'samaya', 'time'], ['ದಿನ', 'dina', 'day'], ['ರಾತ್ರಿ', 'rātri', 'night'], ['ಹೂವು', 'hūvu', 'flower'], ['ಸೂರ್ಯ', 'sūrya', 'sun'], ['ಚಂದ್ರ', 'candra', 'moon'], ['ನಾಯಿ', 'nāyi', 'dog'], ['ಬೆಕ್ಕು', 'bekku', 'cat'], ['ಹೌದು', 'haudu', 'yes'], ['ಇಲ್ಲ', 'illa', 'no'], ['ದಯವಿಟ್ಟು', 'dayaviṭṭu', 'please'], ['ಧನ್ಯವಾದಗಳು', 'dhanyavādagaḷu', 'thank you'], ['ಬನ್ನಿ', 'banni', 'please come'], ['ಹೋಗಿ', 'hōgi', 'go'], ['ತಿನ್ನು', 'tinnu', 'eat'], ['ಓದು', 'ōdu', 'read / study']
    ]), sentence: { english: 'I drink water.', parts: ['ನಾನು', 'ನೀರು', 'ಕುಡಿಯುತ್ತೇನೆ'], roman: 'nānu nīru kuḍiyuttēne' }, phrase: { native: 'ನಮಸ್ಕಾರ', roman: 'namaskāra', meaning: 'Hello / greetings' }
  },
  sanskrit: {
    name: 'Sanskrit', symbol: 'अ', words: [
      { native: 'जलम्', roman: 'jalam', meaning: 'water' },
      { native: 'गृहम्', roman: 'gṛham', meaning: 'house' },
      { native: 'नमस्ते', roman: 'namaste', meaning: 'hello / greetings' }
    ], alphabet: [
      { label: 'Independent vowels', items: [['अ', 'a'], ['आ', 'ā'], ['इ', 'i'], ['ई', 'ī'], ['उ', 'u'], ['ऊ', 'ū'], ['ऋ', 'ṛ'], ['ॠ', 'ṝ'], ['ऌ', 'ḷ'], ['ॡ', 'ḹ'], ['ए', 'e'], ['ऐ', 'ai'], ['ओ', 'o'], ['औ', 'au']] },
      { label: 'Consonants', items: [['क', 'ka'], ['ख', 'kha'], ['ग', 'ga'], ['घ', 'gha'], ['ङ', 'ṅa'], ['च', 'ca'], ['छ', 'cha'], ['ज', 'ja'], ['झ', 'jha'], ['ञ', 'ña'], ['ट', 'ṭa'], ['ठ', 'ṭha'], ['ड', 'ḍa'], ['ढ', 'ḍha'], ['ण', 'ṇa'], ['त', 'ta'], ['थ', 'tha'], ['द', 'da'], ['ध', 'dha'], ['न', 'na'], ['प', 'pa'], ['फ', 'pha'], ['ब', 'ba'], ['भ', 'bha'], ['म', 'ma'], ['य', 'ya'], ['र', 'ra'], ['ल', 'la'], ['व', 'va'], ['श', 'śa'], ['ष', 'ṣa'], ['स', 'sa'], ['ह', 'ha']] },
      { label: 'Vowel signs', items: [['ा', 'ā'], ['ि', 'i'], ['ी', 'ī'], ['ु', 'u'], ['ू', 'ū'], ['ृ', 'ṛ'], ['ॄ', 'ṝ'], ['ॢ', 'ḷ'], ['ॣ', 'ḹ'], ['े', 'e'], ['ै', 'ai'], ['ो', 'o'], ['ौ', 'au'], ['्', 'virāma']] },
      { label: 'Other signs and common conjuncts', items: [['ं', 'anusvāra'], ['ः', 'visarga'], ['क्ष', 'kṣa'], ['त्र', 'tra'], ['ज्ञ', 'jña']] }
    ], dictionary: makeDictionary([
      ['जलम्', 'jalam', 'water'], ['गृहम्', 'gṛham', 'house / home'], ['माता', 'mātā', 'mother'], ['पिता', 'pitā', 'father'], ['पुस्तकम्', 'pustakam', 'book'], ['विद्यालयः', 'vidyālayaḥ', 'school'], ['भोजनम्', 'bhojanam', 'food / meal'], ['फलम्', 'phalam', 'fruit'], ['बालकः', 'bālakaḥ', 'child / boy'], ['मित्रम्', 'mitram', 'friend'], ['समयः', 'samayaḥ', 'time'], ['दिनम्', 'dinam', 'day'], ['रात्रिः', 'rātriḥ', 'night'], ['पुष्पम्', 'puṣpam', 'flower'], ['सूर्यः', 'sūryaḥ', 'sun'], ['चन्द्रः', 'candraḥ', 'moon'], ['श्वानः', 'śvānaḥ', 'dog'], ['मार्जारः', 'mārjāraḥ', 'cat'], ['आम्', 'ām', 'yes'], ['न', 'na', 'no'], ['कृपया', 'kṛpayā', 'please'], ['धन्यवादः', 'dhanyavādaḥ', 'thank you'], ['आगच्छति', 'āgacchati', 'comes'], ['गच्छति', 'gacchati', 'goes'], ['खादति', 'khādati', 'eats'], ['पठति', 'paṭhati', 'reads / studies']
    ]), sentence: { english: 'I drink water.', parts: ['अहं', 'जलं', 'पिबामि'], roman: 'ahaṃ jalaṃ pibāmi' }, phrase: { native: 'नमस्ते', roman: 'namaste', meaning: 'Hello / greetings' }
  },
  tamil: {
    name: 'Tamil', symbol: 'அ', words: [
      { native: 'தண்ணீர்', roman: 'taṇṇīr', meaning: 'water' },
      { native: 'வீடு', roman: 'vīṭu', meaning: 'house / home' },
      { native: 'வணக்கம்', roman: 'vaṇakkam', meaning: 'hello / greetings' }
    ], alphabet: [
      { label: 'Vowels', items: [['அ', 'a'], ['ஆ', 'ā'], ['இ', 'i'], ['ஈ', 'ī'], ['உ', 'u'], ['ஊ', 'ū'], ['எ', 'e'], ['ஏ', 'ē'], ['ஐ', 'ai'], ['ஒ', 'o'], ['ஓ', 'ō'], ['ஔ', 'au']] },
      { label: 'Consonants', items: [['க', 'ka'], ['ங', 'ṅa'], ['ச', 'ca'], ['ஞ', 'ña'], ['ட', 'ṭa'], ['ண', 'ṇa'], ['த', 'ta'], ['ந', 'na'], ['ப', 'pa'], ['ம', 'ma'], ['ய', 'ya'], ['ர', 'ra'], ['ல', 'la'], ['வ', 'va'], ['ழ', 'ḻa'], ['ள', 'ḷa'], ['ற', 'ṟa'], ['ன', 'ṉa']] },
      { label: 'Grantha letters', items: [['ஜ', 'ja'], ['ஶ', 'śa'], ['ஷ', 'ṣa'], ['ஸ', 'sa'], ['ஹ', 'ha']] },
      { label: 'Vowel signs and other signs', items: [['ா', 'ā'], ['ி', 'i'], ['ீ', 'ī'], ['ு', 'u'], ['ூ', 'ū'], ['ெ', 'e'], ['ே', 'ē'], ['ை', 'ai'], ['ொ', 'o'], ['ோ', 'ō'], ['ௌ', 'au'], ['்', 'puḷḷi'], ['ஃ', 'āytam']] }
    ], dictionary: makeDictionary([
      ['தண்ணீர்', 'taṇṇīr', 'water'], ['வீடு', 'vīṭu', 'house / home'], ['அம்மா', 'ammā', 'mother'], ['அப்பா', 'appā', 'father'], ['புத்தகம்', 'puttakam', 'book'], ['பள்ளி', 'paḷḷi', 'school'], ['சாப்பாடு', 'sāppāṭu', 'food / meal'], ['பழம்', 'paḻam', 'fruit'], ['குழந்தை', 'kuḻantai', 'child'], ['நண்பர்', 'naṇpar', 'friend'], ['நேரம்', 'nēram', 'time'], ['நாள்', 'nāḷ', 'day'], ['இரவு', 'iravu', 'night'], ['மலர்', 'malar', 'flower'], ['சூரியன்', 'sūriyaṉ', 'sun'], ['நிலா', 'nilā', 'moon'], ['நாய்', 'nāy', 'dog'], ['பூனை', 'pūṉai', 'cat'], ['ஆம்', 'ām', 'yes'], ['இல்லை', 'illai', 'no'], ['தயவுசெய்து', 'tayavuceytu', 'please'], ['நன்றி', 'naṉṟi', 'thank you'], ['வா', 'vā', 'come'], ['போ', 'pō', 'go'], ['சாப்பிடு', 'sāppiṭu', 'eat'], ['படி', 'paṭi', 'read / study']
    ]), sentence: { english: 'I drink water.', parts: ['நான்', 'தண்ணீர்', 'குடிக்கிறேன்'], roman: 'nāṉ taṇṇīr kuṭikkiṟēṉ' }, phrase: { native: 'வணக்கம்', roman: 'vaṇakkam', meaning: 'Hello / greetings' }
  },
  telugu: {
    name: 'Telugu', symbol: 'అ', words: [
      { native: 'నీరు', roman: 'nīru', meaning: 'water' },
      { native: 'ఇల్లు', roman: 'illu', meaning: 'house / home' },
      { native: 'నమస్కారం', roman: 'namaskāram', meaning: 'hello / greetings' }
    ], alphabet: [
      { label: 'Independent vowels', items: [['అ', 'a'], ['ఆ', 'ā'], ['ఇ', 'i'], ['ఈ', 'ī'], ['ఉ', 'u'], ['ఊ', 'ū'], ['ఋ', 'ṛ'], ['ౠ', 'ṝ'], ['ఌ', 'ḷ'], ['ౡ', 'ḹ'], ['ఎ', 'e'], ['ఏ', 'ē'], ['ఐ', 'ai'], ['ఒ', 'o'], ['ఓ', 'ō'], ['ఔ', 'au']] },
      { label: 'Consonants', items: [['క', 'ka'], ['ఖ', 'kha'], ['గ', 'ga'], ['ఘ', 'gha'], ['ఙ', 'ṅa'], ['చ', 'ca'], ['ఛ', 'cha'], ['జ', 'ja'], ['ఝ', 'jha'], ['ఞ', 'ña'], ['ట', 'ṭa'], ['ఠ', 'ṭha'], ['డ', 'ḍa'], ['ఢ', 'ḍha'], ['ణ', 'ṇa'], ['త', 'ta'], ['థ', 'tha'], ['ద', 'da'], ['ధ', 'dha'], ['న', 'na'], ['ప', 'pa'], ['ఫ', 'pha'], ['బ', 'ba'], ['భ', 'bha'], ['మ', 'ma'], ['య', 'ya'], ['ర', 'ra'], ['ల', 'la'], ['వ', 'va'], ['శ', 'śa'], ['ష', 'ṣa'], ['స', 'sa'], ['హ', 'ha'], ['ళ', 'ḷa'], ['ఱ', 'ṟa']] },
      { label: 'Vowel signs', items: [['ా', 'ā'], ['ి', 'i'], ['ీ', 'ī'], ['ు', 'u'], ['ూ', 'ū'], ['ృ', 'ṛ'], ['ౄ', 'ṝ'], ['ౢ', 'ḷ'], ['ౣ', 'ḹ'], ['ె', 'e'], ['ే', 'ē'], ['ై', 'ai'], ['ొ', 'o'], ['ో', 'ō'], ['ౌ', 'au'], ['్', 'virāma']] },
      { label: 'Other signs and common conjuncts', items: [['ం', 'anusvāra'], ['ః', 'visarga'], ['క్ష', 'kṣa'], ['జ్ఞ', 'jña']] }
    ], dictionary: makeDictionary([
      ['నీరు', 'nīru', 'water'], ['ఇల్లు', 'illu', 'house / home'], ['అమ్మ', 'amma', 'mother'], ['నాన్న', 'nānna', 'father'], ['పుస్తకం', 'pustakaṃ', 'book'], ['పాఠశాల', 'pāṭhaśāla', 'school'], ['భోజనం', 'bhōjanaṃ', 'food / meal'], ['పండు', 'paṇḍu', 'fruit'], ['పిల్ల', 'pilla', 'child'], ['స్నేహితుడు', 'snēhituḍu', 'friend'], ['సమయం', 'samayaṃ', 'time'], ['రోజు', 'rōju', 'day'], ['రాత్రి', 'rātri', 'night'], ['పువ్వు', 'puvvu', 'flower'], ['సూర్యుడు', 'sūryuḍu', 'sun'], ['చంద్రుడు', 'candruḍu', 'moon'], ['కుక్క', 'kukka', 'dog'], ['పిల్లి', 'pilli', 'cat'], ['అవును', 'avunu', 'yes'], ['కాదు', 'kādu', 'no'], ['దయచేసి', 'dayacēsi', 'please'], ['ధన్యవాదాలు', 'dhanyavādālu', 'thank you'], ['రా', 'rā', 'come'], ['వెళ్లు', 'veḷḷu', 'go'], ['తిను', 'tinu', 'eat'], ['చదువు', 'caduvu', 'read / study']
    ]), sentence: { english: 'I drink water.', parts: ['నేను', 'నీరు', 'తాగుతాను'], roman: 'nēnu nīru tāgutānu' }, phrase: { native: 'నమస్కారం', roman: 'namaskāram', meaning: 'Hello / greetings' }
  },
  malayalam: {
    name: 'Malayalam', symbol: 'അ', words: [
      { native: 'വെള്ളം', roman: 'veḷḷam', meaning: 'water' },
      { native: 'വീട്', roman: 'vīṭŭ', meaning: 'house / home' },
      { native: 'നമസ്കാരം', roman: 'namaskāram', meaning: 'hello / greetings' }
    ], alphabet: [
      { label: 'Independent vowels', items: [['അ', 'a'], ['ആ', 'ā'], ['ഇ', 'i'], ['ഈ', 'ī'], ['ഉ', 'u'], ['ഊ', 'ū'], ['ഋ', 'ṛ'], ['ൠ', 'ṝ'], ['ഌ', 'ḷ'], ['ൡ', 'ḹ'], ['എ', 'e'], ['ഏ', 'ē'], ['ഐ', 'ai'], ['ഒ', 'o'], ['ഓ', 'ō'], ['ഔ', 'au']] },
      { label: 'Consonants', items: [['ക', 'ka'], ['ഖ', 'kha'], ['ഗ', 'ga'], ['ഘ', 'gha'], ['ങ', 'ṅa'], ['ച', 'ca'], ['ഛ', 'cha'], ['ജ', 'ja'], ['ഝ', 'jha'], ['ഞ', 'ña'], ['ട', 'ṭa'], ['ഠ', 'ṭha'], ['ഡ', 'ḍa'], ['ഢ', 'ḍha'], ['ണ', 'ṇa'], ['ത', 'ta'], ['ഥ', 'tha'], ['ദ', 'da'], ['ധ', 'dha'], ['ന', 'na'], ['പ', 'pa'], ['ഫ', 'pha'], ['ബ', 'ba'], ['ഭ', 'bha'], ['മ', 'ma'], ['യ', 'ya'], ['ര', 'ra'], ['ല', 'la'], ['വ', 'va'], ['ശ', 'śa'], ['ഷ', 'ṣa'], ['സ', 'sa'], ['ഹ', 'ha'], ['ള', 'ḷa'], ['ഴ', 'ḻa'], ['റ', 'ṟa']] },
      { label: 'Vowel signs', items: [['ാ', 'ā'], ['ി', 'i'], ['ീ', 'ī'], ['ു', 'u'], ['ൂ', 'ū'], ['ൃ', 'ṛ'], ['ൄ', 'ṝ'], ['ൢ', 'ḷ'], ['ൣ', 'ḹ'], ['െ', 'e'], ['േ', 'ē'], ['ൈ', 'ai'], ['ൊ', 'o'], ['ോ', 'ō'], ['ൌ', 'au'], ['്', 'virāma']] },
      { label: 'Other signs and chillu letters', items: [['ം', 'anusvāra'], ['ഃ', 'visarga'], ['ൺ', 'ṇ'], ['ൻ', 'n'], ['ർ', 'r'], ['ൽ', 'l'], ['ൾ', 'ḷ'], ['ൿ', 'k']] }
    ], dictionary: makeDictionary([
      ['വെള്ളം', 'veḷḷam', 'water'], ['വീട്', 'vīṭŭ', 'house / home'], ['അമ്മ', 'amma', 'mother'], ['അച്ഛൻ', 'acchan', 'father'], ['പുസ്തകം', 'pustakaṁ', 'book'], ['വിദ്യാലയം', 'vidyālayam', 'school'], ['ഭക്ഷണം', 'bhakṣaṇaṁ', 'food / meal'], ['പഴം', 'paḻaṁ', 'fruit'], ['കുട്ടി', 'kuṭṭi', 'child'], ['സുഹൃത്ത്', 'suhr̥ttŭ', 'friend'], ['സമയം', 'samayaṁ', 'time'], ['ദിവസം', 'divasam', 'day'], ['രാത്രി', 'rātri', 'night'], ['പൂവ്', 'pūvŭ', 'flower'], ['സൂര്യൻ', 'sūryan', 'sun'], ['ചന്ദ്രൻ', 'candran', 'moon'], ['നായ', 'nāya', 'dog'], ['പൂച്ച', 'pūcca', 'cat'], ['അതെ', 'athe', 'yes'], ['ഇല്ല', 'illa', 'no'], ['ദയവായി', 'dayavāyi', 'please'], ['നന്ദി', 'nandi', 'thank you'], ['വരൂ', 'varū', 'come (polite)'], ['പോകൂ', 'pōkū', 'go (polite)'], ['കഴിക്കുക', 'kaḻikkuka', 'eat'], ['വായിക്കുക', 'vāyikkuka', 'read / study']
    ]), sentence: { english: 'I drink water.', parts: ['ഞാൻ', 'വെള്ളം', 'കുടിക്കുന്നു'], roman: 'ñān veḷḷam kuṭikkunnu' }, phrase: { native: 'നമസ്കാരം', roman: 'namaskāram', meaning: 'Hello / greetings' }
  }
};

const todayKey = new Date().toISOString().slice(0, 10);
const savedDay = localStorage.getItem('akshara-day');
const savedDailyPractices = savedDay === todayKey ? Number(localStorage.getItem('akshara-daily-practices') || 0) : 0;

const state = {
  language: localStorage.getItem('akshara-language') || 'kannada',
  mode: 'alphabet',
  index: 0,
  selected: null,
  sentenceTiles: [],
  completed: Number(localStorage.getItem('akshara-completed') || 0),
  xp: Number(localStorage.getItem('akshara-xp') || 0),
  dailyPractices: savedDailyPractices,
  installPrompt: null,
  locked: false
};

const byId = (id) => document.getElementById(id);
const languageData = () => languages[state.language];
const modeLabels = { alphabet: 'LETTER STUDIO', words: 'WORD MATCH', sentences: 'SENTENCE BUILDER' };
const alphabetChoices = ['ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ'];

function init() {
  buildLanguageList();
  buildDictionaryLanguageOptions();
  bindControls();
  setupPwa();
  renderAll();
}

function setupPwa() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {});
  }

  const installButton = byId('install-app');
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    state.installPrompt = event;
    installButton.hidden = false;
  });
  installButton.addEventListener('click', async () => {
    if (!state.installPrompt) return;
    await state.installPrompt.prompt();
    const { outcome } = await state.installPrompt.userChoice;
    if (outcome === 'accepted') installButton.hidden = true;
    state.installPrompt = null;
  });
  window.addEventListener('appinstalled', () => {
    installButton.hidden = true;
    showToast('Akshara is ready on your phone.');
  });
}

function buildLanguageList() {
  const list = byId('language-list');
  list.innerHTML = Object.entries(languages).map(([key, language]) => `
    <button class="language-option ${key === state.language ? 'selected' : ''}" data-language="${key}" aria-pressed="${key === state.language}">
      <span class="language-symbol" lang="${key}">${language.symbol}</span><span class="language-name">${language.name}</span><span class="language-check">✓</span>
    </button>`).join('');
  list.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => selectLanguage(button.dataset.language)));
}

function buildDictionaryLanguageOptions() {
  byId('dictionary-language').innerHTML = Object.entries(languages).map(([key, language]) => `<option value="${key}">${language.symbol} ${language.name}</option>`).join('');
}

function bindControls() {
  document.querySelectorAll('[data-mode]').forEach((tab) => tab.addEventListener('click', () => selectMode(tab.dataset.mode)));
  byId('open-dictionary').addEventListener('click', openDictionary);
  byId('open-dictionary-secondary').addEventListener('click', openDictionary);
  byId('dictionary-language').addEventListener('change', renderDictionary);
  byId('dictionary-search').addEventListener('input', renderDictionary);
  document.querySelectorAll('[data-close-dialog]').forEach((button) => button.addEventListener('click', () => byId(button.dataset.closeDialog).close()));
  byId('course-switch').addEventListener('click', () => {
    const keys = Object.keys(languages);
    const next = keys[(keys.indexOf(state.language) + 1) % keys.length];
    selectLanguage(next);
    showToast(`Now learning ${languages[next].name}`);
  });
  byId('speak-phrase').addEventListener('click', speakPhrase);
  document.querySelectorAll('.nav-link').forEach((button) => button.addEventListener('click', () => {
    if (button.dataset.view === 'words') {
      openDictionary();
      document.querySelectorAll('.nav-link').forEach((nav) => nav.classList.toggle('active', nav === button));
      return;
    }
    const mode = button.dataset.view === 'script' ? 'alphabet' : button.dataset.view === 'words' ? 'words' : 'alphabet';
    selectMode(mode);
    document.querySelectorAll('.nav-link').forEach((nav) => nav.classList.toggle('active', nav === button));
    document.querySelector('.lesson-column').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }));
}

function selectLanguage(key) {
  if (!languages[key]) return;
  state.language = key;
  state.index = 0;
  state.selected = null;
  state.sentenceTiles = [];
  localStorage.setItem('akshara-language', key);
  buildLanguageList();
  renderAll();
}

function selectMode(mode) {
  state.mode = mode;
  state.index = 0;
  state.selected = null;
  state.sentenceTiles = [];
  document.querySelectorAll('[data-mode]').forEach((tab) => {
    const active = tab.dataset.mode === mode;
    tab.classList.toggle('selected', active);
    tab.setAttribute('aria-selected', String(active));
  });
  renderExercise();
}

function renderAll() {
  const language = languageData();
  document.documentElement.lang = state.language === 'sanskrit' ? 'sa' : state.language === 'kannada' ? 'kn' : state.language === 'tamil' ? 'ta' : state.language === 'telugu' ? 'te' : 'ml';
  byId('course-emblem').textContent = language.symbol;
  byId('course-emblem').setAttribute('lang', document.documentElement.lang);
  byId('course-name').textContent = `${language.name} for beginners`;
  byId('phrase-script').textContent = language.phrase.native;
  byId('phrase-script').setAttribute('lang', document.documentElement.lang);
  byId('phrase-pronunciation').textContent = language.phrase.roman;
  byId('phrase-meaning').textContent = language.phrase.meaning;
  renderExercise();
  renderProgress();
}

function renderExercise() {
  state.locked = false;
  byId('feedback').hidden = true;
  byId('feedback').className = 'feedback';
  byId('exercise-type-label').textContent = modeLabels[state.mode];
  const count = state.mode === 'alphabet' ? alphabetPracticeEntries().length : 3;
  byId('question-count').textContent = `${state.index + 1} / ${count}`;
  byId('exercise-progress-bar').style.width = `${((state.index + 1) / count) * 100}%`;
  byId('lesson-title').textContent = state.mode === 'alphabet' ? 'Start with the sounds' : state.mode === 'words' ? 'Grow your word bank' : 'Put the words together';
  byId('exercise-content').innerHTML = state.mode === 'alphabet' ? alphabetExercise() : state.mode === 'words' ? wordExercise() : sentenceExercise();
  renderActions();
  if (state.mode === 'alphabet') {
    setupCanvas();
    byId('open-alphabet').addEventListener('click', openAlphabetDialog);
  }
  if (state.mode === 'words') bindChoices();
  if (state.mode === 'sentences') bindTiles();
}

function alphabetExercise() {
  const entry = alphabetPracticeEntries()[state.index];
  return `<div class="prompt-label">TRACE THE CHARACTER · ${entry.group.toUpperCase()}</div>
    <h3 class="prompt-title">Practice <span lang="${document.documentElement.lang}">${entry.glyph}</span> <span lang="en">(${entry.roman})</span>.</h3>
    <p class="prompt-hint">Follow the guide, then check your practice.</p>
    <div class="script-practice">
      <div><div class="writing-pad"><span class="pad-caption">YOUR STROKES</span><canvas id="writing-canvas" aria-label="Practice writing the character ${entry.glyph}" lang="${document.documentElement.lang}"></canvas></div><div class="pad-tools"><span>Use your finger or mouse</span><button class="text-button" id="clear-pad">Clear strokes</button></div><button class="text-button alphabet-open-button" id="open-alphabet" type="button">View full alphabet chart <span aria-hidden="true">→</span></button></div>
      <div class="glyph-model"><span lang="${document.documentElement.lang}">${entry.glyph}</span><small>${entry.roman}</small></div>
    </div>`;
}

function alphabetPracticeEntries(languageKey = state.language) {
  return languages[languageKey].alphabet.flatMap((group) => group.items.map(([glyph, roman]) => ({ glyph, roman, group: group.label })));
}

function openAlphabetDialog() {
  const language = languageData();
  const entries = alphabetPracticeEntries();
  let practiceIndex = 0;
  byId('alphabet-dialog-title').textContent = `${language.name} alphabet`;
  byId('alphabet-dialog-summary').textContent = `${entries.length} letters and signs · Select a character to practice it.`;
  byId('alphabet-groups').innerHTML = language.alphabet.map((group) => `
    <section class="alphabet-group"><h3>${escapeHtml(group.label)}</h3><div class="alphabet-grid">${group.items.map(([glyph, roman]) => {
      const currentIndex = practiceIndex++;
      return `<button class="alphabet-cell" type="button" data-practice-index="${currentIndex}" aria-label="Practice ${escapeHtml(glyph)}, ${escapeHtml(roman)}"><span class="alphabet-glyph" lang="${document.documentElement.lang}">${escapeHtml(glyph)}</span><span class="alphabet-roman">${escapeHtml(roman)}</span></button>`;
    }).join('')}</div></section>`).join('');
  byId('alphabet-groups').querySelectorAll('[data-practice-index]').forEach((button) => button.addEventListener('click', () => {
    state.index = Number(button.dataset.practiceIndex);
    byId('alphabet-dialog').close();
    renderExercise();
  }));
  byId('alphabet-dialog').showModal();
}

function openDictionary() {
  byId('dictionary-language').value = state.language;
  byId('dictionary-search').value = '';
  renderDictionary();
  byId('dictionary-dialog').showModal();
  byId('dictionary-search').focus();
}

function normalizeSearchText(value) {
  return value.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function renderDictionary() {
  const languageKey = byId('dictionary-language').value || state.language;
  const language = languages[languageKey];
  const entries = language.dictionary;
  const query = normalizeSearchText(byId('dictionary-search').value.trim());
  const matches = entries.filter((entry) => !query || [entry.native, entry.roman, entry.meaning].some((value) => normalizeSearchText(value).includes(query)));
  byId('dictionary-results').setAttribute('lang', languageKey === 'sanskrit' ? 'sa' : languageKey === 'kannada' ? 'kn' : languageKey === 'tamil' ? 'ta' : languageKey === 'telugu' ? 'te' : 'ml');
  byId('dictionary-result-count').textContent = `${matches.length} of ${entries.length} words · available offline`;
  byId('dictionary-results').innerHTML = matches.length ? matches.map((entry) => `
    <article class="dictionary-entry"><span class="dictionary-native">${escapeHtml(entry.native)}</span><span class="dictionary-roman">${escapeHtml(entry.roman)}</span><span class="dictionary-meaning">${escapeHtml(entry.meaning)}</span></article>`).join('') : '<p class="dictionary-empty">No matching words. Try a different spelling.</p>';
}

function wordExercise() {
  const word = languageData().words[state.index];
  const options = [word.meaning, ...languageData().words.filter((_, index) => index !== state.index).map((item) => item.meaning)].sort((a, b) => a.localeCompare(b));
  return `<div class="prompt-label">CHOOSE THE ENGLISH MEANING</div>
    <h3 class="prompt-title">What does this word mean?</h3>
    <div class="word-display"><span class="word-native" lang="${document.documentElement.lang}">${word.native}</span><span class="word-detail"><span class="word-pronunciation">${word.roman}</span><span class="word-instruction">Listen, read, and remember</span></span></div>
    <div class="choice-grid">${options.map((option, index) => `<button class="choice-option" data-choice="${escapeHtml(option)}"><span class="choice-key">${String.fromCharCode(65 + index)}</span>${escapeHtml(option)}</button>`).join('')}</div>`;
}

function sentenceExercise() {
  const sentence = languageData().sentence;
  const scrambled = [...sentence.parts].sort((a, b) => b.localeCompare(a));
  return `<div class="prompt-label">BUILD THE SENTENCE</div>
    <h3 class="prompt-title">How do you say this in ${languageData().name}?</h3>
    <p class="prompt-hint">Tap each word in the correct order.</p>
    <div class="sentence-board empty" id="sentence-board" lang="${document.documentElement.lang}"></div>
    <div class="tile-bank" lang="${document.documentElement.lang}">${scrambled.map((part, index) => `<button class="word-tile" data-tile="${index}" data-word="${escapeHtml(part)}">${part}</button>`).join('')}</div>
    <p class="sentence-meaning">English <strong>${sentence.english}</strong></p>`;
}

function renderActions() {
  const actions = byId('exercise-actions');
  if (state.locked) {
    actions.innerHTML = `<span class="action-note">Nice work. Keep your rhythm.</span><button class="primary-button" id="continue-button">Continue <span aria-hidden="true">→</span></button>`;
    byId('continue-button').addEventListener('click', continueExercise);
    return;
  }
  const note = state.mode === 'alphabet' ? 'Every stroke helps your hand remember.' : state.mode === 'words' ? 'Choose the best meaning.' : 'Arrange the words into a sentence.';
  actions.innerHTML = `<span class="action-note">${note}</span><button class="primary-button" id="check-button">Check answer</button>`;
  byId('check-button').addEventListener('click', checkAnswer);
}

function setupCanvas() {
  const canvas = byId('writing-canvas');
  if (!canvas) return;
  const context = canvas.getContext('2d');
  const drawGuide = () => {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, rect.width, rect.height);
    const glyph = alphabetPracticeEntries()[state.index].glyph;
    context.font = `70px "Noto Serif ${languageData().name}", serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = '#d6ddd4';
    context.fillText(glyph, rect.width / 2, rect.height / 2 + 5);
  };
  drawGuide();
  let drawing = false;
  let hasStroke = false;
  const point = (event) => {
    const rect = canvas.getBoundingClientRect();
    return { x: event.clientX - rect.left, y: event.clientY - rect.top };
  };
  canvas.addEventListener('pointerdown', (event) => {
    drawing = true;
    hasStroke = true;
    canvas.setPointerCapture(event.pointerId);
    const current = point(event);
    context.beginPath();
    context.moveTo(current.x, current.y);
    context.lineWidth = 3.2;
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.strokeStyle = '#2f7867';
  });
  canvas.addEventListener('pointermove', (event) => {
    if (!drawing) return;
    const current = point(event);
    context.lineTo(current.x, current.y);
    context.stroke();
  });
  const endDrawing = () => { drawing = false; };
  canvas.addEventListener('pointerup', endDrawing);
  canvas.addEventListener('pointercancel', endDrawing);
  byId('clear-pad').addEventListener('click', () => { hasStroke = false; drawGuide(); });
  canvas.dataset.hasStroke = 'false';
  canvas.addEventListener('pointerdown', () => { canvas.dataset.hasStroke = 'true'; });
  byId('clear-pad').addEventListener('click', () => { canvas.dataset.hasStroke = 'false'; });
  window.addEventListener('resize', drawGuide, { once: true });
}

function bindChoices() {
  document.querySelectorAll('[data-choice]').forEach((button) => button.addEventListener('click', () => {
    if (state.locked) return;
    state.selected = button.dataset.choice;
    document.querySelectorAll('[data-choice]').forEach((choice) => choice.classList.toggle('selected', choice === button));
  }));
}

function bindTiles() {
  document.querySelectorAll('[data-tile]').forEach((button) => button.addEventListener('click', () => {
    if (state.locked || button.classList.contains('used')) return;
    state.sentenceTiles.push({ id: button.dataset.tile, word: button.dataset.word });
    button.classList.add('used');
    renderSentenceBoard();
  }));
  renderSentenceBoard();
}

function renderSentenceBoard() {
  const board = byId('sentence-board');
  board.classList.toggle('empty', state.sentenceTiles.length === 0);
  board.innerHTML = state.sentenceTiles.map((tile, index) => `<button class="word-tile" data-remove="${index}" aria-label="Remove ${escapeHtml(tile.word)}">${tile.word}</button>`).join('');
  board.querySelectorAll('[data-remove]').forEach((button) => button.addEventListener('click', () => {
    const [removed] = state.sentenceTiles.splice(Number(button.dataset.remove), 1);
    const original = document.querySelector(`[data-tile="${removed.id}"]`);
    if (original) original.classList.remove('used');
    renderSentenceBoard();
  }));
}

function checkAnswer() {
  if (state.mode === 'alphabet') {
    if (byId('writing-canvas').dataset.hasStroke !== 'true') return showFeedback('error', 'Add a few strokes in the practice area first.');
    return markCorrect('Your hand is getting to know this character.');
  }
  if (state.mode === 'words') {
    const correct = languageData().words[state.index].meaning;
    if (!state.selected) return showFeedback('error', 'Choose the English meaning that fits.');
    if (state.selected !== correct) return showFeedback('error', 'Not quite. Read the word once more and try again.');
    document.querySelectorAll('[data-choice]').forEach((button) => { if (button.dataset.choice === correct) button.classList.add('correct'); });
    return markCorrect('That’s right. You’ve added a useful word.');
  }
  const expected = languageData().sentence.parts;
  if (state.sentenceTiles.length !== expected.length) return showFeedback('error', 'Add all the words to complete the sentence.');
  if (state.sentenceTiles.map((tile) => tile.word).join(' ') !== expected.join(' ')) return showFeedback('error', 'The word order is not quite right. Move a tile and try again.');
  return markCorrect(`Correct: ${languageData().sentence.roman}`);
}

function markCorrect(message) {
  state.locked = true;
  state.completed += 1;
  state.xp += 5;
  state.dailyPractices = Math.min(10, state.dailyPractices + 1);
  localStorage.setItem('akshara-day', todayKey);
  localStorage.setItem('akshara-daily-practices', state.dailyPractices);
  localStorage.setItem('akshara-completed', state.completed);
  localStorage.setItem('akshara-xp', state.xp);
  showFeedback('success', `${message} +5 XP`);
  renderActions();
  renderProgress();
}

function showFeedback(type, text) {
  const feedback = byId('feedback');
  feedback.className = `feedback ${type}`;
  feedback.textContent = text;
  feedback.hidden = false;
}

function continueExercise() {
  const count = state.mode === 'alphabet' ? alphabetPracticeEntries().length : 3;
  state.index = (state.index + 1) % count;
  state.selected = null;
  state.sentenceTiles = [];
  renderExercise();
}

function renderProgress() {
  const percent = Math.min(100, Math.round((state.completed % 12) / 12 * 100));
  const goal = Math.min(10, state.dailyPractices);
  const xpStep = state.xp % 25;
  byId('top-xp').textContent = `${state.xp} XP`;
  byId('rail-xp').textContent = state.xp;
  byId('top-streak').textContent = state.completed > 0 ? '1' : '0';
  byId('streak-count').textContent = state.completed > 0 ? '1 day' : 'Start today';
  byId('goal-progress').textContent = goal;
  byId('goal-ring').style.background = `conic-gradient(var(--green) ${goal * 10}%, #e8e5d9 0)`;
  byId('goal-ring').querySelector('span').textContent = `${goal * 10}%`;
  byId('course-percent').textContent = `${percent}%`;
  byId('course-progress-bar').style.width = `${percent}%`;
  byId('xp-progress-bar').style.width = `${xpStep / 25 * 100}%`;
  byId('xp-to-next').textContent = `${25 - xpStep || 25} XP`;
  document.querySelectorAll('.milestone-dot').forEach((dot, index) => dot.classList.toggle('done', state.xp >= (index + 1) * 25));
}

function speakPhrase() {
  if (!('speechSynthesis' in window)) return showToast('Audio playback is not available in this browser.');
  const utterance = new SpeechSynthesisUtterance(languageData().phrase.native);
  const locale = { kannada: 'kn-IN', sanskrit: 'hi-IN', tamil: 'ta-IN', telugu: 'te-IN', malayalam: 'ml-IN' }[state.language];
  utterance.lang = locale;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function showToast(message) {
  const toast = byId('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  window.setTimeout(() => toast.classList.remove('visible'), 2200);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

init();
