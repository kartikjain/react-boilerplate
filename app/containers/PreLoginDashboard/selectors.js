import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the preLoginDashboard state domain
 */

const selectPreLoginDashboardDomain = state =>
  state.get('preLoginDashboard', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PreLoginDashboard
 */

const makeSelectPreLoginDashboard = () =>
  createSelector(selectPreLoginDashboardDomain, substate => substate.toJS());

export default makeSelectPreLoginDashboard;
export { selectPreLoginDashboardDomain };
