function Footer() {
	const Footer = document.getElementById("Footer");
	const Container = document.createElement("div");
	Container.classList.add("container");
	Container.innerHTML = `
			<div class="footer-top">
				<a class="logo" href="/">
					<img src="/images/long-logo.png" alt="Logo" width="300" height="75" />
				</a>
			</div>
		</div>
		<div class="border-down"></div>
		<div class="container">
			<div class="footer-grid">
				<div class="f-block location-address">
					<div class="country-block">
						<div class="title-txt">India</div>
						<ul class="address">
							<li>
								<div class="icon">
								<img src="/img/footer/icon/pin.svg" alt="pin" height="15"
								width="20" />
								</div>
								Shivay infotech 206, Village Lothada, <br> opposit bus stand, <br>kotadasangani main
								road <br> ,Rajkot -360024, Gujarat
							</li>
							<li>
								<div class="icon">
								<img src="/img/footer/icon/telephone.svg" alt="location"
								height="15" width="20" />
								</div>
								<a href="tel:+916354010189">+91 635-401-0189</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="f-block services-links">
					<div class="title-txt">SERVICES</div>
					<ul class="services">
						<li><a href="/services/web-development">Web Development</a></li>
						<li><a href="/services/mobile-app-development">Mobile Development</a></li>
						<li><a href="/services/web-design-company">Web Design</a></li>
						<li><a href="/services/software-testing">Software Testing</a></li>
						<li><a href="/services/digital-marketing">Digital Marketing</a></li>
						<li><a href="/services/cloud-computing-agency">Cloud Computing</a></li>
						<li><a href="/services/iot-development">IoT</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="footer-bottom">
				<span>© Shivay infotech PVT LTD. All Right Reserved
					2023.</span>
				<ul class="other-link">
					<li>
						<a href="/privacy-policy">Privacy Policy</a>
					</li>
					<li>
						<a href="/terms-and-conditions">Terms and Conditions</a>
					</li>

				</ul>
				<ul class="socail-list">
					<li>
						<a href="" target="_blank">
							<img src="/img/footer/linkedin.png" alt="linkedin" height="32" width="32" />
						</a>
					</li>
					<li>
						<a href="" target="_blank">
							<img src="/img/footer/instagram.png" alt="instagram" height="32" width="32" />
						</a>
					</li>
					<li>
						<a href="" target="_blank">
							<img src="/img/footer/youtube.png" alt="you-tube" height="32" width="32" />
						</a>
					</li>
					<li>
						<a href="" target="_blank">
							<img src="/img/footer/twitter.png" alt="twitter" height="32" width="32" />
						</a>
					</li>
					<li>
						<a href="" target="_blank">
							<img src="/img/footer/facebook.png" alt="facebook" height="32" width="32" />
						</a>
					</li>
					<li>
						<a href="" target="_blank">
							<img src="/img/footer/pinterest.png" alt="pinterest" height="32" width="32" />
						</a>
					</li>
				</ul>
			</div>
  `;
	Footer.appendChild(Container);
}
Footer();
