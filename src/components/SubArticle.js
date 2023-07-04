import "./SubArticleStyles.css";
import { Component } from "react";

class SubArticle extends Component {
  render() {
    return (
      <>
        <div className="contact-before-sub">
          <h2>{this.props.subheading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className={this.props.className}>
          <img alt={this.props.img_alt} src={this.props.img} />
        </div>
      </>
    );
  }
}
export default SubArticle;
