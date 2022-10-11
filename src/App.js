import React, { useState } from "react";
import Container from "./components/Container";
import Screen from "./components/Screen";
import Display1 from "./components/Display1";
import Display2 from "./components/Display2";
import ButtonContainer from "./components/ButtonContainer";
import Button from "./components/Button";

function App() {
  // Set States. Input for Display2, Result for Display1
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  // OnClick handler for input
  const handleOnClick = (e) => {
    setInput(input + e.target.value);
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
    setResult(result);
  };

  return (
    <section>
      <Container>
        <h1>Emmanuel's Calculator</h1>
        <Screen>
          <Display1 value={result}></Display1>
          <Display2 value={input}></Display2>
        </Screen>
        <ButtonContainer>
          <div className="button-row">
            {/* "&#247;" */}
            {/* "&#215;" */}
            <Button onClick={cancel} value={"AC"} id={"ac"} label={"AC"} />
            <Button onClick={dlt} value="&larr;" label="&larr;" />
            <Button onClick={perc} value={"%"} label={"%"} />
            <Button onClick={handleOnClick} value={"/"} label={"/"} />
            <Button onClick={handleOnClick} value={"9"} label={"7"} />
            <Button onClick={handleOnClick} value={"8"} label={"8"} />
            <Button onClick={handleOnClick} value={"9"} label={"9"} />
            <Button onClick={handleOnClick} value={"*"} label={"*"} />
            <Button onClick={handleOnClick} value={"4"} label={"4"} />
            <Button onClick={handleOnClick} value={"5"} label={"5"} />
            <Button onClick={handleOnClick} value={"6"} label={"6"} />
            <Button onClick={handleOnClick} value={"-"} label={"-"} />
            <Button onClick={handleOnClick} value={"1"} label={"1"} />
            <Button onClick={handleOnClick} value={"2"} label={"2"} />
            <Button onClick={handleOnClick} value={"3"} label={"3"} />
            <Button onClick={handleOnClick} value={"+"} label={"+"} />
            <Button onClick={handleOnClick} value={"00"} label={"00"} />
            <Button onClick={handleOnClick} value={"0"} label={"0"} />
            <Button onClick={handleOnClick} value={"."} label={"."} />
            <Button onClick={evaluate} value={"="} id={"equals"} label={"="} />
          </div>
        </ButtonContainer>
      </Container>
    </section>
  );
}

export default App;
