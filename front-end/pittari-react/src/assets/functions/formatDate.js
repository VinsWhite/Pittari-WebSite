// funzione per visualizzare la data in maniera leggibile
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();

    // Differenza in millisecondi tra la data attuale e la data del post
    const diffInMilliseconds = now - date;

    // Calcoliamo il tempo trascorso in ore, minuti e giorni
    const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    // Se la data del post è stata meno di un giorno fa
    if (diffInMinutes < 1440) { // 1440 minuti = 1 giorno
        if (diffInMinutes < 60) {
            // meno di un'ora fa
            return `${diffInMinutes} min fa`;
        } else if (diffInMinutes >= 60 ) {
            // tra 1 ora e meno di 2 ore fa
            return `1 ora fa`;
        } else {
            // oltre 1 ora fa
            return `${diffInHours} ore fa`;
        }
    } else if (diffInDays < 7) {
        // se la data del post è stata meno di una settimana fa
        return `${diffInDays} giorni fa`;
    } else {
        // oltre una settimana fa, visualizziamo la data completa
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('it-IT', options);
    }
};

export default formatDate;