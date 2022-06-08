import React, { useRef, useState, useEffect } from 'react';

const Image = ({ urls: { regular }, alt_description: description }) => {
  // const [span, setSpan] = useState(0);
  // const imgRef = useRef;
  // useEffect(() => {
  //   window.addEventListener('load', spanCalc);
  //   return () => {
  //     window.removeEventListener('load', spanCalc);
  //   };
  // }, []);

  // const spanCalc = () => {
  //   const height = imgRef.current.clientHeight;
  //   const calc = Math.ceil(height / 150);
  //   setSpan(calc);
  // };
  const [spanCount, setSpanCount] = useState(0);
  const imgRef = useRef(null);
  useEffect(() => {
    window.addEventListener('load', calcSpan);
    return () => {
      window.removeEventListener('load', calcSpan);
    };
  }, []);
  const calcSpan = () => {
    const height = imgRef.current.clientHeight;
    const span = Math.ceil(height / 200);
    setSpanCount(span);
  };
  return (
    <div style={{ gridRowEnd: `span ${spanCount}` }} className="imgs">
      <img ref={imgRef} src={regular} alt={description} />
    </div>
  );
};

export default Image;
