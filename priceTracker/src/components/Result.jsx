const Result = ({ result = "50" }) => {
  return (
    <div className="dark:text-white mt-11">
      {result ? (
        <div className="text-center">
          <div className="font-semibold  text-2xl">{`Your total price is`}</div>
          <p className="font-bold  text-4xl mt-3">{`Rs. ${result}`}</p>
        </div>
      ) : (
        <div>Type something to get your price.</div>
      )}
    </div>
  );
};

export default Result;
