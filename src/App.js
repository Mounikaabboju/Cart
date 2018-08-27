import React from "react";
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ProductList />
      </div>
    );
  }
}
export default App;
