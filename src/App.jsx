import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import Home from "./pages/Home";
import { login, logout } from "./store/slices/authSlice.js";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <>
      {/* <Provider store={store}>
        <Home />
      </Provider> */}
      {isAuthenticated ? (
        <>
          <Home />
        </>
      ) : (
        <div className="login-div">
          <p>Please log in to see your To-Do list.</p>
          <button onClick={() => dispatch(login())}>Login</button>
        </div>
      )}
    </>
  );
}

export default App;
