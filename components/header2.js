class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">
          <a class="navbar-brand" href="#">
          <img src="../img/health.png" alt="logo" width="50" height="50">
          </a>
            <h1 class="logo me-auto"><a href="#">HealthAssist<sub style="font-size: x-small;">Clinic</sub></a></h1>
           


           
  
  
            <!--Navigation bar-->
            <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                    <li><a class="nav-link active" href="../src/result.html">Send Result</a></li>
                     
                    <li><a class="nav-link" href="../src/Addtest.html">Add a Test</a></li>
                    <li><a class="nav-link" href="../src/orders.html">Orders</a></li>

                </ul>
            </nav>
           
        </div>
    </header>
        `;
    }
  }
  
  customElements.define('header-component', Header);
  