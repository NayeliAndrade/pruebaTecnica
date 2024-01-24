import { useEffect, useState } from "react";

const useUniversityData = () => {
    const [selectCountry, setSelectCountry] = useState("");
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemPerPage = 20;

    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(`http://universities.hipolabs.com/search?country=${selectCountry}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            });
    }, [selectCountry]);

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handleChange = (e) => setSelectCountry(e.target.value);

    const totalPages = Math.ceil(filteredData.length / itemPerPage);

    const handlePageChange = (page) => setCurrentPage(page);

    const searchName = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filteredResults = data.filter((fila) =>
            fila.name.toLowerCase().includes(searchTerm)
        );
        setFilteredData(filteredResults);
    };

    return { data, currentPage, totalPages, currentItems, handleChange, handlePageChange, searchName, searchTerm };
};

export default useUniversityData;
