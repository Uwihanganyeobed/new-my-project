import React, { useState } from "react";

export default function Toogle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <button
      className="bg-cyan-600 text-white"
       onClick={() => setIsOn(!isOn)}>
        {isOn ? "ON" : "OFF"}</button>
    </div>
  );
}
