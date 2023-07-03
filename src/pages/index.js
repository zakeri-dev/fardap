import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from 'axios'
import { getRandomAlphabet } from "../utils/helper";

export default function Home() {
  const [logo, setLogo] = useState([]);
  const [blackWight, setBlackWight] = useState(false);

  const fetchLogo = async () => {
    let randomChar = getRandomAlphabet();

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.api-ninjas.com/v1/logo?name=${randomChar}`,
      headers: {
        "X-Api-Key": "lgm57ELpNWDJI5xXgQC7Ig==2G3w2wbNH9Kjhqap",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setLogo(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchLogo();
  }, []);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-3">
      <img src={logo?.image} alt="" className={`w-80 ${blackWight? 'grayscale' : null}`} />
      <button className="px-3 py-1 bg-cyan-500 rounded-md" onClick={fetchLogo}>
        reload
      </button>
      <button className="px-3 py-1 bg-cyan-500 rounded-md" onClick={()=>setBlackWight(!blackWight)}>
        Blak & Wight
      </button>
    </main>
  );
}
