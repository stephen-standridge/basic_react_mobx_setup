import axios from './axios';
import { rootStore } from '../stores/root';
const { timerStore } = rootStore;

export const pingAndTick = async () => {
    axios.get(`${process.env.API_URL}/ping`).then((response) => {
        timerStore.tick();
    }).catch((e) => {
        timerStore.tick();
        console.log(e)
    });

}
