import React from "react";
import Layout from "../components/layout/layout";
import { useForm } from "react-hook-form";
import mailtoLink from "mailto-link";
import './contact.css';

export default function Contact() {
    const { register, handleSubmit} = useForm();
    const onSubmit = ({name, email, message}) => {
        window.open(mailtoLink({to: 'marikilgus@gmail.com', subject: `Hello from ${name}`, from: email, body: message}))
    };

    return(
        <div className="Contact">
        <Layout>
            <React.Fragment>
                <div className="Contact-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Contact me</h2>
                    <div className="Contact-container">
                        <label htmlFor='name'></label>
                        <input placeholder="Name" id="name" name="name" ref={register()} />
                    </div>
                    <div>
                        <label htmlFor='email'></label>
                        <input placeholder="Email" id="email" name="email" ref={register()} />
                    </div>
                    <div>
                        <label htmlFor='message'></label>
                        <textarea placeholder="Write your message here :)" id="message" name="message" ref={register()} />
                    </div>
                    
                    <button type="submit" className="send">Send</button>

                </form>
                </div>
            </React.Fragment>
        </Layout>
        </div>
    )
}