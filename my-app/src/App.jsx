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
            <a href="#">
              Portfo<span>lio.</span>
            </a>
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
            <div class="text-2">vipul prajapati</div>
            <div class="text-3">
              And I'm a <span class="typing"></span>
            </div>
            <a href="#">Hire me</a>
          </div>
        </div>
      </section>


      {/* About section */}

      <section class="about" id="about">
        <div class="max-width">
          <h2 class="title">About me</h2>
          <div class="about-content">
            <div class="column right">
              <div class="text">
                I'm Prakash and I'm a <span class="typing-2"></span>
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

    </>
  );
}

export default App;
