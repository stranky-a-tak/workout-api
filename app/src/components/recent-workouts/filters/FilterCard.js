const FilterCard = ({ filter, setWorkouts, setIsFiltered }) => {
  const filterByName = async (name) => {
    //TODO: User
    const response = await fetch(
      `http://127.0.0.1:3000/workouts/user/1/filter/${name}`
    );

    const body = await response.json();
    setWorkouts(body.workouts);
    setIsFiltered(true);
  };

  return (
    <button className="bg-gray-700 rounded-full p-3"
      onClick={() => {
        filterByName(filter.name);
      }}
    >
      <p>{filter.name}</p>
    </button>
  );
};
export default FilterCard;
