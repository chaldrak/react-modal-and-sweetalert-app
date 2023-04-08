import { useEffect, useState } from "react";
import axios from "./services/axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

const numbers = [
  "669-DA8-219",
  "669-DA15-417",
  "669-DA13-353",
  "669-DA19-544",
  "669-DA10-265",
  "669-DA11-299",
  "669-DA2-42",
  "669-DA17-488",
  "669-DA6-162",
  "669-DA9-247",
];

function App() {
  const [result, setResult] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("André");
  const [rows, setRows] = useState([1, 1]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function addRow() {
    var table = rows;
    table.push(2);
    setRows(table);
  }

  useEffect(() => {
    return;
  }, [rows]);

  const handleResearch = () => {
    fetchResult();
  };

  // const fetchResult = async () => {
  //   const table = [];
  //   try {
  //     numbers.forEach(async (number) => {
  //       console.log("num", number);
  //       const res = await axios.get(number);
  //       console.log(res.data);
  //       table.push(res.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setResult(table);
  //   }
  // };

  const fetchResult = async () => {
    try {
      const res = await axios.get("669-DA9-247");
      console.log(res.data);
      setResult(res.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  // if (result.length === 0) return "Chargement en cours ...";
  // else
  return (
    <div className="p-10 space-y-5">
      <p>Voici mon application de recherche des résultats...</p>
      <button
        className="bg-indigo-600 text-white px-5 py-2 rounded-md"
        onClick={handleResearch}
      >
        Rechercher
      </button>
      <button
        className="bg-indigo-600 text-white mx-3 px-5 py-2 rounded-md"
        onClick={openModal}
      >
        Open Modal
      </button>
      <button
        className="bg-indigo-600 text-white px-5 py-2 rounded-md"
        onClick={addRow}
      >
        Add row
      </button>
      <table className="w-[800px] border [&_th]:text-center">
        <thead className="bg-indigo-500">
          <tr>
            <th>N°</th>
            <th>Num Table</th>
            <th>Nom</th>
            <th>Prénoms</th>
            <th>Sexe</th>
            <th>Série</th>
            <th>Jury</th>
            <th>Verdict</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => (
            <tr key={index} className="border-b hover:bg-indigo-300">
              <td>{item}</td>
            </tr>
          ))}
          {/* {result.map((item, index) => (
            <tr className="border-b hover:bg-indigo-300" key={index}>
              <td>{index + 1}</td>
              <td>{item.tableNumber}</td>
              <td>{item.lastname}</td>
              <td>{item.firstname}</td>
              <td>{item.gender}</td>
              <td>{item.serie}</td>
              <td>{item.jury}</td>
              <td>{item.verdict}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="border border-blue-700 absolute inset-1/3 bg-white flex flex-col items-center justify-around"
        overlayClassName="bg-[#00000066] fixed inset-0"
      >
        <h2 className="bg-blue-700 text-white p-5 rounded-lg">{name}</h2>
        <form className="flex">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-r-0 border-black outline-none px-5 py-2 [&_overlay]:bg-black"
          />
          <button
            className="bg-red-600 text-white px-5 border border-black border-l-0 uppercase"
            onClick={closeModal}
          >
            close
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
