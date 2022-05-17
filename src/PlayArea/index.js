import { Fragment, useState } from "react";
import PokerHand from "./PokerHand";
import styled from "styled-components";
import { Hand as HandSolver } from "pokersolver";
import PreviousHands from "./PreviousHands";

const S = {
  PlayContainer: styled.div``,
  HistoricalHand: styled.li`
    display: flex;
    margin: 10px 0;
  `,
  Num: styled.div`
    width: 30px;
  `,
};

const PlayArea = () => {
  const [deckId, setDeckId] = useState(null);
  const [handName, setHandName] = useState(null);
  const [cardHistory, setCardHistory] = useState([]);

  const drawCards = () => {
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`).then(
      (r) =>
        r.json().then((r) => {
          setCardHistory(() => [r.cards].concat(cardHistory));
        })
    );
  };

  const shuffle = () => {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(
      (r) =>
        r.json().then((r) => {
          setDeckId(r.deck_id);
        })
    );
  };

  const solve = () => {
    const cards = cardHistory[0]?.map((c) => c.code);
    const hand = HandSolver.solve(cards);
    setHandName(hand.name);
  };

  return (
    <S.PlayContainer>
      {handName && <marquee>{handName}</marquee>}
      <PokerHand cards={cardHistory[0]} />
      <div>
        <button onClick={shuffle}>Shuffle</button>
        {deckId && (
          <>
            <button onClick={drawCards}>Draw Cards</button>
            <button onClick={solve}>Solve</button>
          </>
        )}
      </div>

      {cardHistory.length > 1 && (
        <ul>
          {cardHistory.slice(1).map((el, i) => (
            <S.HistoricalHand key={i}>
              <S.Num>{i+1}</S.Num>
              <PokerHand cards={el} />
            </S.HistoricalHand>
          ))}
        </ul>
      )}
    </S.PlayContainer>
  );
};

export default PlayArea;
