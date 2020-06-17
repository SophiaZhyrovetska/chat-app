import { put, call, takeLatest } from 'redux-saga/effects';
import { fetchData} from "../../chuckApi"
import { answerMessageAdded } from "../actions/index";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export const getApiData = function*() {
    try{
        yield delay(300);
        const data = yield call(fetchData);
        yield put(answerMessageAdded(data));
    } catch (e) {
        console.log(e);
    }

}

export function* watchGetAnswerMessage() {
    yield takeLatest('ANSWER_MESSAGE_REQUESTED', getApiData);
}
