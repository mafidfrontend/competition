import "./App.css";
import "./main.scss";

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="Logo">
              <img src="/Logo.svg" alt="Saasto Logo" />
            </div>
            <ul>
              <li>
                <a href="#">Demos</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="navbarBtns">
              <button>Login</button>
              <button>Sign up</button>
            </div>
          </div>
        </nav>
        <div className="headerContent">
          <div className="container">
            <div className="headerTitleBox">
              <h1 className="headTitle">
                A collaborative Time Tracking that you Need
              </h1>
              <img src="/HeaderShape.svg" alt="Shape" />
            </div>
            <p className="headerDescription">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at pretium purus pretium ligula
            </p>
            <button>Start 14 Days Trial</button>
            <div className="position">
              <img className="mainSvg" src="/alarm.svg" alt="Shape" />
              <img src="/alarmShape.svg" alt="Shape" />
              <img src="/HeaderStar.svg" alt="Shape" />
              <img src="/oclock.svg" alt="Shape" />
              <img className="mainSvg" src="/clipboard.png" alt="Shape" />
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="features">
          <div className="container featuresContent">
            <div className="featuresTitleBox">
              <h2 className="featuresTitle">Some excellent features for you</h2>
              <img src="/HeaderShape.svg" alt="Shape" />
            </div>
            <p className="featuresDescription">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at pretium purus pretium ligula
            </p>
            <div className="featuresWrapper">
              <div className="featuresWrapperBox">
                <img src="/featuresBox1.svg" alt="Calendar" />
                <h3 className="featuresWrapperTitle">Preset List of Task</h3>
                <p className="featuresWrapperDesctiprion">
                  Make bill payments easily using the wallet app
                </p>
              </div>
              <div className="featuresWrapperBox">
                <img src="/featuresBox1.svg" alt="Alarm" />
                <h3 className="featuresWrapperTitle">Reminder of Task</h3>
                <p className="featuresWrapperDesctiprion">
                  Make bill payments easily using the wallet app
                </p>
              </div>
              <div className="featuresWrapperBox">
                <img src="/featuresBox1.svg" alt="Todo" />
                <h3 className="featuresWrapperTitle">Complecation Report</h3>
                <p className="featuresWrapperDesctiprion">
                  Make bill payments easily using the wallet app
                </p>
              </div>
            </div>
            <div className="position">
              <img src="/rocket.svg" alt="rocket" className="rocket" />
              <img src="/featuresStar.svg" alt="Shape" />
            </div>
          </div>
        </section>
        <section className="analitics">
          <div className="container analiticsContent">
            <img
              src="/analysis.png"
              alt="Analitics"
              className="analiticsImage"
            />
            <div className="analiticsBox">
              <div className="analiticsBoxTitleContent">
                <h2 className="analiticsBoxTitle">
                  Analytics & Reporting Brackdown
                </h2>
                <img src="/HeaderShape.svg" alt="Shape" />
              </div>
              <p className="analiticsBoxDescription">
                An enim nullam tempor sapien gravida donec enim ipsum porta
                justo congue magna at pretium purus pretium ligula
              </p>
              <div className="analivticsBoxWrapper">
                <div className="analivticsBoxWrap">
                  <img src="/auto.svg" alt="Analitics Icon" />
                  <div className="analiticsWrapBox">
                    <h3>Automatic event tracking</h3>
                    <p>
                      Time Tracking is never been easier. Just let the stopwatch
                      run
                    </p>
                  </div>
                </div>
                <div className="analivticsBoxWrap">
                  <img src="/content.svg" alt="Analitics Icon" />
                  <div className="analiticsWrapBox">
                    <h3>Customizable dashboard</h3>
                    <p>
                      Time Tracking is never been easier. Just let the stopwatch
                      run
                    </p>
                  </div>
                </div>
                <div className="analivticsBoxWrap">
                  <img src="/todo.svg" alt="Analitics Icon" />
                  <div className="analiticsWrapBox">
                    <h3>Statistics retroactively</h3>
                    <p>
                      Time Tracking is never been easier. Just let the stopwatch
                      run
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tracker">
          <div className="container trackerContent">
            <div className="trackerWrapper">
              <div className="trackerWrapperTitleBox">
                <h2 className="wrapperTitle">How our Tracker work for you</h2>
                <img src="/HeaderShape.svg" alt="" />
              </div>
              <p className="trackDescription">
                An enim nullam tempor sapien gravida donec enim ipsum porta
                justo congue magna at pretium purus pretium ligula
              </p>
              <div className="analivticsBoxWrapper">
                <div className="analivticsBoxWrap">
                  <img src="/trackBox1.png" alt="Analitics Icon" />
                  <div className="analiticsWrapBox">
                    <h3>Time Tracking</h3>
                    <p>
                      Time Tracking is never been easier. Just let the stopwatch
                      run
                    </p>
                  </div>
                </div>
                <div className="analivticsBoxWrap">
                  <img src="/trackBox2.png" alt="Analitics Icon" />
                  <div className="analiticsWrapBox">
                    <h3>Expenses</h3>
                    <p>
                      Time Tracking is never been easier. Just let the stopwatch
                      run
                    </p>
                  </div>
                </div>
                <div className="analivticsBoxWrap">
                  <img src="/trackBox3.png" alt="Analitics Icon" />
                  <div className="analiticsWrapBox">
                    <h3>Budget controlling</h3>
                    <p>
                      Time Tracking is never been easier. Just let the stopwatch
                      run
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img src="/track.png" alt="Tracker Image" className="trackImage" />
            <div className="position">
              <img src="/trackleft.png" alt="Shape" />
              <img src="/trackright.png" alt="Shape" />
              <img src="/trackArrowpink.svg" alt="" />
              <img src="/trackArrowblue.svg" alt="" />
            </div>
          </div>
        </section>
        <section className="work">
          <div className="container workContent">
            <div className="workTitleWrap">
              <h2 className="workTitle">Flexible work, Simple Price</h2>
              <img src="/HeaderShape.svg" alt="Shape" />
            </div>
            <p className="workDescription">
              Growth your business with using us
            </p>
            <div className="monthlyYearlyBox">
              <p>Monthly</p>
              <img src="/monthyear.png" alt="Monthly or Yearly" />
              <p>Yearly</p>
            </div>
            <div className="workWrapper">
              <div className="workWrap">
                <h2 className="wrapPrice">Free</h2>
                <p className="adventages">1 seat</p>
                <p className="adventages">2 project</p>
                <p className="price">
                  <sub>$</sub>
                  <span>0</span>
                  <sup>/forever</sup>
                </p>
                <button>Start 14 Days Trial</button>
              </div>
              <div className="workWrap">
                <h2 className="wrapPrice">Premium</h2>
                <p className="adventages">Unlimited Seat</p>
                <p className="adventages">Unlimited project</p>
                <p className="price">
                  <sub>$</sub>
                  <span>30</span>
                  <sup>/forever</sup>
                </p>
                <button>Start 14 Days Trial</button>
              </div>
            </div>
            <img
              src="/workOclock.svg"
              alt="Shape"
              className="position workOclock"
            />
            <img src="/Hand.svg" alt="Shape" className="position hand" />
          </div>
        </section>
        <section className="partners">
          <div className="container partnersContent">
            <div className="partnersImages">
              <div className="partnersLeft">
                <a href="#">
                  <img src="/1.png" alt="Partner" />
                </a>
                <a href="#">
                  <img src="/2.png" alt="Partner" />
                </a>
                <a href="#">
                  <img src="/3.png" alt="Partner" />
                </a>
              </div>
              <div className="partnersRight">
                <a href="#">
                  <img src="/4.png" alt="Partner" />
                </a>
                <a href="#">
                  <img src="/5.png" alt="Partner" />
                </a>
              </div>
            </div>
            <div className="aboutPartners">
              <div className="aboutTitle">
                <h2 className="aboutPartnersTitle">See Our trusted partners</h2>
                <img src="/HeaderShape.svg" alt="Shape" />
              </div>
              <p className="aboutPartnersDescription">
                Vero homero perfecto mei ut, sonet aperiam an nec. Ni nec dict
                altera legimu. Me vita de lege ndos expet end is ad. Ex mei
                omita aliu mi ando
              </p>
              <button>get started</button>
            </div>
          </div>
        </section>
        <section className="comments">
          <div className="container">
            <div className="commentsTitle">
              <h2>What our client says</h2>
              <img src="/HeaderShape.svg" alt="Shape" />
            </div>
            <p className="commentsDescription">
              Growth your business with using us
            </p>
            <div className="commentsBox">
              <img src="/commentor.png" alt="Comment's Auother" />
              <div className="commentsContent">
                <p className="comment">
                  Leading an organization is incredibly rewarding and equally
                  humbling. Confidence and humility. Every success is built on
                  lessons from mistakes made is incredibly rewarding
                </p>
                <div className="author">
                  <h3>Mila McSabbu</h3>
                  <p className="authoersJob">Designer</p>
                  <img src="/Navigator.svg" alt="Navigator" />
                </div>
              </div>
            </div>
            <img src="/chat.svg" alt="Shape" className="position chat" />
            <img src="/like.svg" alt="Shape" className="position like" />
            <img src="/emoji.svg" alt="Shape" className="position emoji" />
            <img
              src="/HeaderStar.svg"
              alt="Shape"
              className="position headerStar"
            />
            <img
              src="/Vector.svg"
              alt="Shape"
              className="position alarmShape"
            />
          </div>
        </section>
        <section className="ads">
          <div className="container">
            <div className="adsContent">
              <div className="adsTitleContent">
                <h3>Get it now for free</h3>
                <img src="/HeaderShape.svg" alt="Shape" />
              </div>
              <p className="adsDescription">
                We are offering free debit cards once you sing up and order a
                card. we wont chargeyou for our debit card.
              </p>
              <div className="adsButtons">
                <button>
                  <svg
                    width="18"
                    height="23"
                    viewBox="0 0 18 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.8458 11.8636C14.8565 11.0289 15.0782 10.2105 15.4903 9.48457C15.9023 8.75861 16.4912 8.14868 17.2023 7.7115C16.7506 7.06634 16.1547 6.5354 15.4618 6.16085C14.769 5.7863 13.9984 5.57845 13.2112 5.55382C11.5319 5.37756 9.90399 6.55865 9.04827 6.55865C8.17601 6.55865 6.8585 5.57132 5.43977 5.60051C4.5221 5.63016 3.62775 5.89701 2.84388 6.37507C2.06 6.85313 1.41332 7.52609 0.966855 8.32838C-0.967145 11.6768 0.475444 16.5979 2.32805 19.3045C3.25495 20.6298 4.33823 22.1103 5.75568 22.0578C7.14274 22.0002 7.66078 21.1733 9.33508 21.1733C10.9938 21.1733 11.4799 22.0578 12.9261 22.0244C14.4145 22.0002 15.3522 20.6931 16.2466 19.3552C16.9126 18.4109 17.425 17.3672 17.765 16.2627C16.9003 15.897 16.1624 15.2848 15.6433 14.5025C15.1241 13.7202 14.8468 12.8024 14.8458 11.8636Z"
                      fill="white"
                    />
                    <path
                      d="M12.1134 3.77382C12.9249 2.79961 13.3247 1.54744 13.2279 0.283203C11.9881 0.413424 10.8428 1.00598 10.0203 1.94281C9.61818 2.40048 9.31018 2.93291 9.11393 3.50968C8.91769 4.08645 8.83704 4.69625 8.87661 5.3042C9.49675 5.31059 10.1103 5.17618 10.6709 4.91109C11.2316 4.646 11.7248 4.25715 12.1134 3.77382Z"
                      fill="white"
                    />
                  </svg>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <span>Download on the</span>
                    <p>App Store</p>
                  </div>
                </button>
                <button>
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6038 15.3505L13.1175 11.82L16.6011 8.27208C19.0894 9.66066 20.9999 10.7216 21.367 10.9162C22.5525 11.5615 21.9501 12.3923 21.367 12.7063C21.2408 12.7698 20.1887 13.3553 18.6278 14.2238L18.6265 14.2246C18.3752 14.3644 18.1108 14.5116 17.835 14.6652C17.4457 14.882 17.0338 15.1114 16.6038 15.3505Z"
                      fill="#FF553E"
                    />
                    <path
                      d="M15.9691 15.7035L12.6272 12.3193L1.46004 23.6923C1.59461 23.6513 1.73743 23.5891 1.88994 23.5043C2.00418 23.441 2.28205 23.2873 2.69049 23.0614L2.71481 23.0479C5.01323 21.7767 11.3239 18.2862 15.9691 15.7035Z"
                      fill="#FF553E"
                    />
                    <path
                      d="M0.54767 23.6229C0.220008 23.3993 0.0484619 22.9316 0.0484619 22.3411V1.39114C0.0484619 0.738086 0.275853 0.33626 0.590777 0.130248L12.1356 11.8214L0.54767 23.6229Z"
                      fill="#FF553E"
                    />
                    <path
                      d="M1.44545 0L12.6258 11.3221L15.9549 7.93159C13.8906 6.79151 2.63532 0.575944 1.88975 0.174435C1.7481 0.0891815 1.59722 0.0318221 1.44545 0Z"
                      fill="#FF553E"
                    />
                  </svg>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                    }}
                  >
                    <span>GET IT ON</span>
                    <p>Google Play</p>
                  </div>
                </button>
              </div>
            </div>
            <img src="/Mobile.png" alt="Mobile Screen" />
            <img src="/Image1.png" alt="Shape" className="position Image1" />
            <img src="/Image2.png" alt="Shape" className="position Image2" />
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footerContent">
            <img src="/logo.svg" alt="SaaSto Logo" />
            <ul>
              <li>
                <a href="#">Demos</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="icons">
              <img src="/Instagram.svg" alt="Instagram" />
              <img src="/Linkedin.svg" alt="Linkedin" />
              <img src="/Facebook.svg" alt="Facebook" />
              <img src="/Twitter.svg" alt="Twitter" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
