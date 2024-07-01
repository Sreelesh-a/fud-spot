import SearchClass from "./SearchClass";
const SearchClassComp = () => {
  return (
    <div className="body">
      <div className="profile-card">
        <div>
          <SearchClass
            name="Sreelesh A"
            position="Creative Designer"
            place="Calicut"
          />
        </div>
        <div>
          <SearchClass name="Mammootty" position="Actor" place="Ernakulam" />
        </div>
      </div>
    </div>
  );
};

export default SearchClassComp;
