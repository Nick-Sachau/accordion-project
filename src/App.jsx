import Questions from "./components/questions";
import Data from './data'

function App() {
  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
        <section className="questions">
          {Data.map((data) => {
            return (
              <Questions data={data} key={data.id}/>
            )
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
