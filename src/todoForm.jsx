import React, { useState } from "react";
import "./styles.css";

function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");

  function Handing(e) {
    setValue(e.target.value);
  }

  function HandingSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    const DataSubmit = {
      title: value
    };
    onSubmit(DataSubmit);
  }

  return (
    <div>
      <form onSubmit={HandingSubmit}>
        <input value={value} onChange={Handing} />
      </form>
    </div>
  );
}

export default TodoForm;
