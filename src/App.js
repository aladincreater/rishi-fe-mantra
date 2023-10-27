import { useEffect, useRef, useState } from "react";
import "./App.css";
import CloumnContainer from "./components/age-columns/CloumnContainer";
import AddEmployee from "./components/form/AddEmployee";

const initData = [
  {
    id: 1,
    name: "jainam",
    email: "jainam@dn.com",
    phone: "11234",
    age: 12,
  },
  {
    id: 2,
    name: "rishi",
    email: "r@c.c",
    phone: "342523",
    age: 33,
  }
];

const App = () => {
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState(initData);
  const [selectedEmpId, setSelectedEmpId] = useState({ task: null, id: null });
  const [editingEmp, setEditingEmp] = useState({
    id: 0,
    name: "",
    email: "",
    phone: "",
    age: "",
  });

  const dataRef = useRef(allData);

  // let handleEdit = () => {

  // }

  // let handleDelete = () => {

  // }
  useEffect(() => {
    console.log("hi");
    if (selectedEmpId.task === 0) {
      setEditingEmp(allData.find((item) => item.id === selectedEmpId.id));
      setSelectedEmpId({ task: null, id: null });
    }
    if (selectedEmpId.task === 1) {
      setAllData((prev) => prev.filter((item) => item.id !== selectedEmpId.id));
      setSelectedEmpId({ task: null, id: null });
    }
  }, [selectedEmpId, allData]);
  console.log("aldaat");

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setAllData((prev) =>
        prev.filter(
          (item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            String(item.age).includes(e.target.value) ||
            item.email.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setAllData(dataRef.current);
    }
  };

  return (
    <div className="App">
      <div>
        <button onClick={() => setShow(true)}>Add</button>
        <input type="search" onChange={handleChange} />
      </div>
      <div className="containers">
        <CloumnContainer data={allData} setSelectedEmpId={setSelectedEmpId} />
        {show && (
          <AddEmployee
            setShow={setShow}
            setAllData={setAllData}
            editingEmp={editingEmp}
            setEditingEmp={setEditingEmp}
          />
        )}
      </div>
    </div>
  );
};

export default App;
