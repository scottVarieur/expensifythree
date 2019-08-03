import React from 'react';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesTotal, expensesCount }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formatedTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      {expensesCount > 0 && (
        <p>
          Viewing {expensesCount} {expenseWord} totalling {formatedTotal}.
        </p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  expensesTotal: expensesTotal(
    getVisibleExpenses(state.expenses, state.filters)
  ),
  expensesCount: getVisibleExpenses(state.expenses, state.filters).length
});

export default connect(mapStateToProps)(ExpensesSummary);
