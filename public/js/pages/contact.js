import Page from '../page.js'

export default class Contact extends Page {
	constructor() {
		super()
		this.html = `
		<div class="contact">
			<div class="contact-title">
				<h1>GET IN TOUCH</h1>
			</div>
			<div class="contact-info">
			<ul>
				<li><a href="mailto:me@ivandisantoso.computer">Mail Us: me@ivandisantoso.computer</a></li>
				<li><a href="tel:+18193078777">Call Us: +1 (819) 307 8777</a></li>
			</ul>
			</div>
		</div>
		`
	}
}


