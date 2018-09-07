/**
 *
 * Asynchronously loads the component for PreLoginDashboard
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
