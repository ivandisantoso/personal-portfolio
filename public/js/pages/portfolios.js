import Page from '../page.js'

export default class Portfolios extends Page {
	constructor() {
		super()
		this.html = `
		<section>
			<h2>Projects</h2>

        <ul class="deck-card-list">
          <a href="https://darkairbnb.herokuapp.com/" target=”_blank”>
          <li class="card zoom">
          <img src="img/portfolio/peter-ivey-hansen-zGTkiFQtUFA-unsplash.jpg" alt="">
            <div class="card-content"> 
              <hr>    
              <h3>Dark Airbnb</h3>
              <p class="read-more">Read More</p>
            </div>
          </li>
          </a>

          <a href="https://darkairbnb.herokuapp.com/" target=”_blank”>
          <li class="card zoom">
          <img src="img/portfolio/peter-ivey-hansen-zGTkiFQtUFA-unsplash.jpg" alt="">
            <div class="card-content"> 
              <hr>    
              <h3>Dark Airbnb</h3>
              <p class="read-more">Read More</p>
            </div>
          </li>
          </a>

          <a href="https://darkairbnb.herokuapp.com/" target=”_blank”>
          <li class="card zoom">
          <img src="img/portfolio/peter-ivey-hansen-zGTkiFQtUFA-unsplash.jpg" alt="">
            <div class="card-content"> 
              <hr>    
              <h3>Dark Airbnb</h3>
              <p class="read-more">Read More</p>
            </div>
          </li>
          </a>
        
        </ul>
      
     `
	}
}