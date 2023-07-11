import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Colors from "./Colors";
import Values from "values.js";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(new Values("#0f366c").all(10));
  const [initialRange, setInitialRange] = useState(10);

  const handleColor = (color) => {
    try {
      setColors(new Values(color).all(initialRange));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleRange = (range, color) => {
    try {
      setInitialRange(range);
      setColors(new Values(color).all(initialRange));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-center">
      <Colors
        colors={colors}
        handleColor={handleColor}
        toast={toast}
        handleRange={handleRange}
      />
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
