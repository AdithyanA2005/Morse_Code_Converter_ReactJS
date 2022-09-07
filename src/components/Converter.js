import React, { useState } from "react";
import styled from "styled-components";
import { letterToMorse, morseToLetter } from "../morse_values";

function Converter() {
  const [isToMorse, setIsToMorse] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const convertTextToMorseCode = (textString) => {
    // Variable to store the entire textString converted to morse code
    let morseCodeString = "";

    for (let char of textString) {
      // Variable to store the converted morse code of each letter
      const morse = letterToMorse[char.toUpperCase()];

      // Show a alert if user enter a non alphanumeric character
      if (morse === undefined) {
        alert("Only alphabets and numbers are allowed");
        setInputValue(textString.slice(0, -1));
        return;
      }

      // Add morse code of each letter with a space to the morseCodeString
      morseCodeString += morse + " ";
    }

    // Finally set the morse code as the output
    setOutputValue(morseCodeString);
  };
  const convertMorseCodeToText = (morseString) => {
    // Variable to store the entire morseString converted to normal text
    let textString = "";

    for (let char of morseString.split(" ")) {
      // Variable to store the converted letter of each morse code
      let letter = morseToLetter[char];

      // Show a alert if user enter morse code a non alphanumeric character
      if (letter == undefined) {
        if (char === "" || char === " ") return;
        letter = "❌";
      }

      // Add the letter of each morse code to a textString
      textString += letter;
    }

    // Finally store the textString as the output
    setOutputValue(textString);
  };

  const handleDeciderClick = () => {
    setIsToMorse((prev) => !prev);
    setInputValue("");
    setOutputValue("");
  };
  const handleInputValueChange = (e) => {
    setInputValue(e.target.value);
    if (isToMorse) convertTextToMorseCode(e.target.value);
    else convertMorseCodeToText(e.target.value);
  };

  const ArrowSvg = () => (
    <svg
      style={{ width: "20px", color: "#f1faee", maxHeight: "20px" }}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" />
    </svg>
  );

  return (
    <>
      <Wrapper>
        <DeciderContainer>
          <Decider onClick={handleDeciderClick}>
            <DeciderOpt>{isToMorse ? "Text" : "Morse"}</DeciderOpt>
            <ArrowSvg />
            <DeciderOpt>{isToMorse ? "Morse" : "Text"}</DeciderOpt>
          </Decider>
        </DeciderContainer>

        <MainContainer>
          <Input onChange={handleInputValueChange} value={inputValue} placeholder="Enter Your Text Here" />

          {inputValue && (
            <>
              <OutputTitle>Your {isToMorse ? "Morse Code" : "Normal Text"}</OutputTitle>

              <Output>{outputValue}</Output>
            </>
          )}
        </MainContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  align-items: center;
  border-radius: 15px;
  border: 2px solid #a8dadc;
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  width: 90%;
`;
const DeciderContainer = styled.div`
  align-items: center;
  border-bottom: 2px solid #a8dadc;
  display: flex;
  justify-content: center;
  width: 100%;
`;
const Decider = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  max-width: 20rem;
  outline: 0;
  padding: 1rem;
  width: 100%;
`;
const DeciderOpt = styled.h2`
  color: #a8dadc;
  font-size: 1.5rem;
  font-weight: 500;
  width: 5rem;
`;
const MainContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 1rem;
  width: 100%;
`;
const Input = styled.textarea`
  background-color: transparent;
  border: 2px solid #a8dadc;
  border-radius: 7px;
  color: #f1faee;
  flex-grow: 1;
  font-size: 1.1rem;
  height: 7rem;
  min-width: 7rem;
  max-width: 35rem;
  outline: none;
  padding: 1rem 0.5rem;
  text-align: center;
  width: 100%;
`;
const OutputTitle = styled.h3`
  margin-top: 1.5rem;
  text-align: center;
  color: #f1faee;
`;
const Output = styled.p`
  background-color: #457b9d;
  border-radius: 10px;
  color: #f1faee;
  font-size: 1.3rem;
  letter-spacing: 0.8px;
  line-height: 1.3;
  margin-top: 0.5rem;
  padding: 1rem;
`;

export default Converter;
