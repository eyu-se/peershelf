/**
 * Created by pc on 3/29/18.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class LogIn extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        keyboardFocused={false}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Sign in"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];
    const customContentStyle = {
      width: '30%',
      maxWidth: '40%',
    };
    const signInStyle = {

    }

    return (
      <div>
        <Dialog
          title="Sign in"
          modal={false}
          open={this.props.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handleClose}
        >
          <TextField
            floatingLabelText="Email"
            type="email"
          /><br />
          <TextField
            floatingLabelText="Password"
            type="password"
          /><br />
          <FlatButton label="Forgot your password?" rippleColor="rgb(255, 64, 129)" hoverColor="rgba(0,0,0,0)" secondary={true} /><br/><br/>

          <FlatButton
            label="SIGN IN"
            backgroundColor="#a4c639"
            hoverColor="#8AA62F"
            style={{width: '100%', color: "#FFFFFF"}}
          /><br/><br/>

          <FlatButton label="Create your account" fullWidth={true} /><br/>
        </Dialog>
      </div>
    );
  }
}
