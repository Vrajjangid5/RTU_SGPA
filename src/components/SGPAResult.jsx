const SGPAResult = ({ sgpa }) => {
  let message;
  if (sgpa > 8.5 && sgpa < 10) {
    message = (
      <>
        Your SGPA is: <span className="text-black">{sgpa}</span> amazing buddy 😃
      </>
    );
  } else if (sgpa >= 6.5 && sgpa < 8.5) {
    message = (
      <>
        Your SGPA is: <span className="text-black">{sgpa}</span> superbb buddy 😃
      </>
    );
  } else if (sgpa > 5 && sgpa < 6.5) {
    message = (
      <>
        Your SGPA is: <span className="text-black">{sgpa}</span> 😃
      </>
    );
  } else {
    message = (
      <>
        Your SGPA is: <span className="text-black">{sgpa}</span>
      </>
    );
  }

  return (
    <div id="result" className="mt-8 text-xl font-semibold text-center max-w-xs mx-auto">
      {sgpa && (
        <div className="bg-white p-6 rounded-lg shadow-xl transition transform hover:scale-105">
          <p className="text-blue-600 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default SGPAResult;
