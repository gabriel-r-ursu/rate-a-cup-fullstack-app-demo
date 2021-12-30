import $Card from "../../styles/Cards/Card";
import $ImageContainer from "../../styles/Cards/ImageContainer";
import $Buttons from "../../styles/Cards/Buttons";
import $Span from "../../styles/shared/Span";
import LogoImg from "../../assets/img/logo.png";

const Card: React.FC = (): JSX.Element => {
  return (
    <$Card>
      <$ImageContainer>
        <img src={LogoImg} alt="" />
      </$ImageContainer>

      <$Span>This is a place for a short description for the cup above.</$Span>
      <$Buttons>
        <button>
          Like cup btn &nbsp;
          <span className="likeNumber">5</span>
        </button>
        <button>&#9734;</button>
        <button>
          Dislike cup btn &nbsp;
          <span className="dislikeNumber">1</span>
        </button>
      </$Buttons>
      <button>Remove cup btn</button>
    </$Card>
  );
};

export default Card;
