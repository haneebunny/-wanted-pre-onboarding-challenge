import { useState } from "react";
import "./App.css";
import AppRouters from "./Routes/AppRouter";

import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <AppRouters />
      </RecoilRoot>
    </div>
  );
}

export default App;
