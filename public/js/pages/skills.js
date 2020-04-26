import Page from '../page.js'

export default class Skills extends Page {
	constructor() {
		super()
		this.html = `
    <section class="skill-set">
      <div class="skill-title">
        <h1>MY SKILLS</h1>
      </div>

      <div class="skills-info">
        <div class="skills">
        <p>TROUBLESHOOTING PC, LAPTOP, PRINTER, SCANNER & LAN</p>
          <div class="progress">
            <div class="progress-bar" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
        </div>

        <div class="skills">
        <p>CISCO & MIKROTIK ROUTER</p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
        </div>

        <div class="skills">
          <p>DHCP, DNS SERVER, DOMAIN CONTROLLER & ACTIVE DIRECTORY</p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
        </div>

        <div class="skills">
          <p>ADOBE PHOTOSHOP, ILUSTRATOR, AFTER EFFECT, XD & FIGMA</p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>
        </div>

        <div class="skills">
          <p>HTML, CSS, JAVASCRIPT, PHP, NODE.JS, EXPRESS & HANDLEBARS</p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
        </div>

        <div class="skills">
          <p>MONGO DB & MYSQL</p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
        </div>

      </div
    </section>
		`
	}
}