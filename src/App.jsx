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
                <p className="price"><sub>$</sub><span>0</span><sup>/forever</sup></p>
                <button>Start 14 Days Trial</button>
              </div>
              <div className="workWrap">
                <h2 className="wrapPrice">Premium</h2>
                <p className="adventages">Unlimited Seat</p>
                <p className="adventages">Unlimited project</p>
                <p className="price"><sub>$</sub><span>30</span><sup>/forever</sup></p>
                <button>Start 14 Days Trial</button>
              </div>
            </div>
            <img src="/workOclock.svg" alt="Shape" className="position workOclock" />
            <img src="/Hand.svg" alt="Shape" className="position hand" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
