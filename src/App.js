import { store } from "./redux/store";
import { Provider } from "react-redux";
import Post from "./components/Post";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Post />
      </div>
    </Provider>
  );
}

export default App;
