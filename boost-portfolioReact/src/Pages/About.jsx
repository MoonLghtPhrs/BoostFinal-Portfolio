
const AboutMe = () => {
    return (
        <div className="Container">
        <header> 
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
              <a class="navbar-brand" href="../index.html">Portfolio</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link" href="../index.html">Home</a>
      </li>

      {/* <!-- About me dropdown--> */}
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="./About/about.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              About
            </a>
      <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="./About/about.html">About Me</a></li>
          <li><a class="dropdown-item" href="./blog.html">Resume</a></li>
      </ul>
      </li>

      {/* <!-- Bootcamp dropdown--> */}
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="./Bootcamp/bootcamp.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Bootcamp
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="./Bootcamp/mentors.html">Mentors</a></li>
          <li><a class="dropdown-item" href="./Bootcamp/projectList.html">Projects</a></li>
          <li><a class="dropdown-item" href="./Bootcamp/scores.html">Weekly Score</a></li>
          <li><a class="dropdown-item" href="#">Feedback</a></li>
        </ul>
      </li>

      {/* <!--Other section --> */}
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Coming soon</a>
      </li>
    </ul>
  </div>
</div>
      </nav>
  </header>




<div class="page-container">
   {/* <!-- Container for  entire page--> */}


  {/* <!-- Default Theme--> */}
  <div class="container" id="cardContainers">
 <div class ="row">
  <div class="col-md-3" id="profileimg"> 
    {/* <!-- Left column--> */}
    <h3>Greetings Earthling</h3>
  <div class="row" id="profileImgHover">
  
  {/* <!-- <div class="row">  <img src="../Assets/dbFVSBHD_400x400.png" alt="kaisei2"> </div> --> */}
  <div class="row" id="stats">

    <div class="row">
      
      <figure class="text-center">
        <blockquote class="blockquote">
          <p>You will succed. It is inevitable. Happiness is coming. You can't escape.</p>
        </blockquote>
        <figcaption class="blockquote-footer">
           <cite title="Source Title">Ominous positivity</cite> speaking good into the world in the most evil way possible.
        </figcaption>
      </figure>
      
    </div>

    <p><b>Passion:</b> Illustrator</p>
    <p><b>Designer:</b> UX, UI, and Graphic  </p>
    <p><b>Front End:</b> Rockstar</p>
    <p><b>Languages spoken:</b> English, Japanese, Korea, Java, HTML, CSS, Jacascript, Bootstrap</p>
  </div>
</div>
  
  
  </div> 
  
  {/* <!-- Left column end --> */}

  <div class="col-md-6" id="rightCard"> 
    {/* <!--Right Column--> */}
   <div class="decoLine"> <hr/> </div> <h2>Hi, I'm Vai!</h2> <div class="decoLine"> <hr/> </div>
  <p> I am an illustrator, a designer, a streamer and now a fullstack engineer. I grew up on a computer so it is only natural that I eventually began to develop software. I got my start on the old bastions of the internet (MySpace and Gaia.com) don't really basic front end tweeks. I've made all of the front end mistakes that are physically possible. Like yellow text on a red background. Look at me now! This entire website was coded by hand using bootstrap and vanilla HtML,CSS and Javascript elements. Isn't that neat? 
  </p>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum iure quam facilis ex esse. Officia, possimus placeat, in incidunt commodi id assumenda repellat, dolorem adipisci deserunt ut velit impedit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid perferendis eaque ducimus aut ut enim earum accusamus harum porro, nisi quaerat voluptate temporibus iusto id, ab sit doloribus non!
  </p>

  <h2>Road to SWE</h2>

  <h3> </h3>

  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Why SWE
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         Goals
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Tragic Backstory
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
  <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eum iure quam facilis ex esse. Officia, possimus placeat, in incidunt commodi id assumenda repellat, dolorem adipisci deserunt ut velit impedit.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, aliquid perferendis eaque ducimus aut ut enim earum accusamus harum porro, nisi quaerat voluptate temporibus iusto id, ab sit doloribus non!
  </p>

 </div>
</div> 
{/* <!-- Grid container End--> */}
</div>

        </div>
        </div>
    )
}
export default AboutMe;