import React from 'react';
import { useState } from 'react';
import contactUs from '../../assets/peaches.jpg';
import style from './style.module.scss';

const ContactScreen = () => {

  const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");

    const [isSent, setIsSent] = useState(false);

    const submit = (e) => {
      e.preventDefault()
      fetch(`https://hooks.zapier.com/hooks/catch/14246797/bj1yng1/`, {
        method: "POST",
        body: JSON.stringify({ email, comment }),
      }).then(() => setIsSent(true))
    }

  return (
    <div className={style.contact}>
    <img src={contactUs} alt= 'contact us' />
          <h1 className={style.text}>Contact us!</h1>
      {isSent ? <h2>Thank you for contacting us!</h2> :
        <form>
          <label htmlFor="comment">Your question or comment</label>
          <textarea
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email (optional)</label> <br />
          <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button type="submit">Send it!</button>
        </form>
      }    

    </div>

    
          
  );
}

export default ContactScreen;
