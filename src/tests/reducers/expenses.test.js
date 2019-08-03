import expensesReducer from "../../reducers/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should add an expense", () => {
  const expense = {
    description: "ab",
    id: 321,
    note: "",
    amount: 100,
    createdAt: 2000
  };
  const action = { type: "ADD_EXPENSE", expense };
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([expense]);
});

test("should remove an expense by id", () => {
  const expenses = [
    {
      description: "a",
      id: "123",
      note: "",
      createdAt: 0
    },
    {
      description: "b",
      id: "abc",
      note: "",
      cratedAt: 5000
    }
  ];
  const action = { type: "REMOVE_EXPENSE", id: "123" };
  const currentState = [expenses[0], expenses[1]];
  const state = expensesReducer(currentState, action);
  expect(state).toEqual([expenses[1]]);
});

test("should not remove an expense if id not found", () => {
  const expenses = [
    {
      description: "a",
      id: "123",
      note: "",
      createdAt: 0
    },
    {
      description: "b",
      id: "abc",
      note: "",
      cratedAt: 5000
    }
  ];
  const action = { type: "REMOVE_EXPENSE", id: "12345" };
  const currentState = [expenses[0], expenses[1]];
  const state = expensesReducer(currentState, action);
  expect(state).toEqual([expenses[0], expenses[1]]);
});

test("should edit an expense using id", () => {
  const expense = {
    description: "abc",
    createdAt: 1000,
    amount: 3000,
    id: 1234,
    note: ""
  };
  const updates = {
    description: "xyz",
    amount: 5000,
    note: "dummy text"
  };
  const currentState = [expense];
  const action = { type: "EDIT_EXPENSE", id: 1234, updates };
  const state = expensesReducer(currentState, action);
  expect(state).toEqual([
    {
      description: "xyz",
      amount: 5000,
      note: "dummy text",
      id: 1234,
      createdAt: 1000
    }
  ]);
});

test("should not edit expesne if id not found", () => {
  const expense = {
    description: "abc",
    createdAt: 1000,
    amount: 3000,
    id: 1234,
    note: ""
  };
  const updates = {
    description: "xyz",
    amount: 5000,
    note: "dummy text"
  };
  const currentState = [expense];
  const action = { type: "EDIT_EXPENSE", id: 123456789, updates };
  const state = expensesReducer(currentState, action);
  expect(state).toEqual([expense]);
});
