import "./App.css";
import Container from "./components/container/Container";
import MyBarChart from "./components/MyBarChart";
import MyPieChart from "./components/MyPieChart";
import SideNav from "./components/sidebar/SideNav";

const App = () => {
  return (
    <div className="container">
      <SideNav />
      <Container />
    </div>
  );
};

export default App;
