import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'date',
  setStartDate: undefined,
  setEndDate: undefined
};

const altFilters = {
  text: 'bills',
  sortBy: 'amount',
  setStartDate: moment(0),
  setEndDate: moment(0).add(3, 'days')
};

export { filters, altFilters };
