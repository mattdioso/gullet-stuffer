import React from 'react';
import ExpandableCard from "../components/expandable_card"
import { gs7_contestants } from "../data/gs7_contestants"

class TestPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="h-full w-full pt-36">
                hello
                {
                    gs7_contestants.map((contestant, i) => (
                        <ExpandableCard image={contestant.img} username={contestant.name} donationUrl={contestant.campaignUrl} key={i} />
                    ))
                }
            </section>
        )
    }
}
export default TestPage;