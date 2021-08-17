import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Specialist({ match }) {
    const name=match.params.id
    const [Data,setData] = useState([]);
    useEffect(() => {
        const fetchData = async ()=>{
        try {
          let data=[]
          const res = await axios.get(`http://127.0.0.1:8000/api/speciality/${name}/`);
          for(const dataobj of res.data){
              data.push(dataobj);
            
          }
          setData(data);
           
        }
        catch(err){

        }
    }

    fetchData();
  
    },[name]);
    console.log(Data)
    return (
      <div>
          <h1>Here are some of the {name} online right now</h1>
          <section className="property-grid grid" style={{marginTop:"2rem"}}>
            <div className="container">
              <div className="row">
                {
                    Data.map((item,i) => (
                      <div className="d-flex col-12 comment-row m-t-0" style={{marginTop:"3rem"}} key={i}>
                        <div className="p-2"><img src={`https://joeschmoe.io/api/v1/doctor`+i} alt="user" width="100" className="rounded-circle"/></div>
                        <div className="comment-text w-100">
                            <h6 className="font-medium">{item.name}</h6> <span className="m-b-15 d-block">{item.address} </span>
                            <div className="comment-footer"> <span className="text-muted float-right">{item.speciality}</span> <button type="button" class="btn btn-success btn-sm">Chat</button></div>
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