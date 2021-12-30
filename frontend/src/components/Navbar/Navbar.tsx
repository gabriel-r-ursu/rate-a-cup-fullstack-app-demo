import $Navbar from "../../styles/Navbar/Navbar";

import Login from "./Login";
import Menu from "./Menu";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <$Navbar>
      <Menu />
      <Login />
    </$Navbar>
  );
};

export default Navbar;
