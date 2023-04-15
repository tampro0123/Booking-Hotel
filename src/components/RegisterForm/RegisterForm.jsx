import "./RegisterForm.css";

function RegisterForm() {
    return (
        <div className="form-container">
            <h2>Save time, save money</h2>
            <p>Sign up and we'll send the best deals to you</p>
            <div>
                <input type="text" placeholder="Your Email" />
                <button type="submit">Subscribe</button>
            </div>
        </div>
    );
}

export default RegisterForm;
