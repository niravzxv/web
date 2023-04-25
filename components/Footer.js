function Footer() {
	const Footer = document.getElementById("Footer");
	const Container = document.createElement("div");
	Container.classList.add("container");
	Container.innerHTML = `
	<div class="footer-fist-row pt40">
		<div class="container">
			<div class="row footer-deg2">
				<div class="col-lg-3 col-5s ">
					<div class="footer-ree-c">
						<div class="footer-logo pt40">
							<a href="#"> <img src="images/footer-logo.svg" alt="Shivay Infotech" class="img"> </a>
						</div>
						<p class="mt15">Overall client rating is 4.9 out of 110 Clients for Shivay Infotech </p>
						<ul class="footer_social mt30">
							<li><a href="#" target="_blank"><i class="fab fa-twitter" aria-hidden="true"></i></a>
							</li>
							<li> <a href="#" target="_blank"><i class="fab fa-facebook-f"
										aria-hidden="true"></i></a></li>
							<li><a href="#" target="_blank"><i class="fab fa-youtube" aria-hidden="true"></i></a>
							</li>
							<li><a href="#" target="_blank"><i class="fab fa-linkedin-in"
										aria-hidden="true"></i></a></li>
							<li> <a href="#" target="_blank"><i class="fab fa-instagram" aria-hidden="true"></i></a>
							</li>
						</ul>
						<a href="#" class="ree-btn  ree-btn-grdt1 mw-80 no-shadows mt40">Our Brochure <i
								class="fas fa-arrow-right fa-btn"></i></a>
					</div>
				</div>
				<div class="col-lg-3 col-5s pl-1">
					<h5>For Work inquiry</h5>
					<ul class="footer-links-list social-linkz">
						<li><a href="tel:+917779092565"><span><i class="fas fa-phone-square-alt"></i></span> + 91
								7779-09-2565 </a>
						</li>
						<li><a href="https://wa.me/+917779092565"><span><i
										class="fab fa-whatsapp-square"></i></span> + 91 7779-09-2565</a></li>
						<li><a href="mailto:nirav.gondaliya@icloud.com"><span><i class="fas fa-envelope"></i></span>
								<span class="__cf_email__">nirav.gondaliya@icloud.com</span></a>
						</li>
						<li><a href="skype:live:niravgondaliya2565?chat"><span><i class="fab fa-skype"></i></span>
								Shivay Infotech
								-skype</a></li>
					</ul>
				</div>
				<div class="col-lg-3 col-5s">
					<h5>Company</h5>
					<ul class="footer-links-list">
						<li><a href="/about-us/"> About us</a></li>
						<li><a href="javascript:void(0)">Contact Us</a></li>
						<li><a href="javascript:void(0)">Privacy & Policy</a></li>
					</ul>
				</div>
				<div class="col-lg-3 col-5s">
					<h5>Services</h5>
					<ul class="footer-links-list">
						<li><a href="javascript:void(0)">Hire Dedicated Developers</a></li>
						<li><a href="javascript:void(0)">Web App Development</a></li>
						<li><a href="javascript:void(0)">Mobile App Development</a></li>
						<li><a href="javascript:void(0)">Search Engine Optimization</a></li>
						<li><a href="javascript:void(0)">Social Media Marketing</a></li>
					</ul>
				</div>
			</div>
		</div>
		<div class="container ft-cpy bt-top mt70">
			<div class="row">
				<div class="col-lg-5">
				</div>
				<div class="col-lg-7">
					<div class="ft-copyright ft-r">
						<p>Copyright © 2023 Shivay Infotech . All rights reserved.
					</div>
				</div>
			</div>
		</div>
	</div>

  `;
	Footer.appendChild(Container);
}
Footer();
