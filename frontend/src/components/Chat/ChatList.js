import React, {useEffect,useState} from 'react';
import { Card, ListGroup} from 'react-bootstrap';
import './ChatList.css';
import axios from 'axios';
function ChatList() {
	
    const [chats,setchat]=useState([]) 

	useEffect(() => {
        const fetchData = async ()=>{
            try {
              let data=[]
              const res = await axios.get(`http://127.0.0.1:8000/chat/`);
              for(const dataobj of res.data){
                  data.push(dataobj);
                
              }
              setchat(data);
               
            }
            catch(err){
    
            }
        }
    
        fetchData();
	}, []);



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
								</a>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Card>
		</div>
	);
}

export default ChatList;