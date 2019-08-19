import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout } from '../../actions/auth';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup login action object with provided user id', () => {
  const uid = 'asdfasdf';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should setup logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});
