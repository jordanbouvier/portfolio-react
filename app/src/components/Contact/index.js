/*
 * Npm import
 */
import React from 'react';
import FaEnveloppe from 'react-icons/lib/fa/envelope-square';
import FaMobile from 'react-icons/lib/fa/mobile';

/*
 * Local import
 */

import Title from 'src/components/Title';
import ContactButton from 'src/components/Contact/ContactButton';

/*
 * Component
 */
const Contact = () => (
  <section id="contact">
    <Title>Contact</Title>
    <div>
      <ContactButton text="07 71 18 81 77">
        <FaMobile />
      </ContactButton>
      <ContactButton text="jordanbouvierpro@gmail.com">
        <FaEnveloppe />
      </ContactButton>
    </div>
  </section>
);

/*
 * Export default
 */
export default Contact;
