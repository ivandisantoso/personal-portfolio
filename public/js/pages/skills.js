import Page from '../page.js'

export default class Skills extends Page {
	constructor() {
		super()
		this.html = `
    <div class="skills">
      <div class="skills-title">
        <h1>MY SKILLS</h1>
      </div>
      <div class="skills-info">
        <div class="skill1">
        <p>TROUBLESHOOTING PC, LAPTOP, PRINTER, SCANNER & LAN</p>
          <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div class="skill2">
        <p>CISCO & MIKROTIK ROUTER</p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

        <div class="skill3">
        <p>DHCP, DNS SERVER, DOMAIN CONTROLLER & ACTIVE DIRECTORY</p>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>

      </div
    </div>
		`
	}
}