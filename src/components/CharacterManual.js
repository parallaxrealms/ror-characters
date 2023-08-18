import React, { useRef, useEffect } from 'react';
import manualCharacterSheetImage from '../images/RoR_CharacterSheet.png';

const CharacterManual = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Load the background image onto the canvas
    const image = new Image();
    image.src = manualCharacterSheetImage;
    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
  }, []);

  return <canvas ref={canvasRef} width={1125} height={1650} />;
};

export default CharacterManual;