import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Wrapper from "./components/Wrapper";
// // import Footer from "./components/Footer";
// // import Navbar from "./components/Navbar";
// import Jumbotron from "./components/Jumbotron";

function App() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home} />
            </div>
        </Router>
    );
}
export default App;
