import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function Page() {
  let [quote, setq] = React.useState(null);
  let [count, setc] = React.useState(0);
  function click() {
    setc((prev) => prev + 1);
  }
  React.useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        let q = data.quotes;
        let random = Math.floor(Math.random() * q.length);
        setq(q[random].quote);
      });
  }, [count]);
  return (
    <div className="container">
      <div className="box">
        {quote && (
          <div className="quote">
            <p className="words">"{quote}"</p>
          </div>
        )}
        <div className="button">
          <button className="generate" onClick={click}>
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
