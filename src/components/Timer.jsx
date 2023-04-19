import React from 'react';
import { observer } from 'mobx-react';
import { withRoot } from '../data/stores/root';
import { Button } from 'reactstrap';
import { pingAndTick } from '../data/api/timer';
import './timer.css';

const Timer = withRoot(observer(({ root }) => {
    const { timerStore } = root;

    return <div className="timer">

        <Button onClick={pingAndTick}>Refresh Time</Button>

        <div>{timerStore.elapsedTime}</div>
    </div>
}))

export default Timer;