import { useState } from "react";
import Result from "./Result";

const Home = () => {
  const [data, setData] = useState({
    price: "",
    gram: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const handleReset = () => {
    setData({ price: "", gram: "" });
    setResult(null);
  };
  const CalculatePrice = (price, gram) => {
    if (price && gram) {
      const pricePerGram = price / 1000;
      const totalPrice = pricePerGram * gram;
      const calculatedPrice = totalPrice.toFixed(2);
      setResult(calculatedPrice);
    } else {
      setResult(null);
    }
  };

  return (
    <section className="px-8 mt-15">
      <div className="dark:text-white px-11 py-6">
        <div className="flex flex-col gap-3 justify-center items-center">
          <div className="flex flex-col w-full gap-2 mb-1">
            <label htmlFor="price">Enter Price per Kg</label>
            <input
              onChange={handleChange}
              value={data.price}
              type="number"
              name="price"
              placeholder="Enter Price per Kg"
              className="rounded-lg px-3 h-10 w-full bg-zinc-200 text-black"
            />
          </div>

          <div className="flex flex-col w-full gap-2 mb-1 ">
            <label htmlFor="grams">Enter total grams</label>
            <input
              onChange={handleChange}
              value={data.gram}
              type="number"
              name="gram"
              placeholder="Enter total grams"
              className="rounded-lg px-3 h-10 w-full bg-zinc-200 text-black"
            />
          </div>
          <div className="flex gap-2 ">
            <button
              className=" mt-4 border border-white rounded-lg w-36 h-11 bg-green-500 font-bold "
              onClick={() => CalculatePrice(data.price, data.gram)}
            >
              Calculate
            </button>
            <button
              className=" mt-4 border border-white rounded-lg w-36 h-11 bg-red-400 font-bold "
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <Result result={result} />
    </section>
  );
};

export default Home;
