import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <p>{props.data.name}</p>
      <p>{props.data.email}</p>
      <p>{props.data.phone}</p>
      <p>{props.data.age}</p>
      <div>
        <button
          id={props.data.id}
          onClick={() => props.setSelectedEmpId({ task: 0, id: props.data.id })}
        >
          Edit
        </button>
        <button
          id={props.data.id}
          onClick={() => props.setSelectedEmpId({ task: 1, id: props.data.id })}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
