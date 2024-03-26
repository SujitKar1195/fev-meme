import { useSearchParams } from "react-router-dom";
import { createRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Text from "../components/Text";
import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);
  };

  const memeRef = createRef();

  return (
    <div className="ms-5 mt-3">
      <div
        ref={memeRef}
        style={{ border: "1px solid black", width: "700px", height: "auto" }}>
        <img src={params.get("url")} width={"300px"} />
        {Array(count)
          .fill(0)
          .map(() => (
            <Text />
          ))}
      </div>
      <Button onClick={addText}>Edit</Button>
      <Button
        variant={"success"}
        className="ms-2"
        onClick={() => exportComponentAsJPEG(memeRef)}>
        Save
      </Button>
    </div>
  );
};

export default EditPage;
