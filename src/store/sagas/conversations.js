import { put, takeEvery } from 'redux-saga/effects';
import { conversations } from '../../data/conversations'

export const conversationsSaga = function*() {
    yield put({
        type: 'CONVERSATIONS_LOADED',
        payload: {
            conversations,
            selectedConversation: conversations[0]
        }
    });
}

export function* watchGetConversationsAsync() {
    yield takeEvery('CONVERSATIONS_REQUESTED', conversationsSaga);
}
