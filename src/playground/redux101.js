import { createStore } from "redux";

//action generators-fuctinos that return action objects

// const add = ({ a, b }, c) => {
//   return a + b + c;
// }

// console.log(add({ a: 1, b: 12 }, 100))

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

//set func
const setCount = ({ setTo } = {}) => ({
  type: "SET",
  setTo
});

//reset func
const resetCount = () => ({
  type: "RESET"
});

//Reducers
//1 reducers are pure functions
//2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      }
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.setTo
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//actons- an object that gets sent to the store


store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount({ decrementBy: 3 }));

store.dispatch(decrementCount())

store.dispatch(setCount({ setTo: 101 }));

unsubscribe();