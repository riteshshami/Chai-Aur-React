import Card from "./components/Card";

function App() {
  let newArr = [1, 2, 3, 4];
  return (
    <div className="flex flex-col items-center">
      <h1 className="flex items-center justify-center text-4xl font-semibold bg-yellow-500 text-slate-900 mb-10">
        React + Vite
      </h1>
      <Card username="Chai Aur Code" />
    </div>
  );
}

// Interview Question
// multiple set function in counter project, if we send callback function it executes all but function reference executes only once no matter how many times you send them.

export default App;
