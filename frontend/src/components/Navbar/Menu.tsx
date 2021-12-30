import $Menu from "../../styles/Navbar/Menu";

const Menu: React.FC = (): JSX.Element => {
  return (
    <$Menu>
      <button>Add Cup</button>
      <button>Favorite Cups</button>
      <button>All Cups</button>
    </$Menu>
  );
};

export default Menu;
