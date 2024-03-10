import { useState } from "react";
import { decode } from "html-entities";

const GulletStufferForm = ( { status, message, onValidated }) => {
    const [ error, setError ] = useState(null);
    const [ email, setEmail ] = useState(null);

    const handleFormSubmit = () => {
        setError(null);
        if (!email) {
            setError('Please enter a valid email address');
            return null;
        }

        const isFormValidated = onValidated({ EMAIL: email });

        return email && email.indexOf("@") > -1 && isFormValidated;
    }

    const handleInputKeyEvent = ( event ) => {
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
        if ( "0" !== result?.[0]?.trim()) {
            return decode(message);
        }
        const formattedMessage = result?.[1]?.trim() ?? null;
        return formattedMessage ? decode(formattedMessage) : null;
    }

    return (
        <section className="w-full pl-20 mt-4">
            <div className="w-1/2">
                <p className="text-white text-4xl">Join our mailing list!</p>
            </div>
            <div className="flex w-full mt-2">
                <div className="w-1/3">
                    <input
                        onChange={(event) => setEmail(event?.target?.value ?? '')}
                        type="email"
                        placeholder="Your email"
                        className="w-10/12 rounded-md pl-4 h-8"
                        onKeyUp={(event) => handleInputKeyEvent(event)}>
                    </input>
                </div>
                <div className="w-1/12">
                    <button
                        className="text-white bg-orange-400 h-8 w-full rounded-md"
                        onClick={handleFormSubmit}>
                            Submit
                    </button>
                </div>
                <div className="text-white w-1/3 mx-auto">
                    {status === "sending" && <div>Sending...</div>}
                    {status === "error" || error ? (
                        <div className=""
                            dangerouslySetInnerHTML={{ __html: error || getMessage(message)}}>

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