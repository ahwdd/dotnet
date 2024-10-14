import { useEffect, useState } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

function SentencesAnimation({ sentences = [], timing = 4000 }) {
  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    const splitTypes = document.querySelectorAll('.sentence');
    splitTypes.forEach((word, i) => {
      const text = new SplitType(word, { types: 'words' });

      gsap.from(text.words, {
        duration: 2,
        y: 50,
        opacity: 0,
        color: 'black',
        stagger: 0.2,
        repeat: -1,
        // repeatDelay: 2 * i,
        delay: 2
      });
    });

    const interval = setInterval(() => {
      setCurrentSentence((prevIndex) => {
        if (prevIndex >= sentences.length - 1) return 0;
        else return prevIndex + 1;
      });
    }, timing);

    return () => clearInterval(interval);
  }, [sentences, timing]);

  return (
    <div className='sentences text-white text-lg space-y-10 max-h-14 overflow-hidden'>
      {sentences.map((sentence, i) => (
        <p key={i} className={`sentence animate-slide-up text-center ${i === currentSentence ? 'opacity-100' : 'opacity-0'}`}>
          {sentence}
        </p>
      ))}
    </div>
  );
}

export default SentencesAnimation;
