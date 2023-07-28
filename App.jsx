import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Colors from "./Colors";
import Values from "values.js";

function App() {
  const vls = new Values("#0f366c");
  return (
    <section className="section-center">
      <h2>your favorite tints and shades</h2>
      <Colors toast={toast} vls={vls} />
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      ></ToastContainer>
    </section>
  );
}

export default App;
