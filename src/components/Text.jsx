import Draggable from "react-draggable";
import { useState } from "react";
const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double click to Edit");
  return (
    <div className="text-success">
      <Draggable>
        {editMode ? (
          <input
            className="input-field"
            onDoubleClick={() => setEditMode(false)}
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        ) : (
          <h1 onDoubleClick={() => setEditMode(true)}>{val}</h1>
        )}
      </Draggable>
    </div>
  );
};

export default Text;
