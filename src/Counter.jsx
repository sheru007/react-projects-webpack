import React, { Component, useState, useEffect, useRef } from 'react'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';


export class Counter2 extends Component {
    state = {
        endDate: new Date(),
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
        intervalId: null
    }

    setRemainingTime = () => {
        const {endDate} = this.state;
        const currentStamp = new Date().getTime()
        const endStamp = endDate.getTime()

        const diffStamp = endStamp - currentStamp;
        let seconds = Math.floor(diffStamp / 1000) // seconds
        const days = Math.floor(seconds / (24*60*60)) // days
        seconds = seconds - days*24*60*60;

        const hours = Math.floor(seconds / (60*60)) // hours
        seconds = seconds - hours*60*60;

        const minutes = Math.floor(seconds / 60) // minutes
        seconds = seconds - minutes*60;
        

        this.setState({
            days,
            hours,
            minutes,
            seconds
        })
    }

    handleStart = () => {
        console.log('start it')
        this.setRemainingTime()
        const intervalId = setInterval(this.setRemainingTime, 1000)
        this.setState({intervalId});
    }

    handleStop = () => {
        console.log('stop it')
        clearInterval(this.state.intervalId);
    }

    componentWillUnmount() {
        this.handleStop();
    }


    render() {
        const {endDate, days, hours, minutes, seconds} = this.state;
        return (
        <div>
            <h2>Countdown App</h2>
            <DateTimePicker onChange={(date) => this.setState({endDate: date})} value={endDate} />
            <button id='startBtn' onClick={this.handleStart} >start</button>
            <button id='stopBtn' onClick={this.handleStop}>stop</button>

            <div className='timer'>
                <div>days: {days}</div>
                <div>hours: {hours}</div>
                <div>minutes: {minutes}</div>
                <div>seconds: {seconds}</div>
            </div>

        </div>
        
        )
    }
}


export default function Counter() {
    const [endDate, setEndDate] = useState(new Date())
    const [time, setTime] = useState({
        days: '',
        hours: '',
        minutes: '',
        seconds: '',
    })
    const intervalRef = useRef(undefined)

    const setRemainingTime = () => {
        const currentStamp = new Date().getTime()
        const endStamp = endDate.getTime()

        const diffStamp = endStamp - currentStamp;
        let seconds = Math.floor(diffStamp / 1000) // seconds
        const days = Math.floor(seconds / (24*60*60)) // days
        seconds = seconds - days*24*60*60;

        const hours = Math.floor(seconds / (60*60)) // hours
        seconds = seconds - hours*60*60;

        const minutes = Math.floor(seconds / 60) // minutes
        seconds = seconds - minutes*60;
        

        setTime({
            days,
            hours,
            minutes,
            seconds
        })
    }

    const handleStart = () => {
        console.log('start it')
        setRemainingTime()
        intervalRef.current = setInterval(setRemainingTime, 1000)
    }

    const handleStop = () => {
        console.log('stop it')
        clearInterval(intervalRef.current);
    }

    useEffect(() => {
        return () => {
            handleStop();
        }
    }, [])

    return (<div>
        <h2>Countdown App</h2>
        <DateTimePicker onChange={setEndDate} value={endDate} />
        <button id='startBtn' onClick={handleStart} >start</button>
        <button id='stopBtn' onClick={handleStop}>stop</button>

        <div className='timer'>
            <div>days: {time.days}</div>
            <div>hours: {time.hours}</div>
            <div>minutes: {time.minutes}</div>
            <div>seconds: {time.seconds}</div>
        </div>

    </div>)
}



