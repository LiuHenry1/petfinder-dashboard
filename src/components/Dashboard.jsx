import List from "./List";
import Stat from "./Stat";
import Chart from "./Chart";


const Dashboard = ({ listToDisplay, filter, updateFilter }) => {
  return (
    <>
      {listToDisplay ? (
        <div className="main">
          <div className="summary">
            <Stat type="Number of results" value={listToDisplay.length} />
            <Stat type="Location" value="Chicago" />
            <Stat
              type="Search for "
              value={`Type:${filter.type}, Gender:${filter.gender}, Age:${filter.age}`}
            />
            <Chart animalList={listToDisplay} />
          </div>
          <List animalList={listToDisplay} handleChange={updateFilter} />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Dashboard;