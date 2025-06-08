import { useState } from "react";
import { decode } from "html-entities";

const GulletStufferForm = ({ status, message, onValidated }) => {
    const [error, setError] = useState(null);
    const [email, setEmail] = useState(null);

    const handleFormSubmit = () => {
        setError(null);
        if (!email) {
            setError('Please enter a valid email address');
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        return email && email.indexOf("@") > -1 && isFormValidated;
    }

    const handleInputKeyEvent = (event) => {
        setError(null);
        if (event.keyCode === 13) {
            event.preventDefault();
            handleFormSubmit();
        }
    }

    const getMessage = (message) => {
        if (!message) {
            return null;
        }
        const result = message?.split('-') ?? null;
        if ("0" !== result?.[0]?.trim()) {
            return decode(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? decode(formattedMessage) : null;
    }

    return (
        <section className="w-full md:pl-20 mt-4">
            <div className="md:w-1/2 text-center md:text-left">
                <p className="text-gold text-3xl md:text-4xl">Join our mailing list!</p>
            </div>
            <div className="w-full mt-2">
                <div className="flex w-10/12 md:w-full mx-auto md:mx-0">
                    <div className="w-full md:w-1/3">
                        <input
                            onChange={(event) => setEmail(event?.target?.value ?? '')}
                            type="email"
                            placeholder="Your email"
                            className="w-full rounded-md pl-4 h-8"
                            onKeyUp={(event) => handleInputKeyEvent(event)}>
                        </input>
                    </div>
                    <div className="w-3/12 md:w-1/12 ml-2">
                        <button
                            className="text-black bg-gold h-8 w-full rounded-md"
                            onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
                <div className="text-white w-3/4 md:w-1/3 text-center md:text-left mt-2 mx-auto md:mx-0">
                    {status === "sending" && <div>Sending...</div>}
                    {status === "error" || error ? (
                        <div className=""
                            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}>

                        </div>
                    ) : null}
                    {status === "success" && status !== "error" && !error && (
                        <div dangerouslySetInnerHTML={{ __html: decode(message) }} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default GulletStufferForm;