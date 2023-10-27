import React, { useState } from "react";

const AddEmployee = ({ setShow, setAllData, editingEmp, setEditingEmp }) => {
  const [counter, setCounter] = useState(5);

  const submitFunc = (e) => {
    e.preventDefault();
    if (editingEmp.id !== 0) {
      setAllData((prev) => {
        let temp = prev.findIndex((item) => item.id === editingEmp.id);
        prev[temp] = editingEmp;
        console.log(prev)
        return [...prev];
      });
      // console.log(editingEmp)
    }

    if (editingEmp.id === 0) {
      setAllData((prev) => {
        let obj = {
          ...editingEmp,
          id: counter,
        };
        return [...prev, obj];
      });
      // console.log(editingEmp)
      setCounter((prev) => ++prev);
    }

    setEditingEmp({
      id: 0,
      name: "",
      email: "",
      phone: "",
      age: "",
    });
  };

  return (
    <div>
      <form onSubmit={submitFunc}>
        <label>Name</label>
        <input
          required
          type="text"
          value={editingEmp.name}
          placeholder="Name"
          onChange={(e) =>
            setEditingEmp((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />
        <label>Email</label>
        <input
          required
          type="email"
          value={editingEmp.email}
          placeholder="Email"
          onChange={(e) =>
            setEditingEmp((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />
        <label>Phone</label>
        <input
          required
          type="number"
          value={editingEmp.phone}
          placeholder="Phone"
          onChange={(e) =>
            setEditingEmp((prev) => {
              return { ...prev, phone: e.target.value };
            })
          }
        />
        <label>Age</label>
        <input
          required
          type="number"
          value={editingEmp.age}
          placeholder="Age"
          onChange={(e) =>
            setEditingEmp((prev) => {
              return { ...prev, age: +e.target.value };
            })
          }
        />
        <button onClick={() => setShow(false)}>Cancel</button>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddEmployee;
