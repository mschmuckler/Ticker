import React from 'react';

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      tickerTag: this.props.match.params.ticker,
      body: "",
      summary1: "",
      summary2: "",
      summary3: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearError("addArticle");
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
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
        this.props.history.push(`/stocks/${this.state.tickerTag}`);
      }
    );
  }

  render() {
    let titleErrorStyle = "none";
    let summaryErrorStyle = "none";
    let bodyErrorStyle = "none";
    if (this.props.errors) {
      this.props.errors.forEach(error => {
        if (error === "Title can't be blank") {
          titleErrorStyle = "input-error";
        }
        if (error === "Summary can't be blank") {
          summaryErrorStyle = "input-error";
        }
        if (error === "Body can't be blank") {
          bodyErrorStyle = "input-error";
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
          <input
            onChange={ this.handleChange("tickerTag") }
            className="article-form-ticker-input"
            type="text"
            value={ this.state.tickerTag }
            placeholder="Enter ticker here"
          />

          <p>Summary</p>
          <div>
            <span className="summary-bullet" />
            <input
              onChange={ this.handleChange("summary1") }
              className={ summaryErrorStyle + " article-form-summary-input" }
              type="text"
              placeholder="Enter summary here"
            />
          </div>
          <div>
            <span className="summary-bullet" />
            <input onChange={ this.handleChange("summary2") } type="text" className="article-form-summary-input" />
          </div>
          <div>
            <span className="summary-bullet" />
            <input onChange={ this.handleChange("summary3") } type="text" className="article-form-summary-input" />
          </div>

          <textarea
            onChange={ this.handleChange("body") }
            className={ bodyErrorStyle + " article-form-body-input" }
            placeholder="Article text goes here"
          ></textarea>
        <button onClick={ this.handleSubmit } id="article-form-submit" >Submit Article</button>
        </form>
      </div>
    );
  }
}

export default ArticleForm;
