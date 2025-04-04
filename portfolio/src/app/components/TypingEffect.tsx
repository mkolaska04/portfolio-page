import { useEffect, useState, useMemo } from "react";

const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isErasing, setIsErasing] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const textArray = useMemo(() => ["Frontend Developer", "UIX Designer"], []);
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenWords = 2000;

  useEffect(() => {
    let timer;

    if (isErasing) {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, erasingSpeed);
      } else {
        setIsErasing(false);
        setWordIndex((prev) => (prev + 1) % textArray.length);
        timer = setTimeout(() => {
          setCharIndex(0);
        }, 500);
      }
    } else {
      if (charIndex < textArray[wordIndex].length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev + textArray[wordIndex][charIndex]);
          setCharIndex(charIndex + 1);
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsErasing(true);
        }, delayBetweenWords);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isErasing, textArray, wordIndex]);

  return (
    <div className="typing-effect ">
      <h1 className="text-4xl flex justify-center items-center">
        <span className="hidden">placeholder</span><span>{displayedText}</span>
      </h1>
    </div>
  );
};

export default TypingEffect;
