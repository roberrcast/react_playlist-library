import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Display from "./components/Display";

function app() {
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

export default app;
