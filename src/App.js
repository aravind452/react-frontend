import Navbar from "./Components/Navbar";
import "./App.css";
import Medicines from "./Components/Medicines";

function App() {
  const medicines = [
    {
      id: 1,
      title: "Paracetamol",
      amount: 94.12,
    },
    { id: 2, title: "Hectic", amount: 799.49 },
    {
      id: 3,
      title: "Dolo 650",
      amount: 294.67,
    },
    {
      id: 4,
      title: "Saridon",
      amount: 450,
    },
  ];
  return (
    <div>
      <Navbar></Navbar>
      <Medicines title={medicines[0].title}
      amount={medicines[0].amount}></Medicines>
      <Medicines title={medicines[1].title}
      amount={medicines[1].amount}></Medicines>
      <Medicines title={medicines[2].title}
      amount={medicines[2].amount}></Medicines>
      <Medicines title={medicines[3].title}
      amount={medicines[3].amount}></Medicines>
    </div>
  );
}

export default App;
