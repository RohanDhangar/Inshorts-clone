import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import NavInshort from "./Components/NavInshort";
import NewsContent from "./NewsComponents/NewsContent";
import Footer from "./Components/Footer/Footer";
import REACT_API_KEY from "./data/vonfig";

function App() {
  const [category, setcategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadmore, setloadmore] = useState(20);

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"
      const news = await axios.get(`
      ${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${REACT_API_KEY}&pageSize=${loadmore}`);

      setNewsArray(news.data.articles);
      setnewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category, loadmore]);

  return (
    <div className="App">
      <NavInshort setcategory={setcategory} />

      <NewsContent
        setloadmore={setloadmore}
        loadmore={loadmore}
        newsArray={newsArray}
        newsResults={newsResults}
      />

      <Footer />
    </div>
  );
}

export default App;
