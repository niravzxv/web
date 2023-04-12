function ContactForm() {
  const ContactForm = document.getElementById("ContactForm");
  const Container = document.createElement("div");
  Container.classList.add("container", "py-5");
  Container.innerHTML = `
  <div class="expert-block custom-padding">
  <div class="heading-txt text-center">
    <div class="bg-txt">Contact</div>
    <div class="small-heading-txt text-center">GET IN TOUCH</div>
    <h2>Consult With Our Experts Today!</h2>
  </div>
  <div class="contact-grid">
    <div class="form-box custom-form">
      <form class="contact-form" id="contact_us_form_footer" name="contact_us_form" method="post"
        action="/inquiry" enctype="multipart/form-data">
        <input type="hidden" name="redirect_from_page" class="redirect_from_page" value="">
        <input type="hidden" name="request_for" class="request_for">
        <input type="hidden" name="category" class="inquiry-catgory" class="">
        <div class="input-box ">
          <input type="text" name="first_name" placeholder="Full Name*" id="focusInput">
        </div>
        <div class="input-box ">
          <input type="email" name="email" placeholder="Email*">
        </div>
        <div class="input-box">
          <input id="phone_number" name="phone_number" placeholder="Phone Number*"
            class="phone_number" type="text">
        </div>
        <div class="input-box">
          <textarea name="message" placeholder="Message*" maxlength="500"></textarea>
          <div class="file-upload-wrapper" data-text="Attach file">
            <input name="document_file" id="document_upload" type="file"
              class="file-upload-field">
            <svg class="formsvg" xmlns="http://www.w3.org/2000/svg" width="16.011"
              height="15.082" viewBox="0 0 16.011 15.082">
              <g id="attachments" transform="translate(4 -13.856)">
                <g id="Group_65221" data-name="Group 65221"
                  transform="translate(-4 13.856)">
                  <path id="Path_21298" data-name="Path 21298"
                    d="M15.082,16.654a3.181,3.181,0,0,0-4.494,0L3.1,24.143a1.907,1.907,0,1,0,2.7,2.7l5.992-5.992-.9-.9L4.9,25.941a.636.636,0,1,1-.9-.9l7.49-7.49a1.907,1.907,0,1,1,2.7,2.7l-7.49,7.49A3.178,3.178,0,0,1,2.2,23.245l7.49-7.49-.9-.9L1.3,22.346a4.449,4.449,0,0,0,6.291,6.291l7.49-7.49A3.181,3.181,0,0,0,15.082,16.654Z"
                    transform="translate(0 -14.856)" fill="#858585" />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="btn form-btn"><input type="submit" value="Submit" name="submit"></div>
      </form>
    </div>
    <div class="content-box">
      <div class="static-txt">
        <h3>Your Benefits!</h3>
        <ul>
          <li>Professional Project Consultation</li>
          <li>Detailed Project Proposal</li>
        </ul>
      </div>
      <div class="call-mail">
        <div class="title-txt">Sales & Marketing</div>
        <div class="address-list">
          <a href="Info@shivayinfotech.org">
            <img src="/img/footer/mail.png" alt="Mail Us" height="36" width="36" />
            <span><span class="__cf_email__"
                data-cfemail="087b69646d7b487f6d6a6b676c6d6f6d66616d266b6765">Info@shivayinfotech.org</span></span></a>
        </div>
        <div class="address-list">
          <a href="tel:+916354010189">
            <img src="/img/footer/calling.png" alt="Call Us" height="36" width="36" />
            <span>+91 6354-0101-89</span> </a>
        </div>
        <div class="address-list">
          <a href="skype:live:niravgondaliya2565?chat">
            <img src="/img/footer/skype.png" alt="Mail Us" height="36" width="36" />

            <span>niravgondaliya</span> </a>
        </div>
      </div>
      <div class="call-mail">
        <div class="title-txt">Career Enquiry</div>
        <div class="address-list">
          <a href="mailto:Info@shivayinfotech.org">
            <img src="/img/footer/mail.png" alt="Mail Us" height="36" width="36" />
            <span><span class="__cf_email__"
                data-cfemail="Info@shivayinfotech.org">Info@shivayinfotech.org</span></span></a>
        </div>
        <div class="address-list">
          <a href="tel:+916354010189">
            <img src="/img/footer/calling.png" alt="Call Us" height="36" width="36" />
            <span>+91 6354-0101-89</span></a>
        </div>
      </div>
    </div>
  </div>
</div>
      `;
  ContactForm.appendChild(Container);
}
ContactForm();
