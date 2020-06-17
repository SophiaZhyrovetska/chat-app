import React from 'react';

import './ConversationSearch.scss';
import '../../controls/user-pic/UserPic.scss';

const ConversationSearch = ({ conversations }) => {
    let searchInput = null;

    if (conversations && conversations.length > 0) {
        searchInput = <input type="text" placeholder="Search or start new chat" />;
    }

    return (
        <div id="search-container">
            <img src={require('../../../images/profiles/my.png')} alt="My avatar" className="user-pic"/>
            { searchInput }
        </div>
    );
}

export default ConversationSearch;
