import React, { useEffect, useRef } from "react";
import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);

  const [password, setPassword] = useState("");

  // ref hook

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 9);
    window.navigator.clipboard.writeText(password)
  }, [password])

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()[]{}`~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllow, charAllow, passwordGenerator])

  return (
    <>
      <h1 className="text-4xl text-center text-white">Password Generator</h1>

      <div className="w-full max-w-md text-center mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-500">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 rounded-md"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button 
        className="flex text-sm gap-x-2"
        onClick={copyPassword}
        >Copy</button>
        <div>
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex flex-row gap-1">
          <input
            type="checkbox"
            defaultChecked={numAllow}
            id="numberInput"
            onChange={() => {
              setNumAllow((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
          <input
            type="checkbox"
            defaultChecked={charAllow}
            id="charInput"
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
