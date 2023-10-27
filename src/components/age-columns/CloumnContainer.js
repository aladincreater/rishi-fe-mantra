import { useEffect, useState } from "react";
import AgeColumn from "./AgeColumn";
import "./ColumnContainer.css";

const CloumnContainer = ({ data, setSelectedEmpId }) => {
//   console.log(data);
  // const [compoData, setCompoData] = useState([...data])

//   const [array1, setArray1] = useState(data.filter((item) => item.age >= 1 && item.age <= 18))
//   const [array2, setArray2] = useState(data.filter((item) => item.age >= 19 && item.age <= 25))
//   const [array3, setArray3] = useState(data.filter((item) => item.age >= 26 && item.age <= 45))
//   const [array4, setArray4] = useState(data.filter((item) => item.age >= 46))
  const [array1, setArray1] = useState([])
  const [array2, setArray2] = useState([])
  const [array3, setArray3] = useState([])
  const [array4, setArray4] = useState([])

  useEffect(() => {
    setArray1(data.filter((item) => item.age >= 1 && item.age <= 18))
    setArray2(data.filter((item) => item.age >= 19 && item.age <= 25))
    setArray3(data.filter((item) => item.age >= 26 && item.age <= 45))
    setArray4(data.filter((item) => item.age >= 46))
    console.log(data)
  }, [data])

//   let array3 = data.filter((item) => item.age >= 26 && item.age <= 45);
//   let array4 = data.filter((item) => item.age >= 46);
//   console.log(array1, array2, array3, array4);
  return (
    <div className="column-container">
      <div className="age-column-container">
        <p>1 - 18</p>
        <AgeColumn colData={array1} setSelectedEmpId={setSelectedEmpId} />
      </div>
      <div className="age-column-container">
        <p>19 - 25</p>
        <AgeColumn colData={array2} setSelectedEmpId={setSelectedEmpId} />
      </div>
      <div className="age-column-container">
        <p>26 - 45</p>
        <AgeColumn colData={array3} setSelectedEmpId={setSelectedEmpId} />
      </div>
      <div className="age-column-container">
        <p>45+</p>
        <AgeColumn colData={array4} setSelectedEmpId={setSelectedEmpId} />
      </div>
    </div>
  );
};

export default CloumnContainer;
