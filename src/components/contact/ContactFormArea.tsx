import ContactForm from "../forms/ContactForm"

const ContactFormArea = () => {
   return (
      <div className="td-contact-form-area content-section-bottom">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="td-contact-form-wrap">
                     <ContactForm />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactFormArea
