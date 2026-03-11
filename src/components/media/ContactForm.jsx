import './ContactForm.css';
import {useState} from 'react';


export default function ContacForm() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <>
            <form className='contact-form'>
                <section className='contact-field'>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" size="30" placeholder="Enter your email..." required />
                </section>
                <section className='contact-field'>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="10" cols="60" placeholder="Enter your message..." required></textarea>
                </section>
                <section className='checkbox-field'>
                    <label htmlFor="form-not-functional">I understand that this form is NOT functional:</label>
                    <input type="checkbox" id="form-not-functional" name="form-not-functional" required 
                        checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
                </section>

                <input className={`submit ${isChecked ? 'enabled' : 'disabled'}`} disabled={!isChecked} type="submit" value="Submit" />
            </form>

        </>
    );
}