import { Helmet } from "react-helmet";
import ContactOne from "../components/Contact/ContactOne";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="">
        <div>
          <ContactOne />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
