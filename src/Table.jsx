import React, { useState } from "react";
import Modal from "react-modal";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [person, setPerson] = useState({ nom: "", prenom: "" });

  const addRow = (e) => {
    e.preventDefault();
    if (person.nom && person.prenom) {
      setTableData([...tableData, { nom: person.nom, prenom: person.prenom }]);
      Swal.fire("Félicitations!", "Utilisateur ajouté!", "success");
    } else {
      Swal.fire({
        title: "Erreur!",
        text: "Les données sont vides.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
    setIsOpen(false);
    setPerson({ ...person, ["nom"]: "", ["prenom"]: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({ ...person, [name]: value });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="w-full space-y-5 pt-10">
      <div className="flex justify-start md:w-[600px] w-[300px] lg:w-[800px]">
        <button
          className="bg-indigo-600 text-white px-5 py-2 rounded-md"
          onClick={openModal}
        >
          Ajouter une ligne
        </button>
      </div>

      <table
        className={`lg:w-[800px] md:w-[600px] w-[300px] border [&_th]:text-center ${
          tableData.length === 0 && "hidden"
        }`}
      >
        <thead className="bg-indigo-300">
          <tr>
            <th>N°</th>
            <th>Nom</th>
            <th>Prénom</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b py-2 text-center">
              <td>{index + 1}</td>
              <td>{row.nom}</td>
              <td>{row.prenom}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="border border-blue-700 absolute inset-x-5 inset-y-1/3 md:inset-[30%] bg-white flex flex-col items-center justify-around"
        overlayClassName="bg-[#00000066] fixed inset-0"
      >
        <h2 className="uppercase text-xl">Ajouter une personne</h2>
        <form className="flex flex-col space-y-5" onSubmit={addRow}>
          <input
            type="text"
            name="nom"
            placeholder="Entrer le nom"
            value={person.nom}
            onChange={handleChange}
            className="w-full border border-black outline-none px-5 py-2 [&_overlay]:bg-black"
          />
          <input
            type="text"
            name="prenom"
            placeholder="Entrer le prénom"
            value={person.prenom}
            onChange={handleChange}
            className="w-full border border-black outline-none px-5 py-2 [&_overlay]:bg-black"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-5  py-2 uppercase"
          >
            Enregister
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Table;
