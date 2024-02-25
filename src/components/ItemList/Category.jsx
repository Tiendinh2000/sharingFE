import React, { Component } from "react";

class Category extends Component {
  render() {
    return <td className="Category">{this.props.category.type}</td>;
  }
}

// function Printf(cate) {
//   if (cate) {
//     return <>{cate}</>;
//   } else {
//     return "not null";
//   }
// }

export default Category;
