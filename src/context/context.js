import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { femaleHairstyle } from "../data/femaledata";
import reducer from "../reducer/reducer";
import { maleHairstyle } from "../data/maledate";

const AppContext = createContext();
const initialState = {
  all_products: [],
  filtered_products: [],
  single_product: [],
  products_loading: true,
  single_product_loading: true,
  text: "",
  category: "all",
  cart: [],
  total_people: 0,
  total_price: 0,
  transport_fee: 740,
  sort: "male",
};
const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [date, setDatetime] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const setDate = (div) => {
    setDatetime(div.value);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const UpdateFilters = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };
  const UpdateSort = (e) => {
    const value = e.target.value;

    dispatch({ type: "UPDATE_SORT", payload: value });
  };
  const fetchSingleHairstyle = (id) => {
    dispatch({ type: "SINGLE_LOADING" });
    dispatch({ type: "GET_SINGLE_PRODUCT", payload: id });
  };
  const addToCart = (id, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };
  const toggleBtn = (id, value) => {
    dispatch({ type: "TOGGLE_BTN", payload: { id, value } });
  };
  const removeBtn = (id) => {
    dispatch({ type: "REMOVE_BTN", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.sort, state.text, state.category, state.all_products]);
  useEffect(() => {
    dispatch({ type: "LOADING" });
    let data = [];
    if (state.sort === "male") {
      data = maleHairstyle;
    } else {
      data = femaleHairstyle;
    }
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  }, [state.all_products, state.sort]);
  useEffect(() => {
    dispatch({ type: "CART_TOTALS" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        isSidebarOpen,
        UpdateFilters,
        openSidebar,
        closeSidebar,
        addToCart,
        fetchSingleHairstyle,
        toggleBtn,
        removeBtn,
        date,
        UpdateSort,
        setDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppProvider = () => {
  return useContext(AppContext);
};
export default AppProvider;
