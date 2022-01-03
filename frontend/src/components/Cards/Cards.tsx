import $Cards from "../../styles/Cards/Cards";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

const Cards: React.FC = (): JSX.Element => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api").then((response) => {
      setData(response.data);
    });
  }, []);

  console.log(data);
  return (
    <$Cards>
      {data &&
        data.map((item: { id: number; name: string; description: string }) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              description={item.description}
            />
          );
        })}
    </$Cards>
  );
};

export default Cards;
