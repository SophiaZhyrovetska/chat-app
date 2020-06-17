export const conversationChanged = conversationId => ({
    type: 'SELECTED_CONVERSATION_CHANGED',
    conversationId
});

export const conversationsRequested = () => ({
    type: 'CONVERSATIONS_REQUESTED'
});

export const conversationDeleted = () => ({
    type: 'DELETE_CONVERSATION'
});

export const newMessageAdded = textMessage => ({
    type: 'NEW_MESSAGE_ADDED',
    textMessage
});


export const answerMessageRequested = () => ({
    type: 'ANSWER_MESSAGE_REQUESTED'
});

export const answerMessageAdded = data => ({
    type: 'ANSWER_MESSAGE_ADDED',
    data
});
