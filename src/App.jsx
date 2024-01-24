import CountrySelector from "./CountrySelector";
import NameFilter from "./NameFilter";
import Table from "./Table";
import useUniversityData from "./useUniversityData";
import "./App.css"

const App = () => {
  const { totalPages, currentItems, handleChange, handlePageChange, searchName, searchTerm } = useUniversityData();

  return (
    <>
      <section className="containerInputSelect">
        <CountrySelector handleChange={handleChange} />
        <NameFilter searchName={searchName} searchTerm={searchTerm} />
      </section>
      <Table data={currentItems} />

      {Array.from({ length: totalPages }).map((_, index) => (
        <button key={index} onClick={() => handlePageChange(index + 1)}>
          {index + 1}
        </button>
      ))}

    </>
  );
};

export default App;
