import { createContext, useReducer, useContext } from "react";
import StoreReducer, { initialStore } from "./StoreReducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {

    const [store, dispatch] = useReducer(StoreReducer, initialStore)
    return(
        <StoreContext.Provider value={[store, dispatch]}>
            {children}
        </StoreContext.Provider>
    )
}

const useStore = () => useContext(StoreContext)[0];

const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch }
export default StoreProvider;