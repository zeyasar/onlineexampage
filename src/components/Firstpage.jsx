import React from "react";
import "./Firstpage.css";

const Firstpage = () => {
  return (
      <div className="row">
            <div className="menu col-2">
              <div className="logo d-flex p-3">
                <div
                  className="icon mb-4 mx-3"
                  style={{ transform: "rotate(45deg)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-file-earmark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                  </svg>
                </div>
                <p className="brand h4">examica</p>
              </div>
              <div className="testbutton text-center mb-4">
                <button type="button" className="btn btn-primary btn-m">
                  Nowy Test
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-plus ms-4 mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </button>
              </div>
              <div className="navigation p-4">
                <ul className="nav flex-column mb-5">
                  <li className="mb-3 ms-2">Testy</li>
                  <li className="mb-3 ms-2">Wszystkie</li>
                  <li className="mb-3 ms-2">Udostepnione</li>
                  <li className="mb-3 ms-2">Ostatnie</li>
                  <li className="mb-3 ms-2">Usuniete</li>
                </ul>
              </div>
              <div className="line"></div>
              <div className="settings m-4">
                <div className="letters">
                  <p className="h7">Ustawienia</p>
                  <p className="h7">Polityka Prywatności</p>
                </div>
                <div className="setlogo">
                  <div className="setlogoTop d-flex p-2">
                    <p className="mt-2">Skorzystaj ze wszystkich mozliwości</p>
                    <div className="setLogoSvg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        fill="currentColor"
                        className="bi bi-gear-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
                      </svg>
                    </div>
                  </div>
                  <div className="d-grid gap-2">
                    <button className="buttonset p-2" type="button">
                      Zmien taryfe
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="main col-10">
              <nav>
              
              </nav>
            </div>
      </div>
  );
};

export default Firstpage;
