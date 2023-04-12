function Navbar() {
	const navbar = document.getElementById("Navbar");
	const Container = document.createElement("header");
	Container.classList.add("main-header");
	Container.innerHTML = `
	<div class="header-wrapper">
	<div class="container">
		<div class="hide-tab">
			<a class="logo" href="/">
				<img src="./images/logo-no-background.svg" alt="Logo" width="300" height="75" />
			</a>
			<nav>
				<ul>
					<li id="servicesList">
						<div class="menu-title">services</div>
						<div id="servicesSubMenu" class="dropdown-submenu ">
							<div class="container">
								<ul class="main-sub-menu">
									<li>
										<a href="/services/web-development">
											<img loading="lazy"
												src="https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5617617-4674328.png"
												alt="Web Development" height="36" width="36" />
											<div>
												<h6>Web Development</h6>
												<p>Build your digital presence with our top-notch web
													development services</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/services/mobile-app-development">
											<img loading="lazy" src="/images/web.png"
												alt="Mobile App Development" height="36" width="36" />
											<div>
												<h6>Mobile App Development</h6>
												<p>Unlock the power of mobile with our expert app development
													services - your ideas, our innovation</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/services/web-design-company">
											<img loading="lazy" src="/images/web.png" alt="Web Design"
												height="36" width="36" />
											<div>
												<h6>Web Design</h6>
												<p>Transform your digital vision into a stunning reality with
													our premium web design services</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/services/software-testing">
											<img loading="lazy" src="/images/web.png" alt="Dev Ops" height="36"
												width="36" />
											<div>
												<h6>Software Testing</h6>
												<p>Deliver flawless software with our top-rated testing services
													- quality you can rely on</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/services/digital-marketing">
											<img loading="lazy" src="/images/web.png" alt="Digital Marketing"
												height="36" width="36" />
											<div>
												<h6>Digital Marketing</h6>
												<p>Boost your online presence and skyrocket your sales with our
													dynamic digital marketing services</p>
											</div>
										</a>
									</li>

									<li>
										<a href="/services/cloud-computing-agency">
											<img loading="lazy" src="/images/web.png" alt="Cloud Computing"
												height="36" width="36" />
											<div>
												<h6>Cloud Computing</h6>
												<p>Transform your business with our cloud computing services -
													scalable, secure, and always available</p>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li id="technologyList">
						<div class="menu-title">Technology</div>
						<div id="techSubMenu" class="dropdown-submenu ">
							<div class="container">
								<div class="tech-grid">
									<div class="tech-col">
										<div class="tech-box">
											<img loading="lazy"
												src="https://img.webcodegenie.com/img/header/tech-fronend.svg"
												alt="Frontend Technologies" height="36" width="36" />
											<div>
												<h4>Frontend</h4>
												<ul>
													<li><a href="/technology/angular">Angular</a></li>
													<li><a href="/technology/reactjs">ReactJS</a></li>
													<li><a href="/technology/javascript">JavaScript</a></li>
													<li><a href="/technology/backbonejs">Backbone JS</a></li>
													<li><a href="/technology/handlebarjs">HandleBar JS</a></li>
													<li><a href="/technology/ecmascript">ECMA Script</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="tech-col">
										<div class="tech-box">
											<img loading="lazy"
												src="https://img.webcodegenie.com/img/header/tech-backend.svg"
												alt="Backend Technologies" height="36" width="36" />
											<div>
												<h4>Backend</h4>
												<ul>
													<li><a href="/technology/nodejs">NodeJS</a></li>
													<li><a href="/technology/expressjs">ExpressJS</a></li>
													<li><a href="/technology/socketio">Socket.io</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="tech-col">
										<div class="tech-box">
											<img loading="lazy"
												src="https://img.webcodegenie.com/img/header/tech-mobile.svg"
												alt="App Technologies" height="36" width="36" />
											<div>
												<h4>Mobile App</h4>
												<ul>
													<li><a href="/technology/android">Android</a></li>
													<li><a href="/technology/ios">iOS</a></li>
													<li><a href="/technology/react-native">ReactNative</a></li>
													<li><a href="/technology/flutter">Flutter</a></li>
													<li><a href="/technology/kotlin">Kotlin</a></li>
													<li><a href="/technology/swift">Swift</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="tech-col">
										<div class="tech-box">
											<img loading="lazy"
												src="https://img.webcodegenie.com/img/header/tech-cms.svg"
												alt="CMS Technologies" height="36" width="36" />
											<div>
												<h4>CMS</h4>
												<ul>
													<li><a href="/technology/wordpress">Wordpress</a></li>
												</ul>
											</div>
										</div>
										<div class="tech-box database-custom">
											<img loading="lazy"
												src="https://img.webcodegenie.com/img/header/tech-db.svg"
												alt="Database Technologies" height="36" width="36" />
											<div>
												<h4>Databse</h4>
												<ul>
													<li><a href="/technology/mysql">MySQL</a></li>
													<li><a href="/technology/mongodb">MongoDB</a></li>
													<li><a href="/technology/redis">Redis</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li id="hireList">
						<div class="menu-title">Hire Developers</div>
						<div id="hireSubMenu" class="dropdown-submenu ">
							<div class="container">
								<div class="tech-grid">
									<div class="tech-col">
										<div class="tech-box">
											<img loading="lazy"
												src="https://img.webcodegenie.com/img/header/tech-backend.svg"
												alt="Backend Technologies" height="36" width="36" />
											<div>
												<h4>Backend Developers</h4>
												<ul>
													<li><a href="/hire-nodejs-developers">Hire NodeJS
															Developers</a></li>
												</ul>
											</div>
										</div>
									</div>
									<div class="tech-col">
										<div class="tech-box">
											<img loading="lazy"
												src="https://img.webcodegenie.com/img/header/tech-mobile.svg"
												alt="Mobile App Development" height="36" width="36" />
											<div>
												<h4>Mobile Developers</h4>
												<ul>
													<li>
														<a href="/hire-android-developers">Hire Android
															Developers</a>
													</li>
													<li><a href="/hire-ios-developers">Hire iOS Developers</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div class="tech-col">
										<div class="tech-box">
											<img loading="lazy"
												src="https://img.webcodegenie.com/img/header/tech-backend.svg"
												alt="Backend Technologies" height="36" width="36" />
											<div>
												<h4>Frontend Developers</h4>
												<ul>
													<li><a href="/hire-angularjs-developers">Hire AngularJs
															Developer</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li id="company">
						<div class="menu-title">COMPANY</div>
						<div id="companySubMenu" class="dropdown-submenu ">
							<div class="container">
								<ul class="main-sub-menu">
									<li>
										<a href="/about-us">
											<img loading="lazy"
												src="https://img.webcodegenie.com/img/header/about.svg"
												alt="Web Development" height="36" width="36" />
											<div>
												<h6>About us</h6>
												<p>Our collaborative approach ensures a seamless and successful
													digital journey for our clients.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/career/">
											<img loading="lazy"
												src="https://img.webcodegenie.com/img/header/portfolio.svg"
												alt="Big Data" height="36" width="36" />
											<div>
												<h6>Careers</h6>
												<p>Take your career to the next level and join us on the
													forefront of digital innovation.</p>
											</div>
										</a>
									</li>
									<li>
										<a href="/contact-us">
											<img loading="lazy"
												src="https://img.webcodegenie.com/img/header/contact-us.svg"
												alt="Cloud Computing" height="36" width="36" />
											<div>
												<h6>Contact us</h6>
												<p>Let's start a conversation about how we can bring your
													digital vision to life - reach out to us today.</p>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ul>
				<a class="btn" href="/contact-us/">GET FREE QUOTE</a>
			</nav>
		</div>
		<div class="show-tab">
			<a href="/" class="logo">
				<img src="/images/long-logo.png" class="logo-main" alt="Logo" height="60" width="240">
			</a>
			<nav>
				<div class="nav-mobile">
					<div id="nav-toggle"><span></span></div>
				</div>
				<ul class="nav-list">
					<li class="has-child">
						<div class="main-link">Services</div>
						<ul class="nav-dropdown">
							<li><a href="/services/web-development">Web Development</a></li>
							<li><a href="/services/mobile-app-development">Mobile App Development</a></li>
							<li><a href="/services/big-data-development">Big Data</a></li>
							<li><a href="/services/cloud-computing-agency">Cloud Computing</a></li>
							<li><a href="/services/software-testing">Software Testing</a></li>
							<li><a href="/services/web-design-company">Web Design</a></li>
							<li><a href="/services/digital-marketing">Digital Marketing </a></li>
						</ul>
					</li>
					<li class="has-child nested-child">
						<div class="main-link">Technology</div>
						<ul class="nav-sub-dropdown">
							<li class="has-sub-child">
								<div class="sub-link">Frontend</div>
								<ul class="nav-dropdown">
									<li><a href="/technology/angular">Angular</a></li>
									<li><a href="/technology/reactjs">ReactJS</a></li>
									<li><a href="/technology/javascript">JavaScript</a></li>
									<li><a href="/technology/backbonejs">Backbone JS</a></li>
									<li><a href="/technology/handlebarjs">HandleBar JS</a></li>
									<li><a href="/technology/ecmascript">ECMA Script</a></li>
								</ul>
							</li>
						</ul>
						<ul class="nav-sub-dropdown">
							<li class="has-sub-child">
								<div class="sub-link">Backend</div>
								<ul class="nav-dropdown">
									<li><a href="/technology/nodejs">NodeJS</a></li>
									<li><a href="/technology/expressjs">ExpressJS</a></li>
									<li><a href="/technology/socketio">Socket.io</a></li>
								</ul>
							</li>
						</ul>
						<ul class="nav-sub-dropdown">
							<li class="has-sub-child">
								<div class="sub-link">Mobile App</div>
								<ul class="nav-dropdown">
									<li><a href="/technology/android">Android</a></li>
									<li><a href="/technology/ios">iOS</a></li>
									<li><a href="/technology/react-native">ReactNative</a></li>
									<li><a href="/technology/flutter">Flutter</a></li>
									<li><a href="/technology/kotlin">Kotlin</a></li>
									<li><a href="/technology/objective-C">Objective C</a></li>
									<li><a href="/technology/swift">Swift</a></li>
								</ul>
							</li>
						</ul>
						<ul class="nav-sub-dropdown">
							<li class="has-sub-child">
								<div class="sub-link">CMS</div>
								<ul class="nav-dropdown">
									<li><a href="/technology/wordpress">Wordpress</a></li>
								</ul>
							</li>
						</ul>
						<ul class="nav-sub-dropdown">
							<li class="has-sub-child">
								<div class="sub-link">Database</div>
								<ul class="nav-dropdown">
									<li><a href="/technology/mysql">MySQL</a></li>
									<li><a href="/technology/mongodb">MongoDB</a></li>
									<li><a href="/technology/redis">Redis</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="has-child">
						<div class="main-link">Hire Developers</div>
						<ul class="nav-sub-dropdown">
							<li class="has-sub-child">
								<div class="sub-link">Backend</div>
								<ul class="nav-dropdown">
									<li><a href="/technology/nodejs">NodeJS</a></li>
								</ul>
							</li>
						</ul>
						<ul class="nav-sub-dropdown">
							<li class="has-sub-child">
								<div class="sub-link">Mobile App</div>
								<ul class="nav-dropdown">
									<li><a href="/hire-android-developers">Android</a></li>
									<li><a href="/hire-ios-developers">iOS</a></li>
								</ul>
							</li>
						</ul>
						<ul class="nav-sub-dropdown">
							<li class="has-sub-child">
								<div class="sub-link">Frontend Developers</div>
								<ul class="nav-dropdown">
									<li><a href="/hire-angularjs-developers">Hire ReactJs Developer</a></li>
								</ul>
							</li>
						</ul>
					</li>
					<li class="has-child">
						<div class="main-link">Company</div>
						<ul class="nav-dropdown">
							<li><a href="/about-us">About us</a></li>
							<li><a href="/life-at-shivay-infotech">Life @Shivay infotech</a></li>
							<li><a href="/career/">Careers</a></li>
							<li><a href="/contact-us">Contact us</a></li>
						</ul>
					</li>
					<li><a class="btn" href="/contact-us">Get In Touch</a></li>
				</ul>
			</nav>
		</div>
	</div>
</div>
    `;
	navbar.appendChild(Container);
}
Navbar();
