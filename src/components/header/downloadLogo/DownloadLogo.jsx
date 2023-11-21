import icon from "../../../images/downloadLogo1.svg";
import "./downloadLogo.scss";

const DownloadLogo = () => {
  return (
    <div className="downloadLogo">
      <div className="downloadLogo_wrapper">
        <div className="downloadLogo_wrapper_text">Download</div>
        <div className="downloadLogo_wrapper_icon">
          <img src={icon} alt="downloadLogo" />
        </div>
      </div>
    </div>
  );
};
export default DownloadLogo;
