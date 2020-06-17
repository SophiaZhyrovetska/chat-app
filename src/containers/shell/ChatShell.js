import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { conversationChanged, newMessageAdded, conversationDeleted, conversationsRequested, answerMessageRequested } from '../../store/actions';
import NoConversations from '../../components/conversation/no-conversations/NoConversations';
import ConversationPanel from '../../components/conversation/conversation-panel/ConversationPanel';
import ChatTitle from '../../components/chat-title/ChatTitle';
import MessageList from '../../components/message-list/MessageList';
import ChatForm from '../../components/chat-form/ChatForm';

import './ChatShell.scss';

const ChatShell = ({ 
    conversations, 
    selectedConversation, 
    conversationChanged,
    onMessageSubmitted,
    onSendAnswer,
    onDeleteConversation,
    loadConversations,
}) => {
    useEffect(() => {
        loadConversations();
    }, [loadConversations]);

    let conversationContent = (
        <>
            <NoConversations></NoConversations>
        </>
    );

    if (conversations.length > 0) {
        conversationContent = (
            <>
                <MessageList selectedConversation={selectedConversation} />
            </>
        );
    }

    return (
        <div id="chat-container">
            <ConversationPanel
                onConversationItemSelected={conversationChanged}
                conversations={conversations}
                selectedConversation={selectedConversation} />
            <ChatTitle 
                selectedConversation={selectedConversation}
                onDeleteConversation={onDeleteConversation} />
            {conversationContent}
            <ChatForm 
                selectedConversation={selectedConversation}
                onMessageSubmitted={onMessageSubmitted}
                onSendAnswer={onSendAnswer} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        conversations: state.conversationState.conversations,
        selectedConversation: state.conversationState.selectedConversation
    };
};
  
const mapDispatchToProps = dispatch => ({
    conversationChanged: conversationId => { dispatch(conversationChanged(conversationId)) },
    onMessageSubmitted: messageText => { dispatch(newMessageAdded(messageText)) },
    onSendAnswer: () => { dispatch(answerMessageRequested()) },
    onDeleteConversation: () => { dispatch(conversationDeleted()); },
    loadConversations: () => { dispatch(conversationsRequested())}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatShell);
