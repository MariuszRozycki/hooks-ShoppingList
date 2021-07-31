const ShoppingList = () => {
  const [items] = React.useState({
    item1: 'cucumbers',
    item2: 'juice',
    item3: 'beer'
  });

  return (
    <React.Fragment>
      <h1>Shopping list</h1>
      <ul>
        <ItemList name={items.item1} />
        <ItemList name={items.item2} />
        <ItemList name={items.item3} />
      </ul>
    </React.Fragment>
  )
}

const ItemList = ({ name }) => (
  <li>{name}</li>
);

ReactDOM.render(<ShoppingList />, document.getElementById('root'));