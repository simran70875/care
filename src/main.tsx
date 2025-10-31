import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import "swiper/swiper-bundle.css";
import "flatpickr/dist/flatpickr.css";

import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./app/store.tsx";
import { BrowserRouter } from "react-router";


// // ✅ Mute console logs in production
if (import.meta.env.MODE === "production") {
  console.log = () => { };
  console.debug = () => { };
  // you can keep errors/warnings if you want
  // console.warn = () => {};
  // console.error = () => {};
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AppWrapper>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AppWrapper>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>,
);
