import React from 'react';

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      tickerTag: "",
      body: "",
      summary1: "",
      summary2: "",
      summary3: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createArticle(
      {
        title: this.state.title,
        ticker_tag: this.state.tickerTag,
        body: this.state.body,
        summary: [this.state.summary1, this.state.summary2, this.state.summary3],
      }
    );
  }

  render() {
    return (
      <div id="article-form" >
        <form>
          <input onChange={ this.handleChange("title") } type="text" placeholder="Add Title" />
          <input onChange={ this.handleChange("tickerTag") } type="text" placeholder="Enter ticker here" />
          <p>Summary</p>
          <input onChange={ this.handleChange("summary1") } type="text" placeholder="Enter summary here" />
          <input onChange={ this.handleChange("summary2") } type="text" />
          <input onChange={ this.handleChange("summary3") } type="text" />
          <textarea onChange={ this.handleChange("body") } placeholder="Article text goes here..."></textarea>
          <button onClick={ this.handleSubmit } >Submit Article</button>
        </form>
      </div>
    );
  }
}

export default ArticleForm;
