import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import { getRandomAlphabet } from "../utils/helper";
// import watermark from "watermarkjs";

export default function Home() {
  const [logo, setLogo] = useState([]);
  const [nnn, setNnn] = useState([]);
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
    var ctx = document.createElement("canvas").getContext("2d");
    var img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
      ctx.fillText("COPYRIGHT", 10, 30);
    };
    setNnn(img)
  }, []);
  console.log(nnn)

  // const applyWatermark = () => {
  //   const image = document.getElementById("image"); // Get the image element
  //   watermark([image]) // Pass the image element as an array
  //     .image(
  //       watermark.text.lowerRight(
  //         "Your Watermark Text",
  //         "48px Arial",
  //         "#fff",
  //         0.5
  //       )
  //     ) // Set the watermark text, font, color, and opacity
  //     .then((img) => {
  //       // Replace the original image with the watermarked image
  //       image.src = img.src;
  //     });
  // };

  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-3">
      {/* <div id="lower-right"></div> */}
      <img
        id="image"
        src='{img.src}'
        alt=""
        className={`w-80 ${blackWight ? "grayscale" : null}`}
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
      {/* <button onClick={applyWatermark}>Apply Watermark</button> */}
    </main>
  );
}
