import React from "react";
import { Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Cart } from "./pages";
// import { connect } from "react-redux"; для классового компонента
function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route exact path='/' component={Home} />
        <Route exact path='/cart' component={Cart} />
      </div>
    </div>
  );
}
export default App;
// -------------------------------class redux------------------------
// class App extends React.Component {
//   componentDidMount() {
//     axios.get("http://localhost:3000/db.json").then(({ data }) => {
//       // console.log(setPizzas(data.pizzas));
//       this.props.setPizzasProp(data.pizzas);
//     });
//   }

//   render() {
//     // console.log(this.props);

//     return (
//       <div className='wrapper'>
//         <Header />
//         <div className='content'>
//           <Route exact path='/'>
//             <Home items={this.props.items} />
//           </Route>
//           <Route exact path='/cart' component={Cart} />
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzasProp: (items) => dispatch(setPizzas(items)),
//   };
// };
// // const mapDispatchToProps = {
// //   setPizzas,
// // };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
