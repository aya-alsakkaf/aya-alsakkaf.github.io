class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header id="header" class="fixed-top">
      <div class="container d-flex align-items-center">
        <a class="navbar-brand" href="../src/index.html">
        <img src="../img/health.png" alt="logo" width="50" height="50">
        </a>
          <h1 class="logo me-auto"><a href="../index.html">HealthAssist</a></h1>


          <!--Navigation bar-->
          <nav id="navbar" class="navbar order-last order-lg-0">
              <ul>
                  <li><a class="nav-link active" href="../index.html">Home</a></li>
                   <li class="dropdown"><a style="text-decoration: none;" href="#"><span>Files</span><svg
                              xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                              class="bi bi-chevron-compact-down" style="margin-left: 5px" viewBox="0 0 16 16">
                              <path fill-rule="evenodd"
                                  d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z" />
                          </svg></a>
                      <ul>
                          <li><a href="../src/files.html" class="nav-link">Notes</a></li>
                          <li><a href="../src/labtests.html" class="nav-link">Lab Tests</a></li>
                      </ul>
                  </li>
                  <li><a class="nav-link" href="../src/booktest.html">Book a Test</a></li>
                  <li><a class="nav-link" href="../src/profile.html">Profile</a></li>
              </ul>
          </nav>
          <a href="../src/log-in.html" class="signup-btn order-last"><span class="d-none d-md-inline">Sign In/Up</span></a>
      </div>
  </header>
      `;
  }
}

customElements.define('header-component', Header);
