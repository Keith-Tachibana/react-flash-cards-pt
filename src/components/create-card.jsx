import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CreateCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addCard } = this.props;
    const newCard = {
      question: this.state.question,
      answer: this.state.answer
    };
    addCard(newCard);
    this.clearFields();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleReset(event) {
    event.preventDefault();
    this.clearFields();
  }

  clearFields() {
    const { history } = this.props;
    const clearFields = {
      question: '',
      answer: ''
    };
    this.setState(clearFields);
    history.push('/');
  }

  render() {
    return (
      <React.Fragment>
        <main className="create-container m-4">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <h3 className="text-center">Create New Card</h3>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-row justify-content-center">
                  <div className="form-group">
                    <label htmlFor="question">Question:</label>
                    <textarea
                      name="question"
                      onChange={this.handleChange}
                      className="form-control"
                      id="question"
                      cols="122"
                      rows="3"
                      value={this.state.question}
                      required="required">
                    </textarea>
                  </div>
                </div>
                <div className="form-row justify-content-center">
                  <div className="form-group">
                    <label htmlFor="answer">Answer:</label>
                    <textarea
                      name="answer"
                      onChange={this.handleChange}
                      className="form-control"
                      id="answer"
                      cols="122"
                      rows="3"
                      value={this.state.answer}
                      required="required">
                    </textarea>
                  </div>
                </div>
                <div className="form-row justify-content-center">
                  <button
                    name="save"
                    type="submit"
                    className="btn btn-primary mr-2">
                      Save Card
                  </button>
                  <button
                    name="cancel"
                    type="reset"
                    onClick={this.handleReset}
                    className="btn btn-danger ml-2">
                      Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default withRouter(CreateCard);
