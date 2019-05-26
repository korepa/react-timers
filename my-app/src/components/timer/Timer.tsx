import React from "react";
import styles from './Timer.module.css';

type TimerProps = {
    initCounter : number;
}

type TimerState = {
    currentCounter : number;
    isPaused : boolean;
    intervalHandle: NodeJS.Timer;
}

export default class Timer extends React.Component<TimerProps, TimerState> {
    constructor(props : TimerProps) {
        super(props);

        this.incrementCounter = this.incrementCounter.bind(this);
        this.pauseResumeCount = this.pauseResumeCount.bind(this);
        this.state = this.setDefaultState();
    }

    setDefaultState() : TimerState {
        return {
            currentCounter: this.props.initCounter,
            isPaused: false,
            intervalHandle: this.getIntervalHandler()
        }
    }

    getIntervalHandler() : NodeJS.Timer {
        if (this.state && this.state.intervalHandle) {
            clearInterval(this.state.intervalHandle);
        }
        return setInterval(this.incrementCounter, 1000);
    }

    componentWillReceiveProps(nextProps: TimerProps) {
        this.setState(this.setDefaultState());
      }

    incrementCounter() {
        this.setState(
        { 
            currentCounter: this.state.currentCounter + 1 
        });
    }

    pauseResumeCount() {
        if (this.state.isPaused) {
            this.setState(
            { 
                intervalHandle: this.getIntervalHandler(),
                isPaused : false,
            });
        } else {
            clearInterval(this.state.intervalHandle);
            this.setState(
            { 
                isPaused : true,
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className = {styles.timer}>
                    <div className = {styles['timer-container']}>
                        <span className={styles['timer-counter']}>
                            {this.state.currentCounter}
                        </span>
                        <button className={styles['timer-button']} 
                            onClick={this.pauseResumeCount}>
                            {this.state.isPaused ? 'Pause' : 'Resume'}
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }   
}