import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core'
import Toolbar from '@material-ui/core'
import Button from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
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
