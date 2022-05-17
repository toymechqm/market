const PokerHand = ({ cards }) => {
  return (
    <div>
      {cards?.map((c) => (
        <img width={70} key={c.code} src={c.image} alt={c.code} />
      ))}
    </div>
  );
};

export default PokerHand;
