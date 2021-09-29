import React, {useEffect,useState} from 'react';
import { Card, ListGroup} from 'react-bootstrap';
import './ChatList.css';
import axios from 'axios';
import moment from 'moment';
function ChatList() {
	
    const [chats,setchat]=useState([]) 
	const token = localStorage.getItem('token')
	useEffect(() => {
		//Interval Polling to update chat list
        const fetchData = async ()=>{
            try {
              let data=[]
              const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/chat/user_chatlist/`,{
				headers: {
					'Authorization': `token ${token}`
				  }
			  });
              for(const dataobj of res.data){
                  data.push(dataobj);
                
              }
              setchat(data);
               
            }
            catch(err){
				
            }
        }
		const interval = setInterval(() => {

			fetchData();
		  }, 1000);
		return () => clearInterval(interval);
        
	}, []);

	console.log(chats)

	return (
		<div className="ChatList">

				<Card>
					<Card.Header>
						<strong>Your conversations</strong>
					</Card.Header>
					<ListGroup variant="flush">
						{chats.map(chat => (
							<ListGroup.Item key={chat.uuid} className="chatLink">
								<a href={`/chat/${chat.uuid}`}>
									<span>{chat.user.name}</span>
									<span>{chat.messages.length} new messages</span>
									<span>{moment(chat.messages.date_sent).fromNow()}</span>
								</a>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Card>
		</div>
	);
}

export default ChatList;