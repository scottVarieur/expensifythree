import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilterSpy,
  sortByDateSpy,
  sortByAmountSpy,
  setStartDateSpy,
  setEndDateSpy,
  wrapper;

beforeEach(() => {
  setTextFilterSpy = jest.fn();
  sortByDateSpy = jest.fn();
  sortByAmountSpy = jest.fn();
  setStartDateSpy = jest.fn();
  setEndDateSpy = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilterSpy}
      sortByDate={sortByDateSpy}
      sortByAmount={sortByAmountSpy}
      setStartDate={setStartDateSpy}
      setEndDate={setEndDateSpy}
    />
  );
});

test('should render ExpenseListFilters with default data correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with alt data correctly', () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const e = {
    target: {
      value: altFilters.text
    }
  };
  wrapper.find('input').prop('onChange')(e);
  expect(setTextFilterSpy).toHaveBeenLastCalledWith(altFilters.text);
});

test('should sort by date', () => {
  const e = {
    target: {
      value: filters.sortBy
    }
  };
  wrapper.find('select').prop('onChange')(e);
  expect(sortByDateSpy).toHaveBeenCalled();
});

test('should sort by amount', () => {
  const e = {
    target: {
      value: altFilters.sortBy
    }
  };
  wrapper.find('select').prop('onChange')(e);
  expect(sortByAmountSpy).toHaveBeenCalled();
});

test('should handle date changes', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate: altFilters.setStartDate,
    endDate: altFilters.setEndDate
  });
  expect(setStartDateSpy).toHaveBeenLastCalledWith(altFilters.setStartDate);
  expect(setEndDateSpy).toHaveBeenLastCalledWith(altFilters.setEndDate);
});

test('should handle date focus changes', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
  expect(wrapper.state('calendarFocused')).toBe('endDate');
});
