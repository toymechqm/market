import PokerHand from "./PokerHand";

const PreviousHands = ({ history = [] }) => {
  return <PokerHand key={history.code} cards={history.hand} />;
};

export default PreviousHands;
