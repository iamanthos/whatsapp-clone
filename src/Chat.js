import React, { useState } from 'react';
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import axios from './axios';


const Chat = ({messages}) => {

    const [input, setInput] = useState("");

    const sendMessage = async (e) =>{
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "Demo",
            timestamp: "Just now",
            received: false,
        });
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>Last Seen at...</p>
            </div>
            <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
            </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (
                    <p className={`chat__message ${message.received && "chat__reciever"}`}>
                    <span className="chat__name">
                        {message.name}
                    </span>
                    {message.message}
                    <span className="chat__timestamp">
                        {message.timestamp}
                    </span>
                </p>
             ))}
            </div>
            <div className="chat__footer">
                <SentimentSatisfiedIcon />
                <form>
                    <input value={input} onChange={e=> setInput(e.target.value)} placeholder="Type a message" type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>

            </div>

        </div>
    )
}

export default Chat;
