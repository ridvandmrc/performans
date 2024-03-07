import { useEffect, useState } from "react";
import { LargeData } from "./data/data";

import "./app.css";

const INTERVAL = 100;

function App() {
  const [data] = useState(LargeData());
  const [maxIndex, setMaxIndex] = useState(INTERVAL);
  let obs = null;

  useEffect(() => {
    const targetIndex = maxIndex * 0.75;
    obs = new IntersectionObserver(([{ intersectionRatio }]) => {
      if (intersectionRatio > 0) {
        const targetElement = document.getElementById(`item-${targetIndex}`);
        obs.unobserve(targetElement);
        setMaxIndex(() => maxIndex + INTERVAL);
      }
    });
    obs?.observe(document.getElementById(`item-${targetIndex}`));
  }, [maxIndex]);

  return (
    <>
      <h1>Scroll Content</h1>
      <section className="section">
        {data.map(
          (item, index) =>
            index < maxIndex && (
              <div key={item.id} className="item" id={`item-${index + 1}`}>
                <p>
                  {item.id} - {item.desc}
                </p>
              </div>
            )
        )}
      </section>
    </>
  );
}

export default App;
