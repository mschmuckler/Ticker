import React from 'react';
import ReactQuill from 'react-quill';

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);

    let tickerTag = this.props.match.params.ticker;
    if (this.props.match.params.ticker === "default") {
      tickerTag = "";
    }
    
    this.state = {
      title: "",
      tickerTag,
      body: "",
      summary1: "",
      summary2: "",
      summary3: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuill = this.handleQuill.bind(this);
  }

  componentWillUnmount() {
    this.props.clearError("addArticle");
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleQuill(value) {
    this.setState({ body: value })
  }

  handleSubmit(e) {
    e.preventDefault();

    const summaryArray = [];
    if (this.state.summary1 !== "") {
      summaryArray.push(this.state.summary1);
    }
    if (this.state.summary2 !== "") {
      summaryArray.push(this.state.summary2);
    }
    if (this.state.summary3 !== "") {
      summaryArray.push(this.state.summary3);
    }

    this.props.createArticle(
      {
        title: this.state.title,
        ticker_tag: this.state.tickerTag,
        body: this.state.body,
        summary: summaryArray,
      }
    ).then(
      () => {
        this.props.history.push(`/stock/${this.state.tickerTag}`);
      }
    );
  }

  render() {
    let tickerTagError = "";
    let titleErrorStyle = "none";
    let summaryErrorStyle = "none";
    let bodyError = "";
    if (this.props.errors) {
      this.props.errors.forEach(error => {
        if (error === "Title can't be blank") {
          titleErrorStyle = "input-error";
        }
        if (error === "Summary can't be blank") {
          summaryErrorStyle = "input-error";
        }
        if (error === "Body can't be blank") {
          bodyError = "Did you forget to write something?";
        }
        if (error === "No such company exists") {
          tickerTagError = "No such company exists";
        }
      });
    }

    return (
      <div id="article-form" >
        <form>
          <input
            onChange={ this.handleChange("title") }
            className={ titleErrorStyle + " article-form-title-input" }
            type="text"
            placeholder="Add Title"
          />
          <div id="ticker-input-and-error" >
            <input
              onChange={ this.handleChange("tickerTag") }
              className="article-form-ticker-input"
              type="text"
              value={ this.state.tickerTag }
              placeholder="Enter ticker here"
            />
            <span>{ tickerTagError }</span>
          </div>

          <p>Summary</p>
          <div className="summary-point" >
            <span className="summary-bullet" />
            <input
              onChange={ this.handleChange("summary1") }
              className={ summaryErrorStyle + " article-form-summary-input" }
              type="text"
              placeholder="Enter summary here"
            />
          </div>
          <div className="summary-point" >
            <span className="summary-bullet" />
            <input onChange={ this.handleChange("summary2") } type="text" className="article-form-summary-input" />
          </div>
          <div className="summary-point" >
            <span className="summary-bullet" />
            <input onChange={ this.handleChange("summary3") } type="text" className="article-form-summary-input" />
          </div>
          <ReactQuill
            onChange={ this.handleQuill }
            theme="snow"
            value={ this.state.body }
            placeholder="Article text goes here"
          />

          <button onClick={ this.handleSubmit } id="article-form-submit" >Submit Article</button>
          <span className="red-error article-form-error" >{ bodyError }</span>
        </form>
      </div>
    );
  }
}

export default ArticleForm;

// <textarea
//   onChange={ this.handleChange("body") }
//   className={ bodyErrorStyle + " article-form-body-input" }
//   placeholder="Article text goes here"
// ></textarea>
