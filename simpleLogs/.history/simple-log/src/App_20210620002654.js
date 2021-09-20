import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

function App() {
  const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    titleClass: {
      float: 'right',
    }
  });
  const classes = useStyles();
  return (
    
    <div className="App">
      <header className="App-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.titleClass}>
            News
          </Typography>
          <Button color="inherit" className={classes.titleClass} >Login</Button>
        </Toolbar>
      </AppBar>
      </header>
    </div>
  );
}

export default App;
