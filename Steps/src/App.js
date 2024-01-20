import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    // First Variant
    // setStep(step - 1);
    // Second Varian - best practice
    setStep((step) => step - 1);
  }

  function handleNext() {
    setStep((step) => step + 1);
  }

  function openOrNot() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen ? (
        <button className="close" onClick={openOrNot}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      ) : (
        <button className="open" onClick={openOrNot}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      )}

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              // style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              style={
                step === 1
                  ? {
                      backgroundColor: "#ffff",
                      color: "black",
                      textDecoration: "line-through",
                    }
                  : { backgroundColor: "#7950f2", color: "#fff" }
              }
              // We disable the button when the step its 1
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              style={
                step === 3
                  ? {
                      backgroundColor: "#ffff",
                      color: "black",
                      textDecoration: "line-through",
                    }
                  : { backgroundColor: "#7950f2", color: "#fff" }
              }
              onClick={handleNext}
              disabled={step === 3}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
