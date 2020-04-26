import Page from '../page.js'

export default class Home extends Page {
	constructor() {
		super()
		this.html = `
		<div class="home">
		<img src="/img/Untitled-2.jpg" id="bg" alt="">
			<div class="home-info">
				<h1>I’m Ivandi Santoso</h1>
				<h2>IT Technical Support</h2>
				<h3>Seeking an entry-level position to begin my carrier in a high level professional environment.</h3>
			</div>
		</div>
			`
	}
}