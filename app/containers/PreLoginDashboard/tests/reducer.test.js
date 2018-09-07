import { fromJS } from 'immutable';
import preLoginDashboardReducer from '../reducer';

describe('preLoginDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(preLoginDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
