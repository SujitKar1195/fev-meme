import { useEffect, useState } from "react";
import MemeCard from "../components/Card";
import { getAllMemes } from "../api/Memes";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);
  return (
    <div className="row">
      {data &&
        data.map((meme) => (
          <MemeCard key={meme.id} name={meme.name} url={meme.url} />
        ))}
    </div>
  );
}

export default HomePage;
