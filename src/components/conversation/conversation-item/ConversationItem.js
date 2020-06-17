import React from 'react';
import classNames from 'classnames';

import './ConversationItem.scss';
import '../../controls/user-pic/UserPic.scss';

const ConversationItem = ({ conversation, isActive, onConversationItemSelected }) => {
    const className = classNames('conversation', {
        'active': isActive
    });

    return (
        <div className={className} onClick={() => onConversationItemSelected(conversation.id)}>
            <img src={conversation.imageUrl} alt={conversation.imageAlt} className="user-pic" />
            <div className="title-text">{conversation.title}</div>
            <div className="created-date">{conversation.lastMessageCreated}</div>
            <div className="conversation-message">
                {conversation.latestMessageText}
            </div>
        </div>
    );
}

export default ConversationItem;
