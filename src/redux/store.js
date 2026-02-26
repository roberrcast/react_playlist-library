import { createStore } from "redux";
import libraryReducer from "./libraryReducer";

// Le pasamos el reducer al store para que sepa cómo manejar acciones
const store = createStore(libraryReducer);

export default store;
