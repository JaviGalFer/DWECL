function App() {
  const data = ["aprende react 😎", "Aprende JavaScript 😎", "Aprende CSS 😎"];
  const step = 3;
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

export default App;
