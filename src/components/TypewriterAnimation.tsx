import { useState, useEffect } from 'react';

const TypewriterAnimation = () => {
  const words = ['Transparency', 'Fast', 'Global', 'Inclusion'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 0 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (charIndex < currentWord.length) {
          setCurrentText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Finished typing, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting phase
        if (charIndex > 0) {
          setCurrentText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-accent font-light">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypewriterAnimation;