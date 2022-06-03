import HeaderDetails from "../Layout/HeaderDetails";
import Detalhes from "../Components/Detalhes";
import Footer from '../Layout/Footer';
import { useParams } from 'react-router-dom'
import {useEffect, useState} from "react";
import { getApiDetails } from "../Service/GetMovie";



export default function Details (){


    const [detalhes, setDetalhes] = useState([]);

    const { id } = useParams()
   
    useEffect(() =>{
    
        const fetchDetails= async () => {
            const { data }= await getApiDetails(id);
            
            setDetalhes(data);
          }
        

        fetchDetails()
        
    }, [id])
    
  
    return(
        <>
        <HeaderDetails title={detalhes.original_title}/>
        <Detalhes id={id} dataDetalhes={ detalhes }/>
        <Footer />
        </>
    )
}

