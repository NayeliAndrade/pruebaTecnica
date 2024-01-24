import TableRow from "./TableRow";

const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Alpha Two Code</th>
                    <th>Country</th>
                    <th>Domains</th>
                    <th>Web Pages</th>
                </tr>
            </thead>
            <tbody>
                {data.map((fila, index) => (
                    <TableRow key={index} fila={fila} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
