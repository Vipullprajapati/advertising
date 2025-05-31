import "./App.css";

function App() {
  return (
    <>
      <div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
      </div>
      <nav class="navbar">
        <div class="max-width">
          <div class="logo">
            <a href="#">VIP</a>
          </div>
          <ul class="menu">
            <li>
              <a href="#home" class="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" class="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#services" class="menu-btn">
                Services
              </a>
            </li>
            <li>
              <a href="#teams" class="menu-btn">
                Teams
              </a>
            </li>
            <li>
              <a href="#contact" class="menu-btn">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home section */}

      <section class="home" id="home">
        <div class="max-width">
          <div class="home-content">
            <div class="text-1">Hello, my name is</div>
            <div class="text-2">VIPUL PRAJAPATI</div>
            <div class="text-3">
              And I'm a <span class="typing">Web Developer</span>
            </div>

            <a href="#">
              <button>
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About section */}

      <section class="about" id="about">
        <div class="max-width">
          <h2 class="title">About me</h2>
          <div class="about-content">
            <div class="column right">
              <div class="column-left">
                <img class="profileimg" src="public/profile.png" alt="" />
              </div>
              <div class="text">
                I'm vipul and I'm a <span class="typing-2">web developer</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                ut voluptatum eveniet doloremque autem excepturi eaque, sit
                laboriosam voluptatem nisi delectus. Facere explicabo hic minus
                accusamus alias fuga nihil dolorum quae. Explicabo illo unde,
                odio consequatur ipsam possimus veritatis, placeat, ab molestiae
                velit inventore exercitationem consequuntur blanditiis omnis
                beatae. Dolor iste excepturi ratione soluta quas culpa
                voluptatum repudiandae harum non.
              </p>
              <a href="#">Download CV</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}

      <div class="services" id="services">
        <div class="max-width">
          <h2 class="title">MY SERVICES</h2>
          <div class="serv-content">
            <div class="card">
              <div class="text">🔧 Custom Website Development</div>
              <p>
                I build responsive, fast-loading, and SEO-friendly websites
                tailored to your brand and goals — whether it's a personal blog,
                company site, or full-scale web application.
              </p>
            </div>
            <div class="card">
              <div class="text">🌐 Web App Development</div>
              <p>
                I design and build dynamic web applications, SPAs, dashboards,
                and admin panels using modern JavaScript frameworks.
              </p>
            </div>
            <div class="card">
              <div class="text">⚙️ API Integration & Development</div>
              <p>
                Custom API development and integration with third-party services
                (e.g., payment gateways, social logins, CRMs, or external data
                providers).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills section */}

      <section class="skills" id="skills">
        <div class="max-width">
          <h2 class="title">My skills</h2>
          <div class="skills-content">
            <div class="column left">
              <div class="text">My creative skills & experiences.</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, ratione error est recusandae consequatur, iusto
                illum deleniti quidem impedit, quos quaerat quis minima sequi.
                Cupiditate recusandae laudantium esse, harum animi aspernatur
                quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem
                illum. Ad delectus natus aut hic explicabo minus quod.
              </p>
              <a href="#">
                <button>
                  <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path
                          fill="currentColor"
                          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <span>Send</span>
                </button>
              </a>
            </div>
            <div class="column right">
              <div class="bars">
                <div class="info">
                  <span>HTML</span>
                  <span> 90%</span>
                </div>
                <div class="line html"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>CSS</span>
                  <span> 60%</span>
                </div>
                <div class="line css"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>JavaScript</span>
                  <span> 80%</span>
                </div>
                <div class="line js"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>React</span>
                  <span> 70%</span>
                </div>
                <div class="line mysql"></div>
              </div>
              <div class="bars">
                <div class="info">
                  <span>Node Js</span>
                  <span> 70%</span>
                </div>
                <div class="line mysql"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams section */}

      <section class="teams" id="teams">
        <div class="max-width">
          <h2 class="title">MY TEAMS</h2>
          <div class="carousel owl-carousel">
            <div class="card">
              <div class="box">
                <img src="public/profile.png" alt="" />
                <div class="text">Someone name</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div class="card">
              <div class="box">
                <img src="public/profile.png" alt="" />
                <div class="text">Mr abhishek patel</div>
                <p>He is a professional Web Developer </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* login section */}

      {/* Footer section */}

      <footer class="footer">
        <span>
          Created By <a href="#">CodingVipul</a> |{" "}
          <span class="far fa-copyright"></span> 2025 All rights reserved.
        </span>
      </footer>
    </>
  );
}

export default App;
