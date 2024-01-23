///////// FORMA STATICA ////////
/*
function App() {
  const data = ["aprende react 😎", "Aprende JavaScript 😎", "Aprende CSS 😎"];
  const step = 1;
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">
      Número de mensaje: {step} : {data[step -1]}
      </p>
      <div className="buttons">
        <button style={{ backgroundColor: "#7950f2", color: "#fff"}}>
          Previous
        </button>
        <button style={{ backgroundColor: "#7950f2", color: "#fff"}}>
          Next
        </button>
      </div>
    </div>
  );
}
*/

import { useState } from "react";

//////////// FORMA DINÁMICA ////////////////

function App() {
  // const step = 1;
  const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "Roro"});
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious(){
    // alert("previous");
    if (step > 1) setStep(step - 1);
    setTest ({ name: "Anne"});
  }
  
  function handleNext(){
    // alert("next");
    if (step < 3) setStep(step + 1);
    setTest ({ name: "Fred"});
  }
  const data = ["aprende react 😎", "Aprende JavaScript 😎", "Aprende CSS 😎"];
  
  function handleOpen(){
    setIsOpen((state) => !state);
  }

  return (
    <>
      {/* <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button> */}
      <button className="close" onClick={handleOpen}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          {/* <p className="message">
          Número de mensaje: {step} : {data[step -1]} {test.name}
          </p> */}
          <StepMessage className="message">
          <h2>Número de mensaje: {step} :</h2> {data[step -1]} <h1>{test.name}</h1>
          </StepMessage>
          <div className="buttons">
            <Button 
              style={{ backgroundColor: "#7950f2", color: "#fff"}} 
              onClick = {handlePrevious} 
              // text ="Previous"
              // emoji="😎"
            >
              <span>😎</span> Previous
            </Button>  

            <Button 
              style={{ backgroundColor: "#7950f2", color: "#fff"}} 
              onClick= {handleNext} 
              // text="Next"
              // emoji="😎"
              >
                Next <span>😎</span>
              </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ style, onClick, children}) {
  return (
    <button style={style} onClick={onClick}>
      {children}
    </button>
  );
}

function StepMessage({ classStep, children}){
  return (
    <p className={classStep}>{children}</p>
  );
}

export default App;
