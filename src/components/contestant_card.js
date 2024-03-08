import React from 'react';
import jaybee from '../imgs/ContestantCards/jaybee_spicy.jpg';

class ContestantCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flipped: false
        };
        this.flip = this.flip.bind(this);
    }

    flip = () => {
        console.log('flipped');
        this.setState({ flipped: !this.state.flipped });
    }

    render() {
        console.log(this.props.division);
        return (
            <div class="group h-[250px] w-[200px] rounded-3xl shadow-2xl bg-transparent cursor-pointer group perspective flex-shrink-0">
                <div class="relative preserve-3d group-hover:rotate-y-180 w-full h-full duration-1000">
                    <Front pic={this.props.pic}/>
                    <Back name={this.props.name} division={this.props.division} title={this.props.title} subtitle={this.props.subtitle} desc={this.props.desc}/>
                </div>
            </div>
            // <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container group relative w-[350px] h-[450px] bg-white rounded-3xl shadow-2xl" + (this.state.flipped ? " flipped" : "")}>
            //     <Front />
            //     <Back />
            // </div>
        );
    }
}

class Front extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="absolute backface-hidden w-full h-full overflow-hidden rounded-3xl shadow-2xl">
                <img className="absolute h-full w-full top-0 left-0 object-cover object-center" src={this.props.pic} alt="jaybee" />
            </div>
        );
    }
}

class Back extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="absolute rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden shadow-2xl rounded-3xl">
                <div class="translate-y-[15px] h-full w-full">
                    <h2 className="font-OpenSansBold text-center text-xl text-neutral-800">{this.props.name}<br/>
                        {/* <span className="font-semibold text-center text-sm text-neutral-500">{this.props.division}</span> */}
                    </h2>
                    <div className="px-2 justify-between">
                        
                        {   this.props.title ? 
                            <h3 className="text-base text-center font-OpenSansBold">{this.props.title}<br/></h3> : <></>
                        }
                        {
                            this.props.subtitle ? 
                            <h3 className="text-sm font-OpenSansReg text-center">{this.props.subtitle ? this.props.subtitle : ""}<br/></h3> : <></>
                        }
                        {
                            this.props.desc ? 
                            <h3 className="mt-2 text-base font-OpenSansReg">{this.props.desc ? this.props.desc : ""}</h3> : <></>
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default ContestantCard;