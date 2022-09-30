class FooterContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        .footer-content-wrapper {
          width: 90vw;
          margin: 0 auto;
          max-width: 1170px;
          margin-bottom: 2rem;
          font-family: 'Open Sans', sans-serif;
          font-size: .875rem;
        }
        
        .logo h1 {
          font-size: 1rem;
          color: #F5F8FA;
        }

        .logo h1 span {
          color: var(--clr-yellow);
        }

        .footer-brand {
          margin-bottom: 1.75rem;
        }
        
        .footer-brand .slogan {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        
        .footer-brand .social-links {
          display: flex;
          gap: .75rem;
        }
        
        .footer-brand .social-links a {
          display: inline-block;
        }
        
        .footer-brand .social-links a i {
          font-size: 1.5rem;
        }
        
        .footer-links {
          display: flex;
          gap: 1rem;
        }
        
        .footer-links ul {
          flex-grow: 1;
        }
        
        .footer-links .link-heading {
          font-weight: bold;
          margin-bottom: .5rem;
        }
      </style>
      <div class="footer-content-wrapper">
        <div class="footer-brand">
          <a href="#" class="logo">
            <h1><span>Hola</span>Flix</h1>
          </a>
          <p class="slogan">
              Get All Movies , TV Shows, Online cinema, and Movie Trailer.
          </p>
          <div class="social-links">
              <a target="_blank" href="https://www.instagram.com/sukronsabari_/">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/sukronsabari_/">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/sukronsabari_/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/sukronsabari_/">
                <i class="fa-brands fa-tiktok"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/sukronsabari_/">
                <i class="fa-brands fa-youtube"></i>
              </a>
          </div>
        </div>
        <div class="footer-links">
          <ul>
            <h3 class="link-heading">Information</h4>
            <li>About us</li>
            <li>Profile</li>
            <li>Pricing plans</li>
            <li>Contacts</li>
          </ul>
          <ul>
            <h3 class="link-heading">Browse</h4>
            <li>Movies</li>
            <li>TV Shows</li>
            <li>Kids</li>
            <li>Collections</li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-content', FooterContent);
