import React from 'react';

import './ChatTitle.scss';

const ChatTitle = ({ selectedConversation, onDeleteConversation }) => {
    let chatTitleContents = null;

    if (selectedConversation) {
        chatTitleContents = (
            <>
                <img src={selectedConversation.imageUrl} alt={selectedConversation.imageAlt} className="user-pic" />
                <span>{ selectedConversation.title }</span>
            </>
        );
    }

    return (
        <div id="chat-title">
            { chatTitleContents }
        </div>
    );
}

export default ChatTitle;
