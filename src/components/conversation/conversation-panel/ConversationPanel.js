import React from 'react';

import ConversationList from '../conversation-list/ConversationList';

import ConversationSearch from "../conversation-search/ConversationSearch";

import './ConversationPanel.scss';

const ConversationPanel = ({ conversations, selectedConversation, onConversationItemSelected }) => {
    return (
        <div id="conversation-panel">
            <ConversationSearch conversations={conversations} />
            <h1>Chats</h1>
            <ConversationList
                onConversationItemSelected={onConversationItemSelected}
                conversations={conversations}
                selectedConversation={selectedConversation} />
        </div>
    );
}

export default ConversationPanel;
