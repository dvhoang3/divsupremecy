import './App.css';
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <div className="container">
        <div onDoubleClick={(e) => { console.log(e.target) }}>Div Button</div>
        <button draggable="true" onDrag={(e) => { console.log(e.target) }}>Default Button</button>
        <Button className="main" onDoubleClick={(e) => { console.log(e.target) }}>
          My Button
        </Button>
      </div>
    </>
  );
}

export default App;
