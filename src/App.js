import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Fonts from "./components/Fonts"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container min-vh-100">
        <div className="row my-5">
          <Form />
          <Fonts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
