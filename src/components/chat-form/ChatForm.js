import React, { useState } from 'react';


import './ChatForm.scss';

const isMessageEmpty = (textMessage) => {
    return adjustTextMessage(textMessage).length === 0;
}

const adjustTextMessage = (textMessage) => {
    return textMessage.trim();
};

const ChatForm = ({ selectedConversation, onMessageSubmitted, onSendAnswer }) => {
    const [textMessage, setTextMessage] = useState('');
    let formContents = null;
    let handleFormSubmit = null;

    if (selectedConversation) {
        formContents = (
            <form>
                <input
                    type="text" 
                    placeholder="Type your message"
                    value={textMessage}
                    autoFocus="autoFocus"
                    onChange={ (e) => { setTextMessage(e.target.value); } } />
                {/*<FormButton disabled={ disableButton }>Send</FormButton>*/}
                <button type="submit"></button>
            </form>
        );
    
        handleFormSubmit = (e) => {
            e.preventDefault();
            
            if (!isMessageEmpty(textMessage)) {
                onMessageSubmitted(textMessage);
                setTextMessage('');
                onSendAnswer();
            }
        };
    }

    return (
        <form id="chat-form" onSubmit={handleFormSubmit}>
            {formContents}
        </form> 
    );
}

export default ChatForm;
