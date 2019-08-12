import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import { expenses } from '../fixtures/expenses';

let editExpenseSpy,
  startRemoveExpenseSpy,
  startEditExpenseSpy,
  removeExpenseSpy,
  historySpy,
  wrapper;

beforeEach(() => {
  editExpenseSpy = jest.fn();
  removeExpenseSpy = jest.fn();
  startRemoveExpenseSpy = jest.fn();
  startEditExpenseSpy = jest.fn();
  historySpy = {
    push: jest.fn()
  };
  wrapper = shallow(
    <EditExpensePage
      startEditExpense={startEditExpenseSpy}
      editExpense={editExpenseSpy}
      startRemoveExpense={startRemoveExpenseSpy}
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
  expect(startEditExpenseSpy).toHaveBeenLastCalledWith(
    expenses[0].id,
    expenses[0]
  );
});

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click');
  expect(historySpy.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpenseSpy).toHaveBeenLastCalledWith({
    id: expenses[0].id
  });
});
