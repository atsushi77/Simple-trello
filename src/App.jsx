import "./App.css";
import { Header } from "./components/header/Header";
import { TaskCards } from "./components/task/TaskCards";

// 関数components
function App() {
  return (
    <div className="App">
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
