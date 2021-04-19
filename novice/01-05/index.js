Vue.component("header-component", {
  template: `
  <header class="header-nav d-flex">
        <div class="header-title">
          <h5 class="my-auto">Praxis Academy</h5> 
        </div>
        <div class="d-flex ">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Kelas</a></li>
          </ul>
        </div>
      </header>
  `,
});

Vue.component("main-component", {
  template: `
  <div class="main">
    Ini Isinya main
  </div>
  
  `,
});

Vue.component("footer-component", {
  template: `
  <div class="footer">
    ini footer
  </div>
  `,
});
const vm = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
  },
});
