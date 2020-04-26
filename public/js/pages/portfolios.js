import Page from '../page.js'

export default class Portfolios extends Page {
	constructor() {
		super()
		this.html = `
    <section class="portfolio">
      <div class="portfolio-title">
        <h1>Projects</h1>
      </div>
      <ul class="deck-card-list">
        <li>
          <div class="card text-center zoom">
            <div class="card-header">
              Web Application
            </div>
            <div class="card-body">
              <svg class="bi bi-tv" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 13.5A.5.5 0 013 13h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 00-.254.302A1.46 1.46 0 001 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 00.538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 00.254-.302 1.464 1.464 0 00.143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 00-.302-.254A1.46 1.46 0 0013.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" clip-rule="evenodd"/>
              </svg>
              <h5 class="card-title">Dark Airbnb</h5>
              <p class="card-text">Dark airbnb is a prototype travel web application that allow people to search and book room in Canada.​</p>
              <a href="https://darkairbnb.herokuapp.com/" target="_blank" class="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </li>

        <li>
          <div class="card text-center zoom">
            <div class="card-header">
              Web Design
            </div>
            <div class="card-body">
              <svg class="bi bi-tv" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.5 13.5A.5.5 0 013 13h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM13.991 3H2c-.325 0-.502.078-.602.145a.758.758 0 00-.254.302A1.46 1.46 0 001 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 00.538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 00.254-.302 1.464 1.464 0 00.143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 00-.302-.254A1.46 1.46 0 0013.99 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" clip-rule="evenodd"/>
              </svg>
              <h5 class="card-title">Bukit Kirana Villas</h5>
              <p class="card-text">Bukit Kirana Villas website is a company profile website to convey specific, helpful information to a specific customer who looking for villa in Bali so that the customer knows something new or understands a villa better</p>
              <a href="http://www.bukitkiranavillas.com/" target="_blank" class="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </li>

        <li>
          <div class="card text-center zoom">
            <div class="card-header">
              Infrastructure
            </div>
            <div class="card-body">
            <svg class="bi bi-server" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2c0-1.105-2.239-2-5-2S3 .895 3 2s2.239 2 5 2 5-.895 5-2z"/>
              <path d="M13 3.75c-.322.24-.698.435-1.093.593C10.857 4.763 9.475 5 8 5s-2.857-.237-3.907-.657A4.881 4.881 0 013 3.75V6c0 1.105 2.239 2 5 2s5-.895 5-2V3.75z"/>
              <path d="M13 7.75c-.322.24-.698.435-1.093.593C10.857 8.763 9.475 9 8 9s-2.857-.237-3.907-.657A4.881 4.881 0 013 7.75V10c0 1.105 2.239 2 5 2s5-.895 5-2V7.75z"/>
              <path d="M13 11.75c-.322.24-.698.435-1.093.593-1.05.42-2.432.657-3.907.657s-2.857-.237-3.907-.657A4.883 4.883 0 013 11.75V14c0 1.105 2.239 2 5 2s5-.895 5-2v-2.25z"/>
            </svg>
              <h5 class="card-title">Network Topology</h5>
              <p class="card-text">A new network infrastructure topology of Bukit Kirana Villa. This includes foundational networking hardware, software, services and facilities​</p>
              <a href="https://ivandisantoso.computer/docs/Topologi-Bukit_Kirana_Villas-rev.jpg" target="_blank" class="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </li>
    
      </ul>
    </section>
     `
	}
}