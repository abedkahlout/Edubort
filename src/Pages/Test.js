import React, { useState, useEffect } from 'react';

function Test() {
  const words = ['DEVELOP.', 'PREVIEW.', 'SHIP']; // الكلمات المراد تغيير ألوانها
  const colors = ['#3fc5f0','#3fc5f0' ,'#f12711', '#f5af19', ]; // ألوان الكلمات

  const [wordIndex, setWordIndex] = useState(0); // حالة كلمة معينة

  useEffect(() => {
    const intervalId = setInterval(() => {
      setWordIndex((wordIndex) => (wordIndex + 1) % words.length); // تغيير حالة الكلمة
    }, 2000);
    return () => clearInterval(intervalId);
  }, []); // تشغيل مرة واحدة عند التحميل

  return (
    <div className="App">
      <h1 className="hero-text">
        {words.map((word, index) => {
          const gradient = `linear-gradient(to right, ${colors.slice(index, index+2).join(',')})`;
          const style = {
            background: `-webkit-linear-gradient(left, ${colors.slice(index, index+2).join(',')})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundImage: gradient,
            backgroundClip: 'text',
          };
          return (
            <span key={index} style={index === wordIndex ? style : {}}>
              {word}
            </span>
          )
        })}
      </h1>
    </div>
  );
}

export default Test;
