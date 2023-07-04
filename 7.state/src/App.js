import './App.css';
import StarRating from './components/StarRating';

function App() {
  return (
    <>
      <h1>1.2.3</h1>
      <StarRating
        totalStars={5}
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={e => console.log("double click")}
      />
    </>
  );
}

export default App;