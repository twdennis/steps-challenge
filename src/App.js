import { useState } from "react";
import { Button } from "./Button";
import { StepMessage } from "./StepMessage";
import { OpenCloseBtn } from "./openCloseBtn";
import { messages } from "./messages";

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((currentStep) => currentStep - 1);
  }

  function handleNext() {
    if (step < 3) setStep((currentStep) => currentStep + 1);
  }

  function handleOpenCLose() {
    setIsOpen((openStatus) => !openStatus);
  }

  function nextBtnColor() {
    return step === 3
      ? { backgroundColor: "grey", color: "darkgray" }
      : { backgroundColor: "#7950f2", color: "#fff" };
  }

  function prevBtnColor() {
    return step === 1
      ? { backgroundColor: "grey", color: "darkgray" }
      : { backgroundColor: "#7950f2", color: "#fff" };
  }

  return (
    <div>
      <OpenCloseBtn isOpen={isOpen} onClick={handleOpenCLose} />
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button onClick={handlePrevious} btnColor={prevBtnColor()}>
              <span>◀</span> Previous
            </Button>
            <Button onClick={handleNext} btnColor={nextBtnColor()}>
              Next<span>▶</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
