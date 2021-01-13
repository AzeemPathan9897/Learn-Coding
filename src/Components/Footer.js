import React, { Component } from "react";
import "../Components/Footer.css";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      // <div>
      //   <footer className="footer mt-auto py-3  ">
      //     <div className="container ">
      //       <span className="text-muted">
      //         Place sticky footer content here.
      //       </span>
      //     </div>
      //   </footer>
      // </div>
      <React.Fragment>
        <footer className="bottom-categories ">
          <div className="container bg-light">
            <div className="footer-links">
              <div className="row">
                <div className="col-6 col-sm-3 clm">
                  <h5 className="bg-info">Learn</h5>
                  <ul className="unordered-list ">
                    <li className="list">
                      <Link to="https://www.bitdegree.org/learn/">
                        Programming Languages
                      </Link>
                    </li>
                    <li className="list">
                      <Link
                        to="https://www.bitdegree.org/free-certifications-online"
                        target="_blank"
                        rel="noopener"
                      >
                        Get Certified
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="https://www.bitdegree.org/learn/sitemap">
                        Sitemap
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="https://www.bitdegree.org/learn/code-examples">
                        Code Examples
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-sm-3 clm">
                  <h5 className="hSet">Web Development</h5>
                  <ul className="unordered-list">
                    <li className="list">
                      <Link to="https://www.bitdegree.org/learn/html">
                        HTML
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="https://www.bitdegree.org/learn/css">CSS</Link>
                    </li>
                    <li className="list">
                      <Link to="https://www.bitdegree.org/learn/javascript">
                        JavaScript
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-3 clm">
                  <h5 className="hSet">Server Side</h5>
                  <ul className="unordered-list">
                    <li className="list ">
                      <Link to="https://www.bitdegree.org/learn/php">PHP</Link>
                    </li>
                    <li className="list">
                      <Link to="https://www.bitdegree.org/learn/sql">SQL</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-3 clm">
                  <h5 className="hSet" >Tools</h5>
                  <ul className="unordered-list">
                    <li className="list">
                      <Link to="https://www.bitdegree.org/learn/best-code-editor">
                        Code Editor
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="https://www.bitdegree.org/learn/color-scale">
                        Color Picker
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="https://www.bitdegree.org/learn/chrome-devtools">
                        Devtools
                      </Link>
                    </li>
                    <li className="list">
                      <Link to="https://www.bitdegree.org/learn/git">Git</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
