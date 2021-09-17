import React, {useState, useEffect, useRef} from 'react';
import {Form, Button, Card,} from 'react-bootstrap';
import {v4 as uuid} from 'uuid';
import axios from 'axios';
import './ChatPage.css';

function ChatPage({ match}) {
	const chat_uuid = match.params.id
	const [user,setuser]=useState("")
	const [messages,setmessages]=useState([])
	const [notifications,setNotifications] = useState('')
	const ws = useRef(null);
	const [newMsg, setNewMsg] = useState('');
	const token = localStorage.getItem('token')
	useEffect(() => {
		ws.current = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${chat_uuid}/?token=${token}`);
		// ws.current.onopen = e => console.log('Chat socket opened');
		ws.current.onerror = e => alert(e);
		ws.current.onmessage = e => {
			const msg = JSON.parse(e.data);
			console.log(msg)
			if (msg.type === 'error') console.log(msg.data.message);
			else if (msg.type === 'chat_message') setNotifications(msg.data.message);
		};
		console.log(notifications)
		// load previous chat messages
		axios.get(`http://127.0.0.1:8000/chat/get_chatlist/${chat_uuid}/`,{
			headers: {
				"Authorization": `token ${token}`
			  }
		})
        .then(res => 
			
          {setmessages(res.data.messages)
		  setuser(res.data.user.name)
}
		  
        );

		return () => ws.current.close();
	}, [notifications]);
	console.log(messages)
	const sendNewMsg = e => {
		e.preventDefault();

		// check if newMsg is valid
		if (newMsg && newMsg.replace(/\s+/g, '') !== '') {
			const messageData = {uuid: uuid(), message: newMsg, recieved: false};
			ws.current.send(JSON.stringify(messageData));
	
			setNewMsg('');
		}
	};

	// submit form when enter pressed in text area
	const onKeyDown = e => {
		if (e.keyCode === 13 && e.shiftKey === false && newMsg) sendNewMsg(e);
	};

	return (
		<div className="ChatPage">
			
			<div className="msgCont">
			<h3>You are chatting with {user}</h3>
				<div className="msgBox">
					<div className="msgDisplay">
 						{
							messages.map(({uuid, recieved, message}) => (
								<Card
									key={uuid}
									className={`mt-3 ${!recieved && 'ml-auto'}`}
									body
									style={{overflowWrap: 'anywhere'}}
									bg={recieved ? 'light' : 'primary'}
									text={recieved ? 'dark' : 'light'}>
									{message}
								</Card>
							))
						}
					</div>

					<Form onSubmit={sendNewMsg}>
						<Form.Group>
							<Form.Control
								as="textarea"
								rows="3"
								style={{resize: 'none'}}
								value={newMsg}
								onKeyDown={onKeyDown}
								onChange={e => setNewMsg(e.target.value)}
							/>
						</Form.Group>

						<Button type="submit" disabled={!newMsg || newMsg.replace(/\s+/g, '') === ''}>
							Send
						</Button>
					</Form>
				</div>
			</div>
		</div>
	);
}

export default ChatPage;