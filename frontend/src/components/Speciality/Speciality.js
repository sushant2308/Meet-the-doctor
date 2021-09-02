import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function Specialist({ match }) {
    const name=match.params.id
    const [q,setq]=useState("")
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
    function search(data){
      return data.filter((doctor)=>doctor.name.toLowerCase().indexOf(q)>-1 || doctor.address.toLowerCase().indexOf(q)>-1)
     
   }
    console.log(Data)
    return (
      <div>
          <h1>Here are some of the {name} online right now</h1>
          <form className="card card-sm">
                <div className="card-body row no-gutters align-items-center">
                    <div className="col-auto">
                        <i className="fas fa-search h4 text-body"></i>
                    </div>
                    <div className="col">
                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search Doctor Name or address here" value={q} onChange={(e)=>setq(e.target.value)}/>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-lg btn-success" type="submit">Search</button>
                    </div>

                </div>
            </form>
          <section className="property-grid grid" style={{marginTop:"2rem"}}>
            <div className="container">
              <div className="row">
                {
                    search(Data).map((item,i) => (
                      <div className="d-flex col-12 comment-row m-t-0" style={{marginTop:"3rem"}} key={i}>
                        <div className="p-2"><img src={`https://joeschmoe.io/api/v1/doctor`+i} alt="user" width="150" className="rounded-circle"/></div>
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