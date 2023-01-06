import Input from "./Input";

const ExerciseCard = ({ exercise }) => {
  //TODO: Make the heading as a input as well?
  const saveChanges = async (e, defaultValue, id, isRep, isWeight) => {
    if (e.target.value == defaultValue) {
      return false;
    }

    //TODO: Maybe refactor this? this looks a bit ugly
    const value = parseInt(
      isRep === true || (isRep === false && isWeight === false)
        ? e.target.value
        : 0
    );
    const repId = isRep === true ? id : 0;
    const setId = isRep === false ? id : 0;
    const weight = parseInt(isWeight === true ? e.target.value : 0);

    //TODO: Do something with the response also remove the no cors mode and handle it on the backend
    const response = await fetch(
      `http://127.0.0.1:3000/workout/${exercise.workout_id}/user/1`,
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          value: value,
          rep_id: repId,
          set_id: setId,
          weight: weight,
        }),
      }
    );
  };

  return (
    <div className="exercise-card">
      <div className="text-lg text-white">{exercise.name}</div>
      {exercise.sets.map((set) => {
        return (
          <div key={set.id} className="workout-reps-container">
            <div className="flex items-center mr-5 space-x-4">
              <Input
                defaultValue={set.value}
                saveChanges={saveChanges}
                id={set.id}
              />
              <p className="text-white">Sets</p>
            </div>
            <div className="flex items-center mr-5 space-x-4">
              <Input
                defaultValue={set.rep.value}
                saveChanges={saveChanges}
                id={set.rep.id}
                isRep={true}
              />
              <p className="text-white">Reps</p>
            </div>
            <div className="flex items-center mr-5 space-x-4">
              <Input
                defaultValue={set.weight}
                saveChanges={saveChanges}
                id={set.id}
                isWeight={true}
              />
              <p className="text-white">Kg</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExerciseCard;
