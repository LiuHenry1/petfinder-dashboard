const Stat = ({ type, value }) => {
  return (
    <div className="stat">
      <h4>{type}</h4>
      <h5>{value}</h5>
    </div>
  );
};

export default Stat;
