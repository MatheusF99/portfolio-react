import React, { useEffect, useRef } from 'react';
import './cursorEffect.css'

// import { Container } from './styles';

const CursorEffect = () => {

  const cursorRef = useRef<any>(null)

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;

      cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`

    })
  }, [])

  return <div className="cursor" ref={cursorRef} />;
}

export default CursorEffect;