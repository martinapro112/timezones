import React, { Component } from 'react';

const colors = ['green', 'beige', 'brown'];

class Mountain extends Component {
    state = {
        color: colors[Math.floor(Math.random() * 3)],
        left: Math.floor(Math.random() * window.innerWidth) - (window.innerHeight / 2),
        borderRight: Math.floor(Math.random() * (window.innerHeight / 2)) + 100,
        borderBottom: Math.floor(Math.random() * (window.innerHeight / 2)) + 100,
        borderLeft: Math.floor(Math.random() * (window.innerHeight / 2)) + 100
    }

    componentDidMount = () => {
        this.timer = setInterval(this.tick, 10000);
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
    }

    tick = () => {
        this.setState({
            left: Math.floor(Math.random() * window.innerWidth) - (window.innerHeight / 2),
            borderRight: Math.floor(Math.random() * (window.innerHeight / 2)) + 100,
            borderBottom: Math.floor(Math.random() * (window.innerHeight / 2)) + 100,
            borderLeft: Math.floor(Math.random() * (window.innerHeight / 2)) + 100
        });
    }

    render() {
        return (
            <div id="mountains">
                <div
                    className={ 'mountain ' + this.state.color }
                    style={{
                        left: this.state.left + 'px',
                        borderWidth: `0 ${this.state.borderRight}px ${this.state.borderBottom}px ${this.state.borderLeft}px`
                    }}
                />
                <div
                    className={ 'mountain cover' }
                    style={{
                        left: this.state.left + 'px',
                        borderWidth: `0 ${this.state.borderRight / 4}px ${this.state.borderBottom}px ${this.state.borderLeft}px`
                    }}
                />
            </div>
        );
    }
}

export default Mountain;