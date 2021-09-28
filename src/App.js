import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import "./App.css";
import News from "./components/News/News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=c580ca7060f54a4da6bd55300c699c39")
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App text-center">
      {news.length === 0 ? (
        <Spinner animation="border" />
      ) : (
        <Row sm={1} xs={1} md={3} className="g-4">
          {news.map((data) => (
            <News data={data}></News>
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;
