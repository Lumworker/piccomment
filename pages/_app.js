import { Provider } from "react-redux";
import { wrapper } from "../store/store"; //use Redux
import "../styles/globals.css";

function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest); // ดึง reduxตัวแปรมาใช้
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
