import React from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addNewSmurf } from "../actions";

class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      position: "",
      nickname: "",
      description: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.name) {
      this.setState({ ...this.state, error: "Name must be provided" });
    } else if (!this.state.position) {
      this.setState({ ...this.state, error: "Position must be provided" });
    } else if (!this.state.nickname) {
      this.setState({ ...this.state, error: "Nickname must be provided" });
    } else {
      this.props.smurfs.map((smurf) => {
        this.state.name === smurf.name
          ? this.setState({ ...this.state, error: "Smurf already exists" })
          : this.props.addNewSmurf(this.state);
        this.setState({
          name: "",
          position: "",
          nickname: "",
          description: "",
        });
      });
    }
  };

  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        <Form>
          <FormGroup className="form-group">
            <Label htmlFor="name">Name:</Label>
            <br />
            <Input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              id="name"
            />

            <Label htmlFor="position">Position:</Label>
            <br />
            <Input
              type="text"
              value={this.state.position}
              onChange={this.handleChange}
              name="position"
              id="position"
            />

            <Label htmlFor="nickname">Nickname:</Label>
            <br />
            <Input
              type="text"
              value={this.state.nickname}
              onChange={this.handleChange}
              name="nickname"
              id="nickname"
            />

            <Label htmlFor="description">Description:</Label>
            <br />
            <Input
              type="textarea"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              id="description"
            />
          </FormGroup>

          {this.state.error ? (
            <div
              data-testid="errorAlert"
              className="alert alert-danger"
              role="alert"
            >
              Error: {this.state.error}
            </div>
          ) : (
            <div></div>
          )}

          <Button color="success" onClick={this.handleSubmit}>
            Submit Smurf
          </Button>
        </Form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { addNewSmurf })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
