const NameFilter = ({ searchName, searchTerm }) => {
    return (
        <input type="text" placeholder="Filter by name" onInput={searchName} value={searchTerm} />
    );
};

export default NameFilter;
