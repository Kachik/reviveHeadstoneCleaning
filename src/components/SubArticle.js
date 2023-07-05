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
          <img
            className="article-image"
            alt={this.props.img_alt}
            src={this.props.img}
          />
          <p className="image-text">{this.props.img_text}</p>
        </div>
      </>
    );
  }
}
export default SubArticle;
