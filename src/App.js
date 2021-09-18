import "./App.css";
import Panel from "./components/Panel";

function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Panel
          text="hey let's dance"
          src="https://source.unsplash.com/gYl-UtwNg_I/1500x1500"
        />
        <Panel
          text="give take receive"
          src="https://source.unsplash.com/rFKUFzjPYiQ/1500x1500"
        />
        <Panel
          text="experience it today"
          src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d"
        />
        <Panel
          text="give all away"
          src="https://source.unsplash.com/ITjiVXcwVng/1500x1500"
        />
        <Panel
          text="life in motion"
          src="https://source.unsplash.com/3MNzGlQM7qs/1500x1500"
        />
      </div>
    </div>
  );
}

export default App;
