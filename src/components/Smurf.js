import React from 'react';
import {Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';

class Smurf extends React.Component {
    render() {
      const { smurf } = this.props;

      return (
        <div data-testid="smurf" className="card">
          <Card>
              <CardBody>

            <CardTitle tag="h5">{smurf.name} ({smurf.nickname})</CardTitle>
            <CardSubtitle className="mb-2 text-muted">{smurf.position}</CardSubtitle>
            <CardText>{smurf.description}</CardText>
              </CardBody>
          </Card>
        </div>
      );
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.