import $Cards from "../../styles/Cards/Cards";
import Card from "./Card";

const MOCK_DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Cards: React.FC = (): JSX.Element => {
  return (
    <$Cards>
      {MOCK_DATA.map((card) => {
        return <Card key={card} />;
      })}
    </$Cards>
  );
};

export default Cards;
