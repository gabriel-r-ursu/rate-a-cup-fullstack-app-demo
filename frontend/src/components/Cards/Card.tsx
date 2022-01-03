import $Card from "../../styles/Cards/Card";
import $ImageContainer from "../../styles/Cards/ImageContainer";
import $Buttons from "../../styles/Cards/Buttons";
import $Span from "../../styles/shared/Span";
import LogoImg from "../../logo.png";
import CardInterface from "../../interfaces/CardInterface";

const Card: React.FC<CardInterface> = (props): JSX.Element => {
  return (
    <$Card>
      <$ImageContainer>
        <img src={LogoImg} alt="" />
      </$ImageContainer>

      <$Span>{props.name}</$Span>
      <$Span>{props.description}</$Span>
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
