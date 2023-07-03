import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [images, setImages] = useState([]);

  const fetchImg = async () => {
    const axios = require("axios");

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.api-ninjas.com/v1/logo?name=m`,
      headers: {
        "X-Api-Key": "lgm57ELpNWDJI5xXgQC7Ig==2G3w2wbNH9Kjhqap",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setImages(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchImg();
  }, [setImages]);
  console.log(images);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {/* <Image src={} alt='' /> */}
    </main>
  );
}
