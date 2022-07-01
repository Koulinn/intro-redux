import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navigation from "./components/Navigation";
import Views from "./views/Views";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Views />
    </div>
  );
}

export default App;

// const url =
//   "https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?keyword=iphone&country=US&category=aps";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": process.env.REACT_APP_RAPID_KEY,
//     "X-RapidAPI-Host": process.env.REACT_APP_RAPID_HOST_KEY,
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error("error:" + err));
