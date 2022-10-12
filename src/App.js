import React, { useState } from "react";
import Container from "./components/Container";
import Screen from "./components/Screen";
import Display1 from "./components/Display1";
import Display2 from "./components/Display2";
import ButtonContainer from "./components/ButtonContainer";
import Button from "./components/Button";
import Google from "./components/Google";

function App() {
  // Set States. Input for Display2, Result for Display1
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // OnClick handler for input
  const handleOnClick = (e) => {
    setInput(input + e.target.name);
  };

  // Function for delete button
  const dlt = () => {
    try {
      setInput(input.slice(0, -1));
    } catch (error) {}
  };

  // Function for equal to button
  const evaluate = () => {
    try {
      // eslint-disable-next-line
      setResult(eval(input));
    } catch (error) {}
  };

  // Function for AC button
  const cancel = () => {
    setInput("");
    setResult("");
  };

  // Function for percentage
  const perc = () => {
    setInput(input / 100);
  };

  // Function for cuberoot
  const cuberoot = () => {
    setInput(input ** (1 / 2));
  };

  // Function for squareroot
  const squareroot = () => {
    setInput(input ** (1 / 2));
  };

  // Function for inverse
  const inverse = () => {
    setInput(input ** -1);
  };

  return (
    <section>
      
      <Container>
        <h1>Emmanuel's Calculator</h1>
        <Screen>
          <Display1 value={result} />
          <Display2 value={input} />
        </Screen>
        <Google/>
        <ButtonContainer>
          <div className="button-row">
            <Button onClick={cuberoot} name="&#8731;" label="&#8731;" />
            <Button onClick={squareroot} name="&#8730;" label="&#8730;" />
            <Button onClick={inverse} name="&#8543;" label="&#8543;" />
            <Button onClick={handleOnClick} name="**" label="&#94;" />
            <Button onClick={cancel} name={"AC"} id={"ac"} label={"AC"} />
            <Button onClick={dlt} name="&larr;" label="&larr;" />
            <Button onClick={perc} name={"%"} label={"%"} />
            <Button onClick={handleOnClick} name={"/"} label="&#247;" />
            <Button onClick={handleOnClick} name={"7"} label={"7"} />
            <Button onClick={handleOnClick} name={"8"} label={"8"} />
            <Button onClick={handleOnClick} name={"9"} label={"9"} />
            <Button onClick={handleOnClick} name={"*"} label="&#215;" />
            <Button onClick={handleOnClick} name={"4"} label={"4"} />
            <Button onClick={handleOnClick} name={"5"} label={"5"} />
            <Button onClick={handleOnClick} name={"6"} label={"6"} />
            <Button onClick={handleOnClick} name={"-"} label={"-"} />
            <Button onClick={handleOnClick} name={"1"} label={"1"} />
            <Button onClick={handleOnClick} name={"2"} label={"2"} />
            <Button onClick={handleOnClick} name={"3"} label={"3"} />
            <Button onClick={handleOnClick} name={"+"} label={"+"} />
            <Button onClick={handleOnClick} name={"00"} label={"00"} />
            <Button onClick={handleOnClick} name={"0"} label={"0"} />
            <Button onClick={handleOnClick} name={"."} label={"."} />
            <Button onClick={evaluate} name={"="} id={"equals"} label={"="} />
          </div>
        </ButtonContainer>
      </Container>
    </section>
  );
}

export default App;
