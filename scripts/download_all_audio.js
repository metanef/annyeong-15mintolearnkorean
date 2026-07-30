const fs = require('fs');
const path = require('path');
const https = require('https');

const audioDir = path.join(__dirname, '..', 'assets', 'audio');
if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
}

// List of all 40 Jamo characters + Pop culture words
const terms = [
    // Consonants (14)
    "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ",
    // Vowels (10)
    "ㅣ", "ㅏ", "ㅑ", "ㅓ", "ㅕ", "ㅡ", "ㅗ", "ㅛ", "ㅜ", "ㅠ",
    // Double Consonants (5)
    "ㄲ", "ㄸ", "ㅃ", "ㅆ", "ㅉ",
    // Compound Vowels (11)
    "ㅐ", "ㅒ", "ㅔ", "ㅖ", "ㅘ", "ㅙ", "ㅚ", "ㅝ", "ㅞ", "ㅟ", "ㅢ",
    // Pop Culture Words
    "배트맨", "마리오", "해리 포터", "타이타닉", "토토로", "슈퍼맨", "피카츄",
    "디즈니", "스타워즈", "셜록", "스파이더맨", "매트릭스", "스누피", "호머 심슨", "어벤져스", "아바타"
];

function downloadTerm(term) {
    return new Promise((resolve, reject) => {
        // Use hex encoding for filename to ensure 100% cross-platform OS filesystem safety
        const hexName = Buffer.from(term).toString('hex') + '.mp3';
        const filePath = path.join(audioDir, hexName);

        if (fs.existsSync(filePath) && fs.statSync(filePath).size > 1000) {
            console.log(`Skipping existing: ${term} (${hexName})`);
            return resolve();
        }

        const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=ko&q=${encodeURIComponent(term)}&client=tw-ob`;

        const request = https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        }, (res) => {
            if (res.statusCode !== 200) {
                console.error(`Failed ${term}: Status ${res.statusCode}`);
                return resolve(); // Continue despite single failure
            }

            const file = fs.createWriteStream(filePath);
            res.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    console.log(`Downloaded: ${term} -> ${hexName} (${fs.statSync(filePath).size} bytes)`);
                    resolve();
                });
            });
        });

        request.on('error', (err) => {
            console.error(`Error downloading ${term}:`, err.message);
            resolve();
        });
    });
}

async function downloadAll() {
    console.log(`Starting download of ${terms.length} audio clips...`);
    for (const term of terms) {
        await downloadTerm(term);
        // Small delay to avoid rate limiting
        await new Promise(r => setTimeout(r, 150));
    }

    let totalSize = 0;
    const files = fs.readdirSync(audioDir);
    files.forEach(f => {
        totalSize += fs.statSync(path.join(audioDir, f)).size;
    });

    console.log(`\n🎉 Completed! Total ${files.length} audio files downloaded.`);
    console.log(`Total Directory Size: ${(totalSize / 1024).toFixed(2)} KB (${(totalSize / (1024 * 1024)).toFixed(2)} MB)`);
}

downloadAll();
