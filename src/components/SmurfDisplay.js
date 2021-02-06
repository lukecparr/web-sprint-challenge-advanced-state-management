import React from "react";
import { fetchInitialData } from "../actions";

import { connect } from "react-redux";

import Smurf from "./Smurf";

export class SmurfDisplay extends React.Component {
  componentDidMount() {
    this.props.fetchInitialData();
  }

  render() {
    const { smurfs, isFetching, error} = this.props;
    return (
      <div>
        {isFetching ? <h1>Loading...</h1> : error ? <h1 className='error'>{error}</h1> : smurfs.map((smurf) => <Smurf smurf={smurf} />)}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchInitialData })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
