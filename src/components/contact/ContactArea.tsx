'use client'

import React from 'react';
import { CONTACT } from '@/data/contact';

const ContactArea = () => {

  return (
    <>
      <div className="cs_height_150 cs_height_lg_120"></div>
      <section>
        <div className="container">
          <div className="cs_contact_ms">
            <div className="cs_contact">
              <div className="cs_contact_text">
                <p className="cs_contact_subtitle anim_text_upanddowns">
                  Kontaktirajte nas
                </p>
                <h1 className="cs_contact_title anim_text_writting">
                  Javite nam se
                </h1>
              </div>
                <div className="row">
                <div className="col-md-4">
                  <div className="cs_icon">
                    <a href="https://www.google.com/maps" className="cs_icon_style">
                      <i>
                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 0.0195312C3.14027 0.0195312 0 3.01027 0 6.68621C0 7.78973 0.289693 8.88387 0.840408 9.85434L6.6172 17.8047C6.69411 17.9373 6.84065 18.0195 7 18.0195C7.15935 18.0195 7.30589 17.9373 7.3828 17.8047L13.1617
                              9.85105C13.7103 8.88387 14 7.78969 14 6.68617C14 3.01027 10.8597 0.0195312 7 0.0195312ZM7 10.0195C5.07014 10.0195 3.50002 8.52418 3.50002 6.68621C3.50002 4.84824 5.07014 3.35289 7 3.35289C8.92986 3.35289 10.5 4.84824 10.5 6.68621C10.5
                              8.52418 8.92986 10.0195 7 10.0195Z" fill="white"></path>
                        </svg>
                      </i>
                    </a>
                    <div className="cs_icon_text">
                      <h6 className="cs_icon_title">Adresa</h6>
                      <p className="cs_icon_subtitle">{`${CONTACT.address.streetAddress}, ${CONTACT.address.addressLocality}`}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_icon">
                    <a href={`tel:${CONTACT.phone}`} className="cs_icon_style">
                      <i>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.6837 11.9266C13.0957 11.3461 12.3616 11.3461 11.7773 11.9266C11.3316 12.3686 10.8859 12.8105 10.4477 13.26C10.3278 13.3836 10.2267 13.4098 10.0806 13.3274C9.79225 13.1701 9.48513 13.0427 9.20797 12.8704C7.91581 12.0577 6.8334 11.0127 5.87458 9.83668C5.39891 9.2524 4.97568 8.62692 4.6798 7.92279C4.61987 7.78046 4.63111 7.68683 4.74721 7.57072C5.19292 7.14 5.62738 6.69805 6.06559 6.25609C6.67609 5.64185 6.67609 4.92273 6.06185 4.30474C5.71353 3.95268 5.3652 3.6081 5.01688 3.25604C4.65733 2.89648 4.30151 2.53318 3.93821 2.17736C3.35018 1.60432 2.61609 1.60432 2.03181 2.18111C1.58236 2.62306 1.15164 3.07626 0.694705 3.51072C0.271476 3.91148 0.0579884 4.40212 0.0130438 4.97517C-0.0581186 5.90777 0.17035 6.78794 0.492454 7.64563C1.15164 9.42095 2.15541 10.9978 3.37266 12.4435C5.01688 14.3986 6.97947 15.9454 9.27539 17.0615C10.3091 17.5634 11.3803 17.9492 12.5451 18.0129C13.3466 18.0578 14.0433 17.8556 14.6013 17.2301C14.9834 16.8031 15.4141 16.4136 15.8186 16.0053C16.4178 15.3986 16.4216 14.6645 15.8261 14.0652C15.1145 13.3499 14.3991 12.6382 13.6837 11.9266Z"
                            fill="white"></path>
                        </svg>
                      </i>
                    </a>
                    <div className="cs_icon_text">
                      <h6 className="cs_icon_title">Telefon</h6>
                      <p className="cs_icon_subtitle">{CONTACT.phone}</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="cs_icon">
                    <a href={`mailto:${CONTACT.email}`} className="cs_icon_style">
                      <i>
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.5043 8.78757C10.0565 9.08612 9.53631 9.24394 9 9.24394C8.46373 9.24394 7.94356 9.08612 7.49574 8.78757L0.119848 3.87016C0.0789258 3.84288 0.0390586 3.81444 0 3.78519V11.8429C0 12.7667 0.749707 13.4999 1.65702 13.4999H16.3429C17.2668 13.4999 18 12.7502 18 11.8429V3.78516C17.9608 3.81448 17.9209 3.84299 17.8799 3.87031L10.5043 8.78757Z"
                            fill="white"></path>
                          <path
                            d="M0.704883 2.99347L8.08077 7.91091C8.35998 8.09707 8.67997 8.19012 8.99996 8.19012C9.31999 8.19012 9.64002 8.09703 9.91923 7.91091L17.2951 2.99347C17.7365 2.69939 18 2.2072 18 1.67599C18 0.762594 17.2569 0.0195312 16.3435 0.0195312H1.65646C0.743098 0.0195664 0 0.762629 0 1.67687C0 2.2072 0.263531 2.69939 0.704883 2.99347Z"
                            fill="white"></path>
                        </svg>
                      </i>
                    </a>
                    <div className="cs_icon_text">
                      <h6 className="cs_icon_title">Email</h6>
                      <p className="cs_icon_subtitle">{CONTACT.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cs_height_80 cs_height_lg_20"></div>
              <div className="cs_from anim_div_ShowDowns">
                <form onClick={e => e.preventDefault()}>
                  <div className="row">
                    <div className="cs_field_group col">
                      <input className="cs_input_field" type="text" id="name" placeholder="Ime"
                        name="name" />
                      <label htmlFor="name" className="cs_input_label">Ime</label>
                    </div>
                    <div className="cs_field_group col">
                      <input className="cs_input_field" type="text" id="email" placeholder="Email"
                        name="email" />
                      <label htmlFor="email" className="cs_input_label">Email</label>
                    </div>
                  </div>
                  <div className="cs_height_10 cs_height_lg_20"></div>
                  <div className="row">
                    <div className="cs_field_group col">
                      <input className="cs_input_field" type="text" id="phone" placeholder="Telefon"
                        name="phone" />
                      <label htmlFor="phone" className="cs_input_label">Telefon</label>
                    </div>
                    <div className="cs_field_group col">
                      <input className="cs_input_field" type="text" id="subject" placeholder="Tema"
                        name="subject" />
                      <label htmlFor="subject" className="cs_input_label">Tema</label>
                    </div>
                  </div>
                  <div className="cs_height_100 cs_height_lg_60"></div>
                  <div className="cs_field_group">
                    <input className="cs_input_field" type="text" id="message" placeholder="Poruka"
                      name="message" />
                    <label htmlFor="message" className="cs_input_label">Poruka</label>
                  </div>
                  <div className="cs_height_60 cs_height_lg_60"></div>
                  <button type="submit" className="cs_btn cs_style_1 cs_type_btn">
                    <span>Pošalji</span>
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.5303 7.03033C18.8232 6.73744 18.8232 6.26256 18.5303 5.96967L13.7574 1.1967C13.4645 0.903806 12.9896 0.903806 12.6967 1.1967C12.4038 1.48959 12.4038 1.96447 12.6967 2.25736L16.9393 6.5L12.6967 10.7426C12.4038 11.0355 12.4038 11.5104 12.6967 11.8033C12.9896 12.0962 13.4645 12.0962 13.7574 11.8033L18.5303 7.03033ZM0 7.25H18V5.75H0V7.25Z"
                        fill="currentColor"></path>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
            <div className="cs_contact_section_2 anim_div_ShowRightSide">
              <div className="cs_google_map cs_bg">
                <iframe
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.532095951836!2d21.907158!3d43.3240535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b1b2d70f3799%3A0xa36aedab7f24a19a!2sPoliklinika%20Aviva!5e0!3m2!1sen!2srs!4v1757848634854!5m2!1sen!2srs" 
                  allowFullScreen={true}></iframe>
              </div>
              <div className="cs_height_50 cs_height_lg_50"></div>
            
            </div>
          </div>
        </div>
      </section>
      <div className="cs_height_150 cs_height_lg_60"></div>
    </>
  );
};

export default ContactArea;
