import { act } from "react";
import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};
const counterReducer = (store = INITIAL_VALUE, action) => {
  console.log(action);

  if (action.type == "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type == "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type == "ADD") {
    return {
      ...store,
      counter: store.counter + Number(action.payload.counter),
    };
  } else if (action.type == "SUBSTRACT") {
    return {
      ...store,
      counter: store.counter - Number(action.payload.counter),
    };
  } else if (action.type == "PRIVACY_CHANGE") {
    return { ...store, privacy: !store.privacy };
  }

  return store;
};
const counterStore = createStore(counterReducer);

export default counterStore;
