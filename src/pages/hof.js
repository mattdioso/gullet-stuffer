import React from 'react';
import ContestantCard from '../components/contestant_card';
import ContestantProfile from '../components/contestant_profile';


class HallOfFame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="flex justify-center items-center w-full h-full pt-24 bg-gradient-to-r from-indigo-800 to-orange-800">
                <ContestantProfile />
                {/* <ContestantCard /> */}
            </div>
        );
    }
}

export default HallOfFame;