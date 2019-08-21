import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.expense) {
      this.state = {
        description: props.expense.description,
        note: props.expense.note,
        amount: (props.expense.amount / 100).toString(),
        createdAt: moment(props.expense.createAt),
        calendarFocused: false,
        error: ''
      };
    } else {
      this.state = {
        description: '',
        note: '',
        amount: '',
        createdAt: moment(),
        calendarFocused: false,
        error: ''
      };
    }
    // this.state = {
    //   description: props.expense ? props.expense.description : '',
    //   note: props.expense ? props.expense.note : '',
    //   amount: props.expense ? (props.expense.amount / 100).toString() : '',
    //   createdAt: props.expense ? moment(props.expense.createAt) : moment(),
    //   calendarFocused: false,
    //   error: ''
    // };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and/or amount'
      }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          className="text-input"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button style={{ marginBottom: '0' }} className="btn btn--animate">
            {this.props.expense ? 'Edit Expense' : 'Add Expense'}
          </button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;

// {this.props.expense ? (
//   <button style={{ marginBottom: '0' }} className="btn btn--animate">
//     Edit Expense
//   </button>
// ) : (
//   <button style={{ marginBottom: '0' }} className="btn btn--animate">
//     Add Expense
//   </button>
// )}
