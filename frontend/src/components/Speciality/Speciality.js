import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { useSelector} from "react-redux";
function Specialist({ match }) {
    const name=match.params.id
    const [q,setq]=useState("")
    const [Data,setData] = useState([]);
    const isloggedin = useSelector(state => state.updatelogin);
    const history = useHistory();
    const token = localStorage.getItem('token')
    useEffect(() => {
        const fetchData = async ()=>{
        try {
          let data=[]
          
          const res = await axios.get(`http://127.0.0.1:8000/api/speciality/${name}/`,
          );
          for(const dataobj of res.data){
              data.push(dataobj);
            
          }
          setData(data);
           
        }
        catch(err){

        }
    }

    fetchData();
  
    },[name,]);
    console.log(Data)
    function createchat(id){
        if(isloggedin){
            if(localStorage.getItem("userId")===id){
                alert('You cannot start chat with yourself ')
            }
            else{
              axios.get(`http://127.0.0.1:8000/chat/create_chat/${id}/`,{
                headers: {
                  "Authorization": `token ${token}`
                }
              })
                  .then(res => {
                    history.push("/chat/"+res.data.chat_id)
                  })
                  .catch(err => console.log(err))
            }
          
        }
        else{
          alert('Please Login/Register to chat')
        }

    }
    function search(data){
      return data.filter((doctor)=>doctor.name.toLowerCase().indexOf(q)>-1 || doctor.address.toLowerCase().indexOf(q)>-1)
     
   }

    return (
      <div>
          <h1>Here are some of the {name} online right now</h1>
          <form className="card card-sm" onSubmit={e =>  e.preventDefault()}>
                <div className="card-body row no-gutters align-items-center">
                    <div className="col-auto">
                        <i className="fas fa-search h4 text-body"></i>
                    </div>
                    <div className="col">
                        <input className="form-control form-control-lg form-control-borderless" type="text" placeholder="Search Doctor Name or address here" value={q} onChange={(e)=>setq(e.target.value)}/>
                    </div>


                </div>
            </form>
          <section className="property-grid grid" style={{marginTop:"2rem"}}>
            <div className="container">
              <div className="row">
                {
                    search(Data).map((item,i) => (
                      
                      <div className="d-flex col-12 comment-row m-t-0" style={{marginTop:"3rem"}} key={i}>
                        <div className="p-2"><img src={`https://100k-faces.glitch.me/random-image`} alt="user" width="150" className="rounded-circle"/></div>
                        <div className="comment-text w-100">
                            <h6 className="font-medium">{item.name}</h6> <span className="m-b-15 d-block">{item.address} </span>
                            <div className="comment-footer">
                               <button type="button" className="btn btn-success btn-sm" onClick={()=>createchat(item.id)}>Chat</button>
                               { item.status ===1 ? 
                               <span className="text-success float-right">Online</span>
                              :<span className="text-danger float-right">Offline</span>
                              } 
                            </div>
                        </div>
                      </div>
                  ))
                }
                
              </div>
            </div>
          </section>
      </div>

      
        
    );
};
export default Specialist;