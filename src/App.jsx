import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";
import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header title="Biblioteca" />

                <main>
                    <Sidebar />

                    <Display />
                </main>
            </div>
        );
    }
}

export default App;
