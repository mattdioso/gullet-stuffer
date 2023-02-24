import React from 'react';

import GSYear from '../years/GSYear';
import { FaBootstrap } from 'react-icons/fa';
import { TimelineScroller } from '../components/timeline_scroller';

class EventsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: null
        };
    }

    handlePageChange = number => {
        this.setState({ currentPage: number });
    }

    handleBeforePageChange = number => {
        console.log(number);
    }

    render() {
        // const pageNumbers = this.getPagesNumbers();
        return (
            
            <TimelineScroller
                pageOnChange={this.handlePageChange}
                onBeforePageScroll={this.handleBeforePageChange}
                customPageNumber={this.state.currentPage}>
                <GSYear year='2018'/>
                <GSYear year='2019'/>
                <GSYear year='2021'/>
                <GSYear year='2022'/>
            </TimelineScroller>
            
        );
    }
}

export default EventsPage;