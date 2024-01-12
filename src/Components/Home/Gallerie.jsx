import Card from "./Card";
import { useState, useEffect } from "react";

const Gallerie = () => {
  const [Logements, setLogements] = useState([]);

  useEffect(() => {
    fetch("data/logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setLogements(data);
      });
  }, []);

  return (
    <div className="Hebergements">
      {Logements.map((logement, index) => (
        <Card
          key={index}
          imgSource={logement.cover}
          title={logement.title}
          id={logement.id}
        />
      ))}
    </div>
  );
};

export default Gallerie;
