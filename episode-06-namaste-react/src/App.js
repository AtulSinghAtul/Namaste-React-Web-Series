import Header from "./components/Header";
import Body from "./components/Body";

const App = function App() {
  console.log(<Body />);
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

export default App;
