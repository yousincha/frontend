import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="page-wrapper">
      <footer>
        <div className="footer-top border-t border-gray">
          <div className="container" style={{ margin: "auto" }}>
            <div className="widget footer_widget">
              <div
                className="gem-contacts-item mt-4 gem-contacts-address"
                style={{ textAlign: "center" }}
              >
                13201) 경기 성남시 중원구 갈마치로 302 (상대원동,
                성남우림라이온스밸리5차)B동 604호, 605호, 606호 | <b>TEL</b>{" "}
                031-731-4840 | <b>FAX</b> 031-731-4849
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          2024 © villiv micron co., Ltd. All RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
