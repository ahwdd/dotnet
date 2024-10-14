import { useState } from 'react';

const AnimatedCharacter = ({mood='happy'}) => {
  const [isSad, setIsSad] = useState(mood!='happy');

  const toggleMood = () => {
    setIsSad(!isSad);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`relative w-24 bg-red-500 flex items-center justify-center rounded-xl transition-all duration-1000 
        ${isSad ? 'h-20 mt-4 anime-face-sad' : 'h-24 anime-face-happy'}`} id="character">
        <div className={`w-1/2 z-10 mx-auto border-solid border-4 relative border-white transition-all duration-1000
        ${isSad?'h-5 face-sad mt-10 before:h-2 after:h-2 before:-top-4 after:-top-4'
        :'h-7 face-happy mt-10 before:h-6 after:h-6 before:-top-8 after:-top-8 bg-white'}`}/>
      </div>
    </div>
  );
};

export default AnimatedCharacter;
