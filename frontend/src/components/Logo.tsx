import $Flex from "../styles/shared/Flex";
import LogoImg from "../assets/img/logo.png";

const Logo: React.FC = (): JSX.Element => {
  return (
    <$Flex>
      <img src={LogoImg} alt="image logo" />
      <h1>Rate a cup</h1>
    </$Flex>
  );
};

export default Logo;
