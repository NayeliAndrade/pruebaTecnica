const CountrySelector = ({ handleChange }) => {
    return (
        <select name="country" onChange={handleChange}>
            <option value="mexico">Mexico</option>
            <option value="United+States">United States</option>
        </select>
    );
};

export default CountrySelector;
