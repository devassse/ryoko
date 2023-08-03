import logo from "./assets/imgs/ryoko-256.png";
import profile from "./assets/profile/perfil.jpg";
import "./App.css";

function App() {
  return (
    <div className="base">
      <section className="base-app">
        <section className="base-level-1">
          <section className="base-level-2">
            <section className="main-level">
              <aside className="aside-left-menu">
                <div className="logo">
                  <img src={logo} alt="Ryoko Logo" />
                  <h1>Ryokō</h1>
                </div>
                <div className="menu">
                  <ul>
                    <li className="active">
                      <a href="/dashboard">Dashboard</a>
                    </li>
                    <li>
                      <a href="/locations">Locations</a>
                    </li>
                    <li>
                      <a href="/weather">Weather</a>
                    </li>
                    <li>
                      <a href="/transations">Transactions</a>
                    </li>
                    <li>
                      <a href="/favorites">Favorites</a>
                    </li>
                   
                    <li>
                      <a href="/settings">Settings</a>
                    </li>
                  </ul>
                </div>
               <div className="signin">
                <ul>
                  {/* <li>
                    <a href="/login">Login</a>
                  </li> */}
                  <li>
                    <a href="/logout">Logout</a>
                  </li>
                </ul>
               </div>
              </aside>
              <article className="main-content">
                <h2>Hello <span>@Devasse</span></h2>
                <p className="welcome-caption">Welcome, Let's go and Explore the World!</p>
                <div className="locations">
                  <div className="location-card">
                    <span>Marrocos - Morrroco</span>
                    <span>110,000M Habitants</span>
                    <span>23ºC now</span>
                  </div>
                  <div className="location-card">
                    <span>Marrocos - Morrroco</span>
                    <span>110,000M Habitants</span>
                    <span>23ºC now</span>
                  </div>
                  <div className="location-card">
                    <span>Marrocos - Morrroco</span>
                    <span>110,000M Habitants</span>
                    <span>23ºC now</span>
                  </div>
                  <div className="location-card">
                    <span>Marrocos - Morrroco</span>
                    <span>110,000M Habitants</span>
                    <span>23ºC now</span>
                  </div>
                  <div className="location-card">
                    <span>Marrocos - Morrroco</span>
                    <span>110,000M Habitants</span>
                    <span>23ºC now</span>
                  </div>
                  <div className="location-card">
                    <span>Marrocos - Morrroco</span>
                    <span>110,000M Habitants</span>
                    <span>23ºC now</span>
                  </div>
                </div>
                <div className="best-locations">
                  <div className="best-location">
                    <div className="best-location-icon"></div>
                    <div className="best-location-description">
                      <h3>Lago Niassa</h3>
                      <span>beatful and fresheir </span>
                    </div>
                    <div className="best-location-price">
                      <h4>250<span> Mt/ngt</span></h4>
                    </div>
                  </div>
                  <div className="best-location">
                    <div className="best-location-icon"></div>
                    <div className="best-location-description">
                      <h3>Lago Niassa</h3>
                      <span>beatful and fresher </span>
                    </div>
                    <div className="best-location-price">
                      <h4>250<span> Mt/ngt</span></h4>
                    </div>
                  </div>
                </div>
              </article>
              <aside className="aside-right-user-info">
                <div className="user-profile">
                  <img src={profile} alt="@devasse" />
                  <div className="user-names">
                    <span>João Devson Mucavel</span>
                    <span>@devasse</span>
                  </div>                  
                </div>
                <div className="my-scheduler">
                    <h4>My scheduler</h4>
                  </div>
                  <div className="my-favorites">
                    <h4>My favorites</h4>
                  </div>
              </aside>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
