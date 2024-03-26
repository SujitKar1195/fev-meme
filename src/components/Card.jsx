import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MemeCard = ({ name, url }) => {
  const navigate = useNavigate();
  return (
    <div className="col">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button
            variant="primary"
            onClick={() => navigate(`/edit?url=${url}`)}>
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MemeCard;
