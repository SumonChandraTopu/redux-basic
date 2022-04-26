import "./App.css";
import PostForm from "./features/posts/PostForm";
import PostLists from "./features/posts/PostLists";
import Home from "./pages/Home";

// import Counter from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Counter /> */}
      <div className="posts">
       <PostForm />
        <PostLists />
      </div>
      {/* <Mobile /> */}
    </div>
  );
}

export default App;
