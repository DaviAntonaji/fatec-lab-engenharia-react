import { useState, useEffect } from "react";
import { sculptureList } from "./data";
import Clock from "./Clock";

function Gallery() {
  let [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  function handleNextClick() {
    setIndex(index + 1);
  }
  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        {index + 1} of {sculptureList.length}
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      <p>{showMore && sculpture.description}</p>
    </div>
  );
}

export default function GalleryAula5() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Gallery />
      <Gallery />
      <Clock time={time.toLocaleTimeString()} />
    </div>
  );
}
