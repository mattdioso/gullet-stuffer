import MailchimpSubscribe from "react-mailchimp-subscribe";
import GulletStufferForm from "./gulletstuffer_form";

const GulletStufferSubscribe = () => {
    const mailchimp_url = process.env.REACT_APP_MAILCHIMP_URL;

    return (
        <MailchimpSubscribe
            url={mailchimp_url}
            render={ (props) => {
                const { subscribe, status, message } = props || {};
                return (
                    <GulletStufferForm
                        status={status}
                        message={message}
                        onValidated={ formData => subscribe(formData )}
                    />
                )
            }}
        ></MailchimpSubscribe>
    )
}

export default GulletStufferSubscribe