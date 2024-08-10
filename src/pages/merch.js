import React from 'react';

class MerchPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="w-full h-screen pt-36 md:pt-36 bg-black">
                <stripe-pricing-table 
                    pricing-table-id="prctbl_1PTyAGHSUtTsFers6aLxQ42n"
                    publishable-key="pk_test_51PTcY2HSUtTsFersJcoj6yODRowX2GVoAcVLxllpmxjTXAYO3SchSlVYKqmCMJcuFAozdjknv9FNmD2OmiFUbLvy00DwxvrLTa"
                >

                </stripe-pricing-table>
            </section>
        )
    }
}

export default MerchPage;