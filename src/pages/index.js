import { Inter } from "next/font/google";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { getRandomAlphabet } from "../utils/helper";
import WatermarkedImage from "./WatermarkedImage";
// import watermark from "watermarkjs";

export default function Home() {
  const [logo, setLogo] = useState([]);
  const [blackWight, setBlackWight] = useState(false);
  const [watermarkText, setWatermarkText] = useState("fardap");

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

  // const applyWatermark = () => {};
  const canvasRef = useRef(null);

  useEffect(() => {
    fetchLogo();
  }, []);
  console.log(watermarkText)

  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-3">
      <WatermarkedImage
        imageUrl={logo?.image}
        watermarkText={watermarkText}
        blackWight={blackWight}
      />

      <button className="px-3 py-1 bg-cyan-500 rounded-md" onClick={fetchLogo}>
        reload
      </button>
      <button
        className="px-3 py-1 bg-cyan-500 rounded-md"
        onClick={() => setBlackWight(!blackWight)}
      >
        Blak & Wight
      </button>
      <input
        name="Watermark"
        type="text"
        onChange={(e) => setWatermarkText(e.target.value == '' ? 'fardap' : e.target.value)}
        placeholder="WatermarkText"
        className="p-1 border border-2 rounded-md "
      />
    </main>
  );
}
