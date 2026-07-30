const fs = require('fs');
const path = require('path');
const https = require('https');

const audioDir = path.join(__dirname, '..', 'assets', 'audio');

// Subdirectories requested by user
const subdirs = ['consonant', 'vowels', 'double_consonant', 'compound_vowels', 'training'];
subdirs.forEach(sd => {
    const p = path.join(audioDir, sd);
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
});

// Map of spoken text / character to subfolder audio filename
const audioMap = {
    // Consonants (c01 to c14) -> consonant/
    "ㄱ": "consonant/c01-gieuk.mp3",
    "ㄴ": "consonant/c02-nieun.mp3",
    "ㄷ": "consonant/c03-dieut.mp3",
    "ㄹ": "consonant/c04-rieul.mp3",
    "ㅁ": "consonant/c05-mieum.mp3",
    "ㅂ": "consonant/c06-bieup.mp3",
    "ㅅ": "consonant/c07-sieut.mp3",
    "ㅇ": "consonant/c08-ieung.mp3",
    "ㅈ": "consonant/c09-jieut.mp3",
    "ㅊ": "consonant/c10-chieut.mp3",
    "ㅋ": "consonant/c11-kieuk.mp3",
    "ㅌ": "consonant/c12-tieut.mp3",
    "ㅍ": "consonant/c13-pieup.mp3",
    "ㅎ": "consonant/c14-hieut.mp3",

    // Vowels (v01 to v10) -> vowels/
    "ㅣ": "vowels/v01-i.mp3",
    "ㅏ": "vowels/v02-a.mp3",
    "ㅑ": "vowels/v03-ya.mp3",
    "ㅓ": "vowels/v04-eo.mp3",
    "ㅕ": "vowels/v05-yeo.mp3",
    "ㅡ": "vowels/v06-eu.mp3",
    "ㅗ": "vowels/v07-o.mp3",
    "ㅛ": "vowels/v08-yo.mp3",
    "ㅜ": "vowels/v09-u.mp3",
    "ㅠ": "vowels/v10-yu.mp3",

    // Double Consonants (dc01 to dc05) -> double_consonant/
    "ㄲ": "double_consonant/dc01-ssang-gieuk.mp3",
    "ㄸ": "double_consonant/dc02-ssang-dieut.mp3",
    "ㅃ": "double_consonant/dc03-ssang-bieup.mp3",
    "ㅆ": "double_consonant/dc04-ssang-sieut.mp3",
    "ㅉ": "double_consonant/dc05-ssang-jieut.mp3",

    // Compound Vowels (cv01 to cv11) -> compound_vowels/
    "ㅐ": "compound_vowels/cv01-ae.mp3",
    "ㅒ": "compound_vowels/cv02-yae.mp3",
    "ㅔ": "compound_vowels/cv03-e.mp3",
    "ㅖ": "compound_vowels/cv04-ye.mp3",
    "ㅘ": "compound_vowels/cv05-wa.mp3",
    "ㅙ": "compound_vowels/cv06-wae.mp3",
    "ㅚ": "compound_vowels/cv07-oe.mp3",
    "ㅝ": "compound_vowels/cv08-weo.mp3",
    "ㅞ": "compound_vowels/cv09-we.mp3",
    "ㅟ": "compound_vowels/cv10-wi.mp3",
    "ㅢ": "compound_vowels/cv11-ui.mp3",

    // Pop-Culture Training Words (t01 to t15) -> training/
    "배트맨": "training/t01-batman.mp3",
    "마리오": "training/t02-mario.mp3",
    "해리 포터": "training/t03-harry-potter.mp3",
    "타이타닉": "training/t04-titanic.mp3",
    "토토로": "training/t05-totoro.mp3",
    "슈퍼맨": "training/t06-superman.mp3",
    "피카츄": "training/t07-pikachu.mp3",
    "디즈니": "training/t08-disney.mp3",
    "스타워즈": "training/t09-star-wars.mp3",
    "셜록": "training/t10-sherlock.mp3",
    "스파이더맨": "training/t11-spiderman.mp3",
    "매트릭스": "training/t12-matrix.mp3",
    "스누피": "training/t13-snoopy.mp3",
    "호머 심슨": "training/t14-homer-simpson.mp3",
    "아바타": "training/t15-avatar.mp3"
};

async function processAll() {
    console.log("Organizing audio files into subfolders...");

    for (const [text, targetRelPath] of Object.entries(audioMap)) {
        const fileName = path.basename(targetRelPath);
        const oldPath = path.join(audioDir, fileName);
        const newPath = path.join(audioDir, targetRelPath);

        if (fs.existsSync(oldPath)) {
            fs.renameSync(oldPath, newPath);
            console.log(`Moved: ${fileName} -> ${targetRelPath}`);
        } else if (fs.existsSync(newPath)) {
            console.log(`Already in subfolder: ${targetRelPath}`);
        } else {
            console.warn(`File missing: ${targetRelPath}`);
        }
    }

    console.log("Audio organization complete!");
    fs.writeFileSync(path.join(__dirname, 'audio_map.json'), JSON.stringify(audioMap, null, 2));
}

processAll();
