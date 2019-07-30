//SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});
//SET_START_DATE
const setStartDate = (date = undefined) => ({
  type: "SET_START_DATE",
  date
});
//SET_END_DATE
const setEndDate = (date = undefined) => ({
  type: "SET_END_DATE",
  date
});
//SET_TEXT
const setTextFilter = (text = "") => ({
  type: "SET_TEXT",
  text
});

export { sortByDate, sortByAmount, setStartDate, setEndDate, setTextFilter };
