import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseList = props => (
  <div>
    {props.expenses.length === 0 ? (
      <p>No expnese</p>
    ) : (
      props.expenses.map(expense => (
        <ExpenseListItem key={expense.id} expense={expense} />
      ))
    )}
  </div>
);

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpenseList);
