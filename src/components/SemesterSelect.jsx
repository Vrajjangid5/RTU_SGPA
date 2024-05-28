import credits from "../utils/credits";

const toRoman = (num) => {
  const romanNumerals = ["Ist", "IInd", "IIIrd", "IVth", "Vth", "VIth", "VIIth", "VIIIth"];
  return romanNumerals[num - 1];
};

const SemesterSelect = ({ semester, setSemester }) => {
  const handleChange = (event) => {
    setSemester(parseInt(event.target.value));
  };

  return (
    <div className="max-w-xs mx-auto mt-8">
      <label htmlFor="semester" className="block text-lg font-medium text-gray-800 mb-2">
        Select Semester
      </label>
      <select
        id="semester"
        value={semester}
        onChange={handleChange}
        className="block w-full px-4 py-3 mt-1 bg-gradient-to-r from-blue-100 to-blue-300 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-lg transition duration-200 ease-in-out transform hover:scale-105"
      >
        {credits.map((semester, index) => (
          <option key={index} value={index}>
            {`B.Tech ${toRoman(index + 1)} Sem`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SemesterSelect;
