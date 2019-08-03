import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("should set sort by to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("should set sort by to date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const action = { type: "SET_TEXT", text: "hello" };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe("hello");
});

test("should set start date filter", () => {
  const action = { type: "SET_START_DATE", date: 500 };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(500);
});

test("should set end date filter", () => {
  const action = { type: "SET_END_DATE", date: 1500 };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(1500);
});
