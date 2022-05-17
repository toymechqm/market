import PokerHand from "./PokerHand";

const PreviousHands = ({ history = [] }) => {
  console.log("history", history);
  return <PokerHand key={history.code} cards={history.hand} />;
};

export default PreviousHands;
