import "./App.css";
import Header from "./components/Header";
import LeftBody from "./components/LeftBody";
import MainBody from "./components/MainBody";
import RightBody from "./components/RightBody";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

function App() {
  const [currentContents, setCurrentContents] = useState([
    "Work Experience A",
    "Work Experience B",
    "Work Experience C",
  ]);
  const [currentSongs, setCurrentSongs] = useState([
    "Song A",
    "Song B",
    "Song C",
  ]);

  return (
    <>
      <div className="container-fluid text-center mt-3">
        <Header />
      </div>
      <div className="row bg-primary">
        <div className="col-2">
          <LeftBody />
        </div>
        <div className="col-8 text-center">
          <MainBody />
        </div>
        <div className="col-2">
          <div className="row">
            <RightBody
              subHeader={"Work Experience"}
              contents={currentContents}
            />
          </div>
          <div className="row">
            <RightBody
              subHeader={"My Favorite Music"}
              contents={currentSongs}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid text-center bg-info">
        <Footer />
      </div>
    </>
  );
}

export default App;
