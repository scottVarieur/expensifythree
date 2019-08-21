import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import expensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';

export const ExpensesSummary = ({ expensesTotal, expensesCount }) => {
  const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
  const formatedTotal = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        {expensesCount > 0 && (
          <h2 className="page-header__title">
            Viewing <span>{expensesCount}</span> {expenseWord} totalling{' '}
            <span>{formatedTotal}</span>.
          </h2>
        )}
        <div className="page-header__actions">
          <Link className="btn btn--animate" to="/create">
            Add Expense
          </Link>
        </div>
      </div>
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
