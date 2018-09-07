/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="display4" gutterBottom color="primary">
          Display 4
        </Typography>
        <Typography variant="display3" color="secondary" gutterBottom>
          Display 3
        </Typography>
        <Typography variant="display2" color="primary" gutterBottom>
          Display 2
        </Typography>
        <Typography variant="display1" color="secondary" gutterBottom>
          Display 1
        </Typography>
        <Typography variant="headline" color="primary" gutterBottom>
          Headline
        </Typography>
        <Typography variant="title" color="secondary" gutterBottom>
          Title
        </Typography>
        <Typography variant="subheading" color="primary" gutterBottom>
          Subheading
        </Typography>
        <Typography variant="body2" color="secondary" gutterBottom>
          Body 2
        </Typography>
        <Typography variant="body1" color="primary" gutterBottom align="right">
          Body 1
        </Typography>
        <Typography
          variant="caption"
          color="secondary"
          gutterBottom
          align="center"
        >
          Caption
        </Typography>
        <Typography gutterBottom noWrap>
          {`
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        `}
        </Typography>
        <Typography variant="button" gutterBottom>
          Button
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
