import { AppLayout } from "../app";
const Error = () => {
  return (
    <div className="error-main">
      <div className="error-item">
        <div className="err-title">We'll be back shortly</div>

        <div className="err-desc">
          We are fixing a temporary glitch. Sorry for the inconvenience.
        </div>
        <a href="/">
          <div className="err-btn">Go Back</div>
        </a>
      </div>
    </div>
  );
};

export default Error;
