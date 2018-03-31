/**
 * Created by pc on 3/29/18.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class SignUp extends React.Component {
  state = {
    open: false,
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  }

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (event, index, value) => {
    this.setState({value});
  };

  getStepContent(stepIndex) {

    const countries = [];
    for (let i = 0; i < 100; i++ ) {
      countries.push(<MenuItem value={i} key={i} primaryText={`Item ${i}`} />);
    }

    switch (stepIndex) {
      case 0:
        return (
          <div>
            <TextField
              floatingLabelText="Full Name"
            /> <br/>
            <TextField
              floatingLabelText="Email"
              type="email"
            /><br />
            <TextField
              floatingLabelText="Password"
              type="password"
            /> &nbsp;
            <TextField
              floatingLabelText="Confirm Password"
              type="password"
            />
            <DatePicker hintText="Date of Birth" />
          </div>
        );
      case 1:
        return (
          <div>
            <SelectField
              value={0}
              onChange={this.handleChange}
              maxHeight={200}
              floatingLabelText="Country"
            >
              {countries}
            </SelectField> &nbsp;
            <SelectField
              value={0}
              onChange={this.handleChange}
              maxHeight={200}
              floatingLabelText="State"
            >
              {countries}
            </SelectField>
            <SelectField
              value={0}
              onChange={this.handleChange}
              maxHeight={200}
              floatingLabelText="City"
            >
              {countries}
            </SelectField> <br/>
            <TextField
              floatingLabelText="Street"
            /> &nbsp;
            <TextField
              floatingLabelText="Address"
            /><br />
            <TextField
              floatingLabelText="ZIP Code"
            /><br />
          </div>
        );
      case 2:
        return (
          <div>
            <TextField
              floatingLabelText="Bio"
            />
          </div>
        );
      default:
        return (
          <div>'You\'re a long way from home sonny jim!'</div>
        );
    }
  }

  render() {

    const customContentStyle = {
      width: '60%'
    };

    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};



    return (
      <div>
        <Dialog
          title="Create your account"
          modal={false}
          open={this.props.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handleClose}
        >

          <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
            <Stepper activeStep={stepIndex} orientation="horizontal">
              <Step>
                <StepLabel>Your Credentials</StepLabel>
              </Step>
              <Step>
                <StepLabel>Basic Information</StepLabel>
              </Step>
              <Step>
                <StepLabel>Almost there!!</StepLabel>
              </Step>
            </Stepper>
            <div style={contentStyle}>
              {finished ? (
                  <p>
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();
                        this.setState({stepIndex: 0, finished: false});
                      }}
                    >
                      Click here
                    </a> to reset the example.
                  </p>
                ) : (
                  <div>
                    <div>{this.getStepContent(stepIndex)}</div>
                    <div style={{marginTop: 12}}>
                      <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        onClick={this.handlePrev}
                        style={{marginRight: 12}}
                      />
                      <RaisedButton
                        label={stepIndex === 2 ? 'Finish' : 'Next'}
                        primary={true}
                        onClick={this.handleNext}
                      />
                    </div>
                  </div>
                )}
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}
