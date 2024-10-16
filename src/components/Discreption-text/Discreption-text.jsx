import "./Discreption-text.css";
const DiscreptionText = ({ title1, title2, text1, text2, text3 }) => {
  return (
    <>
      <div className="text-section">
        <div className="text-container d-flex flex-column flex-md-row justify-content-center gap-md-5 gap-2 align-items-center">
          <div className="ms-0 me-md-5">
            <p className="text1">{title1}</p>
            <p className="text2">{title2}</p>
          </div>
          <div className="d-flex justify-content-center align-items-center text-center text-md-start">
            <p className="p-text d-flex flex-column align-items ms-0 ms-md-5 justify-content-center">
              <span>{text1}</span>
              <span>{text2}</span>
              <span>{text3}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscreptionText;
