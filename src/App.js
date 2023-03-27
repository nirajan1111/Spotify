import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Cards from "./components/Cards";
import Sidebar from "./components/sidebar";
function App() {
  return (
    <div className="body_container">
      <div className="sidebar_container">
        <Sidebar />
      </div>
      <div className="card_container">
        <Cards />
      </div>
    </div>
  );
}

export default App;
