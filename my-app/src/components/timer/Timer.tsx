import React from "react";
import styles from './Timer.module.css';

type TimerProps = {
    initCounter : number;
}

type TimerState = {
    currentCounter : number;
    isPaused : boolean;
    intervalHandle: any;
}

export default class Timer extends React.Component<TimerProps, TimerState> {
    constructor(props : TimerProps) {
        super(props);
        
        // bind this to functions
        this.incrementCounter = this.incrementCounter.bind(this);

        // set default state
        this.state = this.setDefaultState();
    }

    setDefaultState() : TimerState {
        return {
            currentCounter: this.props.initCounter,
            isPaused: false,
            intervalHandle: setInterval(this.incrementCounter, 1000)
        }
    }

    incrementCounter() {
        this.setState(
        {
            currentCounter: this.state.currentCounter + 1
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className = {styles.timer}>
                    <div className = {styles['timer-container']}>
                        <span className={styles['timer-counter']}>
                            {this.state.currentCounter}
                        </span>
                        <button className={styles['timer-button']}>
                            {this.state.isPaused ? 'Pause' : 'Resume'}
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }   
}