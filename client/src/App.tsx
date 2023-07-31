import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import Movie from "./components/Movie/Movie";
import  store  from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Movies}/>
            <Route path=":id" Component={Movie} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
