import React, { useRef } from "react";

export default function Reference() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };

  /*
    useRef is a React hook that gives you a mutable object with a .current property.
Unlike useState, changing .current does NOT cause a re-render.
Most commonly, it’s used to directly access DOM elements (like focusing an input field).
*/
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Me</button>
    </div>
  );
}
