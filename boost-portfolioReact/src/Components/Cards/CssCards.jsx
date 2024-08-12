import css from ".../"

const CssCards = () => {
    return (
<div class="container">
<div class="row">
  <div class="example-1 card">
    <div class="wrapper">
      <div class="date">
        <span class="day">12</span>
        <span class="month">Aug</span>
        <span class="year">2016</span>
      </div>
      <div class="data">
        <div class="content">
          <span class="type">Project</span>
          <h1 class="title"><a href="#">Project Card</a></h1>
          <p class="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""</p>
          <label for="show-menu" class="menu-button"><span></span></label>
        </div>
        <input type="checkbox" id="show-menu" />
        <ul class="menu-content">
          <li><a href="#"><i class="fab fa-github"></i></a></li>
          <li><a href="#"><i class="fab fa-html5"></i></a></li>
          <li><a href="#"><i class="fab fa-css3-alt"></i></a></li>
          <li><a href="#"><i class="fab fa-js"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  
  <div class="example-2 card">
    <div class="wrapper">
      <div class="date">
        <span class="day">12</span>
        <span class="month">Aug</span>
        <span class="year">2016</span>
      </div>
      <div class="data">
        <div class="content">
          <span class="type">Project</span>
          <h1 class="title"><a href="#">Project Card</a></h1>
          <p class="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="example-3 card">
    <div class="wrapper">
      <div class="date">
        <span class="day">12</span>
        <span class="month">Aug</span>
        <span class="year">2016</span>
      </div>
      <ul class="menu-content">
          <li><a href="#"><i class="fab fa-github"></i></a></li>
          <li><a href="#"><i class="fab fa-html5"></i></a></li>
          <li><a href="#"><i class="fab fa-css3-alt"></i></a></li>
          <li><a href="#"><i class="fab fa-js"></i></a></li>
      </ul>
      <div class="data">
        <div class="content">
          <span class="type">Project</span>
          <h1 class="title"><a href="#">Project Card</a></h1>
          <p class="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""</p>
        </div>
      </div>
    </div>
  </div>
  
    <div class="example-4 card">
    <div class="wrapper">
      <div class="date">
        <span class="day">Project</span>
      </div>
      <ul class="menu-content">
          <li><a href="#"><i class="fab fa-github"></i></a></li>
          <li><a href="#"><i class="fab fa-html5"></i></a></li>
          <li><a href="#"><i class="fab fa-css3-alt"></i></a></li>
          <li><a href="#"><i class="fab fa-js"></i></a></li>
      </ul>
      <div class="data">
        <div class="content">
          <span class="type">Project</span>
          <h1 class="title"><a href="#">Project Card</a></h1>
          <p class="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""</p>
        </div>
      </div>
    </div>
  </div>
  
  <div class="example-5 alternate-card">
    <div class="wrapper">
      <div class="date">
        <span class="day">Project</span>
      </div>
      <div class="data">
        <div class="content">
          <span class="type">Project</span>
          <h1 class="title"><a href="#">Project Card</a></h1>
          <p class="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.""</p>
           <ul class="menu-content">
            <li><a href="#"><i class="fab fa-github"></i></a></li>
            <li><a href="#"><i class="fab fa-html5"></i></a></li>
            <li><a href="#"><i class="fab fa-css3-alt"></i></a></li>
            <li><a href="#"><i class="fab fa-js"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
    );
}
export default CssCards