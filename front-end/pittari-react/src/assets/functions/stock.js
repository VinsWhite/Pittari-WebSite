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
        '東京は世界でほぼ最も人口が多い都市です'
    ];

    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];

    return randomPhrase;
};

export default stock;
