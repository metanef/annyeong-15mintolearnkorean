// --- PART 1: COMPLETE OFFICIAL JAMO TABLE COURSE DATA ---
const flowSteps = [
    { type: 'slide', title: "Learn Korean Hangul Jamo", emoji: "🇰🇷", text: "Welcome to the complete official table containing all basic consonants, vowels, double consonants, and compound vowels with exact names and pronunciations." },

    // Basic Letters Category Slide
    { type: 'slide', title: "Basic Letters", emoji: "🧱", text: "Starting with the core fundamental building blocks: basic consonants and basic vowels." },

    // Consonants (14)
    { type: 'slide', title: "Consonants", emoji: "📝", text: "Learn the 14 basic consonants with their official names and pronunciations." },
    {
        type: 'lesson', group: 'consonants', items: [
            { type: "Consonant", char: "ㄱ", name: "gieuk", sound: "g", icon: "🔫", mnemonic: "Basic consonant <b>gieuk</b>, pronounced <b>g</b>.", spoken: "ㄱ" },
            { type: "Consonant", char: "ㄴ", name: "nieun", sound: "n", icon: "👃", mnemonic: "Basic consonant <b>nieun</b>, pronounced <b>n</b>.", spoken: "ㄴ" },
            { type: "Consonant", char: "ㄷ", name: "dieut", sound: "d", icon: "🚪", mnemonic: "Basic consonant <b>dieut</b>, pronounced <b>d</b>.", spoken: "ㄷ" },
            { type: "Consonant", char: "ㄹ", name: "rieul", sound: "r (before vowel) / l", icon: "🐍", mnemonic: "Basic consonant <b>rieul</b>, pronounced <b>r / l</b>.", spoken: "ㄹ" },
            { type: "Consonant", char: "ㅁ", name: "mieum", sound: "m", icon: "🗺️", mnemonic: "Basic consonant <b>mieum</b>, pronounced <b>m</b>.", spoken: "ㅁ" },
            { type: "Consonant", char: "ㅂ", name: "bieup", sound: "b", icon: "🪣", mnemonic: "Basic consonant <b>bieup</b>, pronounced <b>b</b>.", spoken: "ㅂ" },
            { type: "Consonant", char: "ㅅ", name: "sieut", sound: "s", icon: "⛰️", mnemonic: "Basic consonant <b>sieut</b>, pronounced <b>s</b>.", spoken: "ㅅ" },
            { type: "Consonant", char: "ㅇ", name: "ieung", sound: "ng", icon: "⭕", mnemonic: "Basic consonant <b>ieung</b>, pronounced <b>ng</b> (silent placeholder at start).", spoken: "ㅇ" },
            { type: "Consonant", char: "ㅈ", name: "jieut", sound: "j", icon: "👖", mnemonic: "Basic consonant <b>jieut</b>, pronounced <b>j</b>.", spoken: "ㅈ" },
            { type: "Consonant", char: "ㅊ", name: "chieut", sound: "ch", icon: "🐓", mnemonic: "Basic consonant <b>chieut</b>, pronounced <b>ch</b>.", spoken: "ㅊ" },
            { type: "Consonant", char: "ㅋ", name: "kieuk", sound: "k", icon: "🔫", mnemonic: "Basic consonant <b>kieuk</b>, pronounced <b>k</b>.", spoken: "ㅋ" },
            { type: "Consonant", char: "ㅌ", name: "tieut", sound: "t", icon: "🚪", mnemonic: "Basic consonant <b>tieut</b>, pronounced <b>t</b>.", spoken: "ㅌ" },
            { type: "Consonant", char: "ㅍ", name: "pieup", sound: "p", icon: "🏛️", mnemonic: "Basic consonant <b>pieup</b>, pronounced <b>p</b>.", spoken: "ㅍ" },
            { type: "Consonant", char: "ㅎ", name: "hieut", sound: "h", icon: "👒", mnemonic: "Basic consonant <b>hieut</b>, pronounced <b>h</b>.", spoken: "ㅎ" }
        ]
    },

    // Vowels (10)
    { type: 'slide', title: "Vowels", emoji: "✨", text: "Learn the 10 basic vowels with their exact phonetic sounds." },
    {
        type: 'lesson', group: 'vowels', items: [
            { type: "Vowel", char: "ㅏ", name: "a", sound: "a", icon: "🌲", mnemonic: "Vowel <b>a</b>, pronounced <b>a</b>.", spoken: "ㅏ" },
            { type: "Vowel", char: "ㅑ", name: "ya", sound: "ya", icon: "🌲🌲", mnemonic: "Vowel <b>ya</b>, pronounced <b>ya</b>.", spoken: "ㅑ" },
            { type: "Vowel", char: "ㅓ", name: "eo", sound: "eo (open o)", icon: "🌲", mnemonic: "Vowel <b>eo</b>, pronounced <b>eo (open o)</b>.", spoken: "ㅓ" },
            { type: "Vowel", char: "ㅕ", name: "yeo", sound: "yeo (open o)", icon: "🌲🌲", mnemonic: "Vowel <b>yeo</b>, pronounced <b>yeo (open o)</b>.", spoken: "ㅕ" },
            { type: "Vowel", char: "ㅗ", name: "o", sound: "o", icon: "🌊", mnemonic: "Vowel <b>o</b>, pronounced <b>o</b>.", spoken: "ㅗ" },
            { type: "Vowel", char: "ㅛ", name: "yo", sound: "yo", icon: "🌊🌊", mnemonic: "Vowel <b>yo</b>, pronounced <b>yo</b>.", spoken: "ㅛ" },
            { type: "Vowel", char: "ㅜ", name: "u", sound: "u", icon: "🌊", mnemonic: "Vowel <b>u</b>, pronounced <b>u</b>.", spoken: "ㅜ" },
            { type: "Vowel", char: "ㅠ", name: "yu", sound: "yu", icon: "🌊🌊", mnemonic: "Vowel <b>yu</b>, pronounced <b>yu</b>.", spoken: "ㅠ" },
            { type: "Vowel", char: "ㅡ", name: "eu", sound: "eu", icon: "🌊", mnemonic: "Vowel <b>eu</b>, pronounced <b>eu</b>.", spoken: "ㅡ" },
            { type: "Vowel", char: "ㅣ", name: "i", sound: "i", icon: "🌲", mnemonic: "Vowel <b>i</b>, pronounced <b>i</b>.", spoken: "ㅣ" }
        ]
    },

    // Complex Letters Category Slide
    { type: 'slide', title: "Complex Letters", emoji: "⚡", text: "Moving on to advanced and complex letters: double consonants and compound vowels." },

    // Double Consonants (5)
    { type: 'slide', title: "Double Consonants", emoji: "⚡", text: "Learn the 5 tense/double consonants." },
    {
        type: 'lesson', group: 'double_consonants', items: [
            { type: "Double Consonant", char: "ㄲ", name: "ssang-gieuk", sound: "tense kk", icon: "🔫🔫", mnemonic: "Double consonant <b>ssang-gieuk</b>, pronounced <b>tense kk</b>.", spoken: "ㄲ" },
            { type: "Double Consonant", char: "ㄸ", name: "ssang-dieut", sound: "tense tt", icon: "🚪🚪", mnemonic: "Double consonant <b>ssang-dieut</b>, pronounced <b>tense tt</b>.", spoken: "ㄸ" },
            { type: "Double Consonant", char: "ㅃ", name: "ssang-bieup", sound: "tense pp", icon: "🪣🪣", mnemonic: "Double consonant <b>ssang-bieup</b>, pronounced <b>tense pp</b>.", spoken: "ㅃ" },
            { type: "Double Consonant", char: "ㅆ", name: "ssang-sieut", sound: "tense ss", icon: "⛰️⛰️", mnemonic: "Double consonant <b>ssang-sieut</b>, pronounced <b>tense ss</b>.", spoken: "ㅆ" },
            { type: "Double Consonant", char: "ㅉ", name: "ssang-jieut", sound: "tense jj", icon: "👖👖", mnemonic: "Double consonant <b>ssang-jieut</b>, pronounced <b>tense jj</b>.", spoken: "ㅉ" }
        ]
    },

    // Compound Vowels (11)
    { type: 'slide', title: "Compound Vowels", emoji: "🔀", text: "Learn the 11 compound vowels." },
    {
        type: 'lesson', group: 'compound_vowels', items: [
            { type: "Compound Vowel", char: "ㅐ", name: "ae", sound: "ae", icon: "🔤", mnemonic: "Compound vowel <b>ae</b>, pronounced <b>ae</b>.", spoken: "ㅐ" },
            { type: "Compound Vowel", char: "ㅒ", name: "yae", sound: "yae", icon: "🔤", mnemonic: "Compound vowel <b>yae</b>, pronounced <b>yae</b>.", spoken: "ㅒ" },
            { type: "Compound Vowel", char: "ㅔ", name: "e", sound: "e", icon: "🔤", mnemonic: "Compound vowel <b>e</b>, pronounced <b>e</b>.", spoken: "ㅔ" },
            { type: "Compound Vowel", char: "ㅖ", name: "ye", sound: "ye", icon: "🔤", mnemonic: "Compound vowel <b>ye</b>, pronounced <b>ye</b>.", spoken: "ㅖ" },
            { type: "Compound Vowel", char: "ㅘ", name: "wa", sound: "wa", icon: "🌊🌲", mnemonic: "Compound vowel <b>wa</b>, pronounced <b>wa</b>.", spoken: "ㅘ" },
            { type: "Compound Vowel", char: "ㅙ", name: "wae", sound: "wae", icon: "🌊🔤", mnemonic: "Compound vowel <b>wae</b>, pronounced <b>wae</b>.", spoken: "ㅙ" },
            { type: "Compound Vowel", char: "ㅚ", name: "oe", sound: "wi", icon: "🌊🌲", mnemonic: "Compound vowel <b>oe</b>, pronounced <b>wi</b>.", spoken: "ㅚ" },
            { type: "Compound Vowel", char: "ㅝ", name: "weo", sound: "wo (o ouvert)", icon: "🌊🌲", mnemonic: "Compound vowel <b>weo</b>, pronounced <b>wo (o ouvert)</b>.", spoken: "ㅝ" },
            { type: "Compound Vowel", char: "ㅞ", name: "we", sound: "wé", icon: "🌊🔤", mnemonic: "Compound vowel <b>we</b>, pronounced <b>wé</b>.", spoken: "ㅞ" },
            { type: "Compound Vowel", char: "ㅟ", name: "wi", sound: "wi", icon: "🌊🌲", mnemonic: "Compound vowel <b>wi</b>, pronounced <b>wi</b>.", spoken: "ㅟ" },
            { type: "Compound Vowel", char: "ㅢ", name: "ui", sound: "eui", icon: "🌊🌲", mnemonic: "Compound vowel <b>ui</b>, pronounced <b>eui</b>.", spoken: "ㅢ" }
        ]
    }
];

// --- PART 2: TRAINING LOGIC ---
const trainingExercises = [
    {
        type: "quiz",
        question: "Match the Korean characters to the Pop-Culture Name:",
        target: "배트맨",
        choices: ["Batman", "Mario", "Totoro", "Mickey"],
        answer: "Batman"
    },
    {
        type: "quiz",
        question: "What is this character's name in Korean?",
        target: "토 토 로",
        choices: ["Elmo", "Totoro", "Harry Potter", "Gollum"],
        answer: "Totoro"
    },
    {
        type: "quiz",
        question: "Identify this famous character name block:",
        target: "마 리 오",
        choices: ["Marge", "Mario", "Nemo", "Mickey"],
        answer: "Mario"
    }
];
