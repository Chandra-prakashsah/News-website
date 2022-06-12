import React,{useState} from "react";
import axios from 'axios';

const NewsApp=()=> {
    const [data,setData]=useState([]);
      const ClickHandeler=()=>{
          axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=51268276f0a941188b935d127587c18b")  
          .then((res)=>{
              console.log(res);
              setData(res.data.articles);
          })
      }
    return(
        <>
           <div className='container ' style={{textAlign:"center"}}>
               <button className='btn btn-primary' onClick={ClickHandeler} style={{fontSize:"40px"}}>Fetch News</button>
           </div>
           <div className='continer'>
               <div className='row'>
                  {
                      data.map((values)=>{
                          return(
                            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                            <div className="card" style={{width: "100%",height:"auto"}}>
                                 <img src={values.urlToImage} class="card-img-top" alt="..."/>
                                 <div className="card-body">
                                     <h5 className="card-title">{values.title}</h5>
                                     <p className="card-text">{values.description}</p>
                                     <p className='card-text'>{values.publishedAt}</p>
                                     <a href={values.url} className="btn btn-primary">Read More</a>
                                 </div>
                                 </div>
                            </div>
                          );
                      })
                  }
               </div>
           </div> 
        </>
  )
}
export default NewsApp;

