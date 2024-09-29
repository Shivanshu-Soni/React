import React,{useEffect,useState} from "react";
import axios from 'axios';

function ApiCall(){
    let [data,setdata] = useState([]);
    let [error, seterror] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const resp = await axios.get('https://localhost:7163/api/VillaApi');
                setdata(resp.data);

            } catch(error){
                seterror(error.message);
            }
        };
        fetchData();

    },[]);

if(error) return <div>Error:{error}</div>;
    return(
        <div>
            <h1>API Data:</h1>
            <ul>
                {
                    data.map((item)=> (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    
    );
};

export default ApiCall;
