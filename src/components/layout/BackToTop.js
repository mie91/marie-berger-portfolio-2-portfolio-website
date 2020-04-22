import React from "react";
import IconUp from "../../assets/icons/icon_up.png";

const BackToTop = function () {
    function ScrollToTop() {
        window.scrollTo({ behavior: "smooth", top: 0 });
    }

    return <div className="to-top-container">
        <button className="return-top-btn" onClick={ScrollToTop}><img className="btnIcon" src={IconUp} alt="Up arrow" />
        </button>
    </div>;
};

export default BackToTop;