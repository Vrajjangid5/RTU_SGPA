
import { useState, useEffect } from "react";
import Header from "./components/Header";

import SemesterSelect from "./components/SemesterSelect";
import SubjectInputs from "./components/SubjectInputs";
import SGPAResult from "./components/SGPAResult";
import credits from "./utils/credits";
import gradePoints from "./utils/gradePoints";

const App = () => {
  const [semester, setSemester] = useState(0);
  const [subjects, setSubjects] = useState({});
  const [sgpa, setSgpa] = useState(null);

  useEffect(() => {
    renderSubjectInputs(semester);
  }, [semester]);

  const renderSubjectInputs = (semester) => {
    const selectedCredits = credits[semester];
    setSubjects(selectedCredits);
  };

  const calculateSGPA = () => {
    let totalCredits = 0;
    let totalGradePoints = 0;

    const subjectKeys = Object.keys(subjects);
    for (let i = 0; i < subjectKeys.length; i++) {
      const subject = subjectKeys[i];
      const gradeInput = document.getElementById(subject).value.toUpperCase();
      const gradePoint = gradePoints[gradeInput];

      if (gradePoint !== undefined) {
        totalGradePoints += gradePoint * subjects[subject];
        totalCredits += subjects[subject];
      }
    }

    const SGPA = totalGradePoints / totalCredits;
    setSgpa(SGPA.toFixed(2));
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mt-4 mb-8">
          Cool Buddy 😃
        </h2>
        <SemesterSelect semester={semester} setSemester={setSemester} />
        <SubjectInputs subjects={subjects} />
        <SGPAResult sgpa={sgpa} />
        <button
          id="calculate"
          className="text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 font-medium rounded-full text-lg px-5 py-2.5 mb-2 mt-4 transition duration-200 ease-in-out transform hover:scale-105 shadow-lg"
          onClick={calculateSGPA}
        >
          Calculate SGPA
        </button>
      </div>
    </>
  );
};

export default App;
