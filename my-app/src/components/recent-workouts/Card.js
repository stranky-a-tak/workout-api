import moment from "moment";
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  const navigate = useNavigate();
  const workout = props.workout;

  
  return (
    <button className="flex justify-between items-center bg-gray-600 rounded-3xl py-5 px-8 w-1/2"
      onClick={() => navigate(`/show/${workout.id}`)}
    >
        <p>{workout.name}</p>
        <p>
          { moment(workout.created_at).format("MMMM D") }
        </p>
    </button>
  );
};

export default Card;
