import React, { useEffect, useState } from "react";
import "../styles/items.css";

export default function Items() {
  const items = [
    "A full-stack developer,",
    "AI & ML developer,",
    "Mobile app developer,",
    "Rustacean,",
    "Gopher,",
    "Pythonista,",
    "Physics researcher,",
    "Blender 3D fanboy,",
    "Music enthuthiast",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const anim = setInterval(() => {
      if (current + 1 >= items.length) {
        setCurrent(0);
      } else {
        setCurrent((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(anim);
  }, [current, items.length]);

  return (
    <div>
      {items.map((item, index) => {
        return (
          <h2
            key={index}
            className={`text-5xl text-transparent bg-gradient-to-r  bg-clip-text font-bold !leading-snug transition-all ${
              current === index ? `animatedText block` : "hidden"
            } ${
              index % 2 === 0
                ? "from-red-400 to-green-500 via-yellow-400"
                : "from-purple-400 to-teal-500 via-cyan-400"
            }`}
          >
            {item}
          </h2>
        );
      })}
    </div>
  );
}
