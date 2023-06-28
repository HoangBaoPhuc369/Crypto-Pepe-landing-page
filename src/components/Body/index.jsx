import { useQuery } from "react-query";
import "./style.css";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

/* eslint-disable react/no-unescaped-entities */
const Body = () => {
  const [inputValue, setInputValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const qGetValue = useQuery("defaultValue", async () => {
    try {
      const response = await axios.get("https://cryptopepe.onrender.com");
      setInputValue(response.data);
      return response.data;
    } catch (error) {
      toast.error("Network response was not ok!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  });
  return (
    <div className="main">
      <div className="content">
        <h1>Who We Are</h1>
        <p>
          Welcome to PEPE 3.0🚀where we dive into the wild world of crypto with
          the power of memes 🔥 We're all about teamwork, sharing the LOLs, and
          pushing the boundaries of innovation in this meme-tastic domain. Get
          ready to unlock some crypto magic, make your friends go WOW, and ride
          the crypto rollercoaster like a boss! Let's PEPE 3.0 the meme-powered
          crypto madness!💥🚀
        </p>
        <h1>What is $PEPE3.0?</h1>
        <p>
          $PEPE3.0 - The one and only coin ruling the Memes community! 🌟
          #PEPE3.0 Launch creates a new era of development of the #MEME space
          Protecting decentralization and fairness Preventing blacklisted🚀 Get
          ready to its true potential, fellow members! We're cooking up some
          mind-blowing use cases that will blow your socks off! 🧦✨ So hold
          tight, stay tuned, and let's make $PEPE3.0 the ultimate power move
          within our! Together, we'll create a crypto revolution like no other!
        </p>
        <h2>Tokenomics</h2>
        <p>Token Name: PEPE 3.0</p>
        <p>Token Symbol: PEPE 3.0</p>
        <p>Token Chain: ERC-20</p>
        <p>Max Supply: 420,690,000,000,000</p>
        <p>Tax Buy: 0</p>
        <p>Tax Sell: 0</p>
        <h2>Contract</h2>
        <p>Official contract address is: {inputValue}</p>
      </div>
    </div>
  );
};

export default Body;
