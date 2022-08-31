import { Route } from "react-router-dom";
import App from "./App";

export default function Routes() {
  console.log("This is the process.env", process.env.PUBLIC_URL);
  // debugger
  return (
    <div>
      <Route path="/" element={<App />} />
    </div>
  );
}
