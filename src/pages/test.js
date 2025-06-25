import React from 'react';
import ExpandableCard from "../components/expandable_card"
import { gs7_contestants } from "../data/gs7_contestants"
import AthleteCard from '../components/athlete_card';

class TestPage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="h-full w-full flex pt-36">
                <div className="flex flex-wrap w-2/3 space-x-6 mx-auto justify-center">
                    {gs7_contestants.map((contestant) => (
                        <AthleteCard name={contestant.name} campaignUrl={contestant.campaignUrl} imgUrl={contestant.img} />
                    ))}
                </div>
            </section>
        )
    }
}
export default TestPage;