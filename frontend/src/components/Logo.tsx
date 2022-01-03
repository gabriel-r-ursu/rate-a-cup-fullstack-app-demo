import $Flex from "../styles/shared/Flex";
import LogoImg from "../logo.png";

const Logo: React.FC = (): JSX.Element => {
  return (
    <$Flex>
      <img src={LogoImg} alt="logo" />
      <h1>Rate a cup</h1>
    </$Flex>
  );
};

export default Logo;
