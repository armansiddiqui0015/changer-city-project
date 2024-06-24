import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    city1: "Ahemdabad",
    city2: "Gandhinagar",
    city3: "Rajkot",
  });

  const OnChangtoChangCity = (event) => {
    switch (event.target.value) {
      case "gujrat": {
        setState({
          city1: "Ahemdabad",
          city2: "Gandhinagar",
          city3: "Rajkot",
        });
        break;
      }
      case "rajasthan": {
        setState({
          city1: "Ajmer",
          city2: "Bikaner",
          city3: "Jaipur",
        });
        break;
      }
      case "up": {
        setState({
          city1: "Kanpur",
          city2: "Jalaun",
          city3: "Barely",
        });
        break;
      }
      default: {
        setState({
          city1: "Ahemdabad",
          city2: "Gandhinagar",
          city3: "Rajkot",
        });
        break;
      }
    }
  };

  return (
    <>
      <form className="d-flex" role="search">
        <select className="pricing" onChange={OnChangtoChangCity}>
          <option selected value="gujrat">
            Gujrat
          </option>
          <option value="rajasthan">Rajasthan</option>
          <option value="up">UP</option>
        </select>

        <select className="pricing">
          <option value="usd">{state.city1}</option>
          <option value="inr">{state.city2}</option>
          <option value="eur">{state.city3}</option>
        </select>
      </form>
    </>
  );
}

export default App;
