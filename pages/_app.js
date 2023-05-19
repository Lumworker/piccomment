import { Provider } from "react-redux";
import { wrapper } from "../redux/redux"; //use Redux
import "../styles/globals.css";

function MyApp({ Component, ...rest }) {
  const { redux, props } = wrapper.useWrappedredux(rest); // ดึง reduxตัวแปรมาใช้
  const { pageProps } = props;
  return (
    <Provider redux={redux}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
