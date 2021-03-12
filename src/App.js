import ReactDOM from "react-dom";
import Pet from "./pet";
import SearchParams from "./searchParams";
const App = () => (
  <div>
    <h1>Adopt Me!</h1>
    <SearchParams />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
