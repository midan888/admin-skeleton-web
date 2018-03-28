import * as React from 'react';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import { withStyles, WithStyles, StyleRulesCallback } from 'material-ui/styles';

interface Props {
  onButtonClick: any;
  title: string;
  buttonTitle: string;
}

type PropsWithStyles = Props & WithStyles<'root' | 'row'>;

const styles: StyleRulesCallback = () => ({
  root: {},
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

const PageHeader = ({ title, buttonTitle, classes, onButtonClick }: PropsWithStyles) => (
  <div className={classes.root}>
    <div className={classes.row}>
      <Typography variant="headline">{title}</Typography>
      <Button
        variant="raised"
        color="primary"
        onClick={onButtonClick}
      >
        {buttonTitle}
      </Button>
    </div>
    <Divider />
  </div>
);

export default withStyles(styles)<Props>(PageHeader);
