import { AppBar, EmptyState, Button, ListItem } from './components';

function App() {
  return (
    <div className="App">
      <AppBar title="Shopping List" />
      <EmptyState>
        <Button variant="contained">Add your first item</Button>
      </EmptyState>
      <ListItem
        text="tomatoe"
        secondaryText="Cherry tomatoe"
        selected={true}
        onSelected={sel => {
          console.log(sel);
        }}
      />
    </div>
  );
}

export default App;
