// TODO





var GroceryList = (props) => (

  <ul>
  GroceryList
  {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  {/* <GroceryListItem item={props.items[0]}/>
  <GroceryListItem item={props.items[1]}/>
  <GroceryListItem item={props.items[2]}/>
  <GroceryListItem item={props.items[3]}/> */}
  </ul>

);

var Banana = (props) => (
  <li> {props.item}
  </li>
);

var Potato = (props) => (
  <li> {props.item}
  </li>
);

<Potato/>


class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  onHovered() {
    this.setState({
      hover: !this.state.hover
    });
  }


  render() {

    var style = {
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onHovered.bind(this)} onMouseLeave={this.onHovered.bind(this)}> {this.props.item}</li>
      );
  }

}

var item1 = 'banana';
var item2 = 'potato';

var glist = [item1, item2, 'peanut butter'];

ReactDOM.render(<GroceryList items={glist}/>, document.getElementById("app"));
