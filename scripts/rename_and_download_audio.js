const fs = require('fs');
const path = require('path');
const https = require('https');

const audioDir = path.join(__dirname, '..', 'assets', 'audio');
if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
}

// Map of spoken text / character to new clean audio filename
const audioMap = {
    // Consonants (c01 to c14)
    "ㄱ": "c01-gieuk.mp3",
    "ㄴ": "c02-nieun.mp3",
    "ㄷ": "c03-dieut.mp3",
    "ㄹ": "c04-rieul.mp3",
    "ㅁ": "c05-mieum.mp3",
    "ㅂ": "c06-bieup.mp3",
    "ㅅ": "c07-sieut.mp3",
    "ㅇ": "c08-ieung.mp3",
    "ㅈ": "c09-jieut.mp3",
    "ㅊ": "c10-chieut.mp3",
    "ㅋ": "c11-kieuk.mp3",
    "ㅌ": "c12-tieut.mp3",
    "ㅍ": "c13-pieup.mp3",
    "ㅎ": "c14-hieut.mp3",

    // Vowels (v01 to v10)
    "ㅣ": "v01-i.mp3",
    "ㅏ": "v02-a.mp3",
    "ㅑ": "v03-ya.mp3",
    "ㅓ": "v04-eo.mp3",
    "ㅕ": "v05-yeo.mp3",
    "ㅡ": "v06-eu.mp3",
    "ㅗ": "v07-o.mp3",
    "ㅛ": "v08-yo.mp3",
    "ㅜ": "v09-u.mp3",
    "ㅠ": "v10-yu.mp3",

    // Double Consonants (dc01 to dc05)
    "ㄲ": "dc01-ssang-gieuk.mp3",
    "ㄸ": "dc02-ssang-dieut.mp3",
    "ㅃ": "dc03-ssang-bieup.mp3",
    "ㅆ": "dc04-ssang-sieut.mp3",
    "ㅉ": "dc05-ssang-jieut.mp3",

    // Compound Vowels (cv01 to cv11)
    "ㅐ": "cv01-ae.mp3",
    "ㅒ": "cv02-yae.mp3",
    "ㅔ": "cv03-e.mp3",
    "ㅖ": "cv04-ye.mp3",
    "ㅘ": "cv05-wa.mp3",
    "ㅙ": "cv06-wae.mp3",
    "ㅚ": "cv07-oe.mp3",
    "ㅝ": "cv08-weo.mp3",
    "ㅞ": "cv09-we.mp3",
    "ㅟ": "cv10-wi.mp3",
    "ㅢ": "cv11-ui.mp3",

    // Pop-Culture Training Words (t01 to t15)
    "배트맨": "t01-batman.mp3",
    "마리오": "t02-mario.mp3",
    "해리 포터": "t03-harry-potter.mp3",
    "타이타닉": "t04-titanic.mp3",
    "토토로": "t05-totoro.mp3",
    "슈퍼맨": "t06-superman.mp3",
    "피카츄": "t07-pikachu.mp3",
    "디즈니": "t08-disney.mp3",
    "스타워즈": "t09-star-wars.mp3",
    "셜록": "t10-sherlock.mp3",
    "스파이더맨": "t11-spiderman.mp3",
    "매트릭스": "t12-matrix.mp3",
    "스누피": "t13-snoopy.mp3",
    "호머 심슨": "t14-homer-simpson.mp3",
    "아바타": "t15-avatar.mp3"
};

function textToHex(str) {
    return Buffer.from(str).toString('hex') + '.mp3';
}

function downloadAudio(text, filename) {
    return new Promise((resolve, reject) => {
        const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=ko&client=tw-ob`;
        const dest = path.join(audioDir, filename);

        const file = fs.createWriteStream(dest);
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        }, (res) => {
            if (res.statusCode !== 200) {
                return reject(new Error(`HTTP ${res.statusCode} for ${text}`));
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded: ${text} -> ${filename}`);
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function processAll() {
    console.log("Starting audio renaming and download process...");

    // First: rename existing hex files if present
    for (const [text, newFilename] of Object.entries(audioMap)) {
        const hexFilename = textToHex(text);
        const hexPath = path.join(audioDir, hexFilename);
        const newPath = path.join(audioDir, newFilename);

        if (fs.existsSync(hexPath)) {
            fs.renameSync(hexPath, newPath);
            console.log(`Renamed: ${hexFilename} -> ${newFilename}`);
        } else if (!fs.existsSync(newPath)) {
            // Download if missing
            try {
                await downloadAudio(text, newFilename);
                await new Promise(r => setTimeout(r, 150));
            } catch (err) {
                console.error(`Failed to download ${text}:`, err.message);
            }
        } else {
            console.log(`Already exists: ${newFilename}`);
        }
    }

    // Clean up old hex files if any remain
    const files = fs.readdirSync(audioDir);
    for (const file of files) {
        if (!file.match(/^(c|v|dc|cv|t)\d{2}-.*\.mp3$/)) {
            console.log(`Removing old/unmatched audio file: ${file}`);
            fs.unlinkSync(path.join(audioDir, file));
        }
    }

    console.log("Audio processing complete!");
    fs.writeFileSync(path.join(__dirname, 'audio_map.json'), JSON.stringify(audioMap, null, 2));
}

processAll();
