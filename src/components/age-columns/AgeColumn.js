import { useEffect, useState } from "react";
import Card from "../Card";
import "./AgeColumn.css";

const AgeColumn = (props) => {
  const [displayData, setDisplayData] = useState(props.colData);
  
  useEffect(() => {
    setDisplayData(props.colData);
  }, [props.colData]);

  return (
    <div className="age-column">
      <button
        onClick={() => {
          setDisplayData((prev) => {
            const sortedData = [...prev].sort((a, b) => {
              let comparison = 0;
              if (a.name.toUpperCase() > b.name.toUpperCase()) {
                comparison = 1;
              } else if (a.name.toUpperCase() < b.name.toUpperCase()) {
                comparison = -1;
              }
              return comparison;
            });
            return sortedData;
          });
        }}
      >
        Sort
      </button>
      {displayData?.map((item, idx) => (
        <Card key={idx} data={item} setSelectedEmpId={props.setSelectedEmpId} />
      ))}
    </div>
  );
};

export default AgeColumn;
