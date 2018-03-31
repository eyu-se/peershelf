/**
 * Created by pc on 3/29/18.
 */
import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/menu';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import Login from "./login"
import SignUp from "./signup"

class AccountButtons extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <div>
        <FlatButton {...this.props} label="Login" onClick={() => this.props.onClick(0)} />
        <FlatButton {...this.props} label="Sign up" onClick={() => this.props.onClick(1)} />
      </div>
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class ToolBar extends Component {
  state = {
    logged: false,
    showLogin: false,
    showSignUp: false
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  handleClose = ()=>{

  };

  render() {

    return (
      <div>
        <AppBar
          title="PeerShelf"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <AccountButtons onClick={(i) => {
            switch (i) {
              case 0:
                this.setState({showLogin: true});
                break;
              default:
                this.setState({showSignUp: true});
                break;
            }
            }
          } />}
        />
        <Login open={this.state.showLogin} />
        <SignUp open={this.state.showSignUp} />
      </div>
    );
  }
}

export default ToolBar;
