import React, { useEffect, useRef } from "react";

const WatermarkedImage = ({ imageUrl, watermarkText, blackWight }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image
      ctx.drawImage(img, 0, 0);

      // Set the font and text style for the watermark
      ctx.font = "5rem Arial";
      ctx.fillStyle = "#9ca3af";
      ctx.textAlign = "center";

      // Position the watermark at the bottom of the image
      const textX = canvas.width / 2;
      const textY = canvas.height / 2;

      // Draw the watermark text
      ctx.fillText(watermarkText, textX, textY);
    };
  }, [imageUrl, watermarkText]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-2/3 ${blackWight ? "grayscale" : null}`}
    />
  );
};

export default WatermarkedImage;
