function ServiceSideBar() {
    const Features = document.getElementById("ServiceSideBar");
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `
    <ul>
			<li>
				<a href="/services/web-development">
					<span class="img-box"><img
							src="https://img.webcodegenie.com/img/services/sidebar-web-developemnt.svg"
							alt="Web Development" /></span>
					<span>Web Development</span>
				</a>
			</li>
			<li>
				<a href="/services/mobile-app-development">
					<span class="img-box"><img
							src="https://img.webcodegenie.com/img/services/sidebar-app-development.svg"
							alt="Mobile App Development" /></span>
					<span>Mobile App Development</span>
				</a>
			</li>
			<li>
				<a href="/services/web-design-company">
					<span class="img-box"><img src="https://img.webcodegenie.com/img/services/sidebar-webdesign.svg"
							alt="Web Design" /></span>
					<span>Web Design</span>
				</a>
			</li>
			<li>
				<a href="/services/software-testing">
					<span class="img-box"><img
							src="https://img.webcodegenie.com/img/services/sidebar-software-testing.svg"
							alt="Software Testing" /></span>
					<span>Software Testing</span>
				</a>
			</li>
			<li>
				<a href="/services/digital-marketing">
					<span class="img-box"><img
							src="https://img.webcodegenie.com/img/services/sidebar-digital-marketing.svg"
							alt="Digital Marketing" /></span>
					<span>Digital Marketing</span>
				</a>
			</li>
			<li>
				<a href="/services/iot-development">
					<span class="img-box"><img src="https://img.webcodegenie.com/img/services/sidebar-iot.svg"
							alt="IoT" /></span>
					<span>IoT</span>
				</a>
			</li>
			<li>
				<a href="/services/big-data-development">
					<span class="img-box"><img src="https://img.webcodegenie.com/img/services/sidebar-big-data.svg"
							alt="Big Data" /></span>
					<span>Big Data</span>
				</a>
			</li>
			<li>
				<a href="/services/cloud-computing-agency">
					<span class="img-box"><img
							src="https://img.webcodegenie.com/img/services/sidebar-cloud-computing.svg"
							alt="Cloud Computing" /></span>
					<span>Cloud Computing</span>
				</a>
			</li>
		</ul>
      `;
    ServiceSideBar.appendChild(Container);
}
ServiceSideBar();
