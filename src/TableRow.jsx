
const TableRow = ({ fila }) => {
    return (
        <tr>
            <td>{fila.name}</td>
            <td>{fila.alpha_two_code}</td>
            <td>{fila.country}</td>
            <td>{fila.domains[0]}</td>
            <td>{fila.web_pages[0]}</td>
        </tr>
    );
};

export default TableRow;
