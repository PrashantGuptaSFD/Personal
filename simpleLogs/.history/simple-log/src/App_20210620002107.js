import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

function App() {
  const classes = useStyles();
  return (
    
    <div className="App">
      <header className="App-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className="Test" color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className="test">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      </header>
    </div>
  );
}

export default App;
