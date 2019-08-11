import database from '../firebase/firebase';

//action for adding an epxense to state 
const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense
});

//Adds an expense to database then calls addExpense() with expense data
export const startAddExpense = (expenseData = {}) => {
  return dispatch => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    
    return database
      .ref('expenses')
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      })
      .catch(err => {
        console.log(err);
      });
  };
};

//action for removing an expense in state
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//action for editing an expense in state
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export { addExpense, removeExpense, editExpense };
