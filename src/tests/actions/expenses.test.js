import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense acion object", () => {
  const action = removeExpense({
    id: "123abc"
  });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("abc123", {
    description: "a",
    note: "b",
    amount: 50,
    createdAt: 700
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: {
      description: "a",
      note: "b",
      amount: 50,
      createdAt: 700
    }
  });
});

test("should setup add expesne action object with provided values", () => {
  const action = addExpense({
    description: "ab",
    amount: 10000,
    createdAt: 1000,
    note: "this was"
  });
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "ab",
      amount: 10000,
      createdAt: 1000,
      note: "this was",
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with defalt values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
      id: expect.any(String)
    }
  });
});
