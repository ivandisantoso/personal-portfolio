import Page from '../page.js'

export default class About extends Page {
	constructor() {
		super()
		this.html = `
		<div class="about">
			<div class="about-title">
				<h1>About Me</h1>
			</div>	
			<div class="about-info">
				<h2>I’m a IT Technical Support from Indonesia	</h2>
				<p>I love to work with a team or independently with minimum supervision. I enjoy setting up the network infrastructure. I’m not a good in programming, I need to take more and more time to really understand that because programming needs very details command and logic. And also I’m not a good in designing area</p>
				<p>When I’m off from work, you’ll find me in the gym or on the basketball court or ice hockey place.</p>
				<div class="button"><a href="https://www.ivandisantoso.computer/docs/IvandiSantoso's-CV.pdf" target="_blank">View Resume</a> </div>
				
				<button id="dosomething">View Resume</button>
				<ul class="router">
					<li><a href="about/faculty">Faculty</a></li>
					<li><a href="about/students">Students</a></li>
				</ul>
				<article id="info"></article>
			</div>
		</div>
		`
		
	}
	registerListeners() {
		console.log('registerListeners() from: About')
		document.querySelector('#dosomething').addEventListener('click', event => {
			alert("It worked!")
		})
	}
	subrequests(path) {
		console.log(path) // The path (after the page) as an Array

		const $info = document.getElementById('info')

		// Depending on the first directive in the URL, load up different content (these can also be Page components!)
		if (path[0] == 'faculty') {
			$info.innerHTML = `<h3>Faculty</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo quam eius fuga facere, totam veritatis. Corporis, minima cum, maiores, voluptatem dignissimos illo consequuntur cumque repellat pariatur blanditiis itaque. Laboriosam.</p>`
		} else if (path[0] == 'students') {
			$info.innerHTML = `<h3>Students</h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo quam eius fuga facere, totam veritatis. Corporis, minima cum, maiores, voluptatem dignissimos illo consequuntur cumque repellat pariatur blanditiis itaque. Laboriosam.</p>`
		}

	}
}
