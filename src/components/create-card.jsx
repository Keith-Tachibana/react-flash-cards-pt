import React, { Component } from 'react';

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
    const { setView } = this.props;
    const clearFields = {
      question: '',
      answer: ''
    };
    this.setState(clearFields, (view) => setView('view-cards'));
  }

  render() {
    return (
      <React.Fragment>
        <main>
          <div className="row m-auto">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <form className="form create-form" onSubmit={this.handleSubmit}>
                <h2 className="text-center my-4 my-cards">Create New Card</h2>
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
                <div className="form-row justify-content-center mb-4">
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

export default CreateCard;
