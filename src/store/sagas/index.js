import { all } from 'redux-saga/effects';

import { watchGetConversationsAsync } from './conversations';
import { watchGetAnswerMessage } from './answerMessage';

export default function* rootSaga() {
    yield all([
        watchGetConversationsAsync(),
        watchGetAnswerMessage()
    ]);
}
