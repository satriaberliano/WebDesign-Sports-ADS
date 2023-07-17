import React from "react";

function AppFooter() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top_desc">
          <h4>
            ADS <br />
            Projects
          </h4>
          <p>Penjelasan ADS Project + Kenapa Website ini dibuat</p>
        </div>
        <div className="footer-top_category">
          <div className="footer-top_category-sub">
            <p>Category 1</p>
            <ul>
              <li>Sub-categories</li>
              <li>Sub-categories</li>
              <li>Sub-categories</li>
              <li>Sub-categories</li>
              <li>Sub-categories</li>
            </ul>
          </div>
          <div className="footer-top_category-sub">
            <p>Category 2</p>
            <ul>
              <li>Sub-categories</li>
              <li>Sub-categories</li>
              <li>Sub-categories</li>
              <li>Sub-categories</li>
            </ul>
          </div>
          <div className="footer-top_category-sub">
            <p>Category 3</p>
            <ul>
              <li>Sub-categories</li>
              <li>Sub-categories</li>
              <li>Sub-categories</li>
              <li>Sub-categories</li>
              <li>Sub-categories</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom_list">
          <ul>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="footer-bottom_copyright">
          <p>ADS Projects © 2023, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
