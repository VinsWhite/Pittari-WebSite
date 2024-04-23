import axios from "../axios";

const fetchArticles = async (dispatch) => {
    try {
      const response = await axios.get('/articles');
      dispatch(setArticles(response.data)); 
      sessionStorage.setItem('articles', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error('Errore durante il recupero degli articoli:', error);
      throw error; 
    }
};

export default fetchArticles;