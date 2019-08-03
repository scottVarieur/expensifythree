import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should match snapshot for 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesTotal={2000} expensesCount={1} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should match snapshot for more than 1 expense', () => {
  const wrapper = shallow(
    <ExpensesSummary expensesTotal={4000} expensesCount={2} />
  );
  expect(wrapper).toMatchSnapshot();
});
