import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Dashboard from "./pages/Dashboard";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/VeritasHackathon/" element={<Dashboard />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
