import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import { expenses } from '../fixtures/expenses';

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach(() => {
  editExpenseSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  historySpy = {
    push: jest.fn()
  };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpenseSpy}
      removeExpense={removeExpenseSpy}
      history={historySpy}
      expense={expenses[0]}
    />
  );
});

test('should render the EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle removeExpense', () => {
  wrapper.find('button').simulate('click');
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[0].id });
});
