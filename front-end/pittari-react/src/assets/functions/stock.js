// In questa funzione stampiamo randomicamente dei: consigli, curiosità, frasi random ecc.

const stock = () => {
    const phrases = [
        'このサイトは面白いですね',
        'すごい！',
        '日本は世界で最も自動販売機の密度が高い国です',
        'マッシュルが大好き、、、',
        '日本語で物語がすごい！',
        '桜の季節は、春の花が咲く月です',
        '「日本語でパラパラ」significa essere fluenti in giapponese',
        'お母さんが使ったお弁当がうまい！！',
        '東京は世界でほぼ最も人口が多い都市です',
        '一日に鏡で何回を見りますか？',
        'この世界は難しいです、、、',
        '一、に、三、ありがとう',
        '「鏡」 significa "specchio"',
        '東京にとても楽しみ',
        '「キーボード」significa tastiera e proviene dalla parola inglese keyboard',
        '「こういうサイトが必要です」と思いますか？" '
    ];

    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];

    return randomPhrase;
};

export default stock;
