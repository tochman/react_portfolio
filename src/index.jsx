import React from "react"
import ReactDOM from "react-dom"
import './css/tailwind.css';
import Hello from "./Hello"
import Header from "./Header"
import Footer from "./Footer"

const App = () => {
    return (
        <div className="page-wrapper">
            <div className="page-content">
                <Header />
                <div className="content-wrapper">
                    <Hello />
                </div>
                <Footer />
            </div >
        </div >
    )
};

ReactDOM.render(<App />, document.getElementById("app"))