const initialState = {
    conversations: [],
    selectedConversation: {}
};

initialState.selectedConversation = initialState.conversations[1];

const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CONVERSATIONS_LOADED': {
            const newState = { ...state };
            newState.conversations = action.payload.conversations ? action.payload.conversations : [];
            newState.selectedConversation = action.payload.selectedConversation;

            return newState;
        }
      case 'SELECTED_CONVERSATION_CHANGED': {
        const newState = { ...state };
        newState.selectedConversation = 
            newState.conversations.find(
                conversation => conversation.id === action.conversationId
            );

        return newState;
      }

      case 'NEW_MESSAGE_ADDED': {

          if (state.selectedConversation) {
              const newState = { ...state };
              newState.selectedConversation = { ...newState.selectedConversation }

              newState.selectedConversation.messages.unshift(
                  {
                      imageUrl: null,
                      imageAlt: null,
                      messageText: action.textMessage,
                      dateCreated: '4/22/20',
                      timeCreated: '15:00 PM',
                      isMyMessage: true
                  }
              )

              return newState;
          }

          return state;
      }

        case 'ANSWER_MESSAGE_ADDED':{
            if (state.selectedConversation) {
                const newState = { ...state };
                newState.selectedConversation = { ...newState.selectedConversation }

                newState.selectedConversation.messages.unshift(
                    {
                        imageUrl: newState.selectedConversation.imageUrl,
                        imageAlt: newState.selectedConversation.imageAlt,
                        messageText: action.data.value,
                        dateCreated: '4/22/20',
                        timeCreated: '15:01 PM',
                        isMyMessage: false
                    }
                )

                return newState;
            }

            return state;
        }

      default:
        return state;
    }
  }
  
export default conversationsReducer;
