import React, {useState} from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_DATA_QUERY } from "../../Graphql/query";
import NoImage from "../../Images/thumbnail.jpeg";
import {Jumbotron, Container} from 'react-bootstrap';

function Loading(){
    return(
        <div className="loading">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

function Main() {
  const [next, setNext ] = useState(1)
  const {loading,data,error } = useQuery(
      GET_DATA_QUERY,
      {
          variables: {page: next, perPage: 8},
          fetchPolicy: "cache-and-network"
      }
  );

  if (loading) return <Loading/>;    
  if (error) return <h1>Error Found</h1>;

  return (
    <div className="container-fluid">
        <Jumbotron fluid className="text-center">
            <Container>
                <h1>UNOFFICIAL AniList</h1>
                <p>
                Prohibited from use within competing noncomplementary services of the same nature, including but not limited to Anime/Manga list/tracker services. Competing services may be authorized on request if they provide significant and sustained integration/syncing with the AniList API and AniList user accounts.
                </p>
            </Container>
        </Jumbotron>
        <div className="row">

       {data && data.Page.media.map((data) => (
            <div key={data.id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <div className="bg-white rounded shadow-sm">
                    <div className="col-xs-12 col-sm-12">
                        <img src={data.bannerImage ?? NoImage} alt="" className="img-fluid card-img-top"/>
                    </div>
                    
                    <div className="p-4">
                        <h5 className="title"> <a href={data.siteUrl} className="text-dark">{data.title.english ?? data.title.native}</a></h5>
                        <p className="small text-muted mb-0">{data.description}</p>
                        <div className="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                        <p className="small mb-0"><i className="fa fa-picture-o mr-2"></i><span className="font-weight-bold">{data.source}</span></p>
                        <div className="badge badge-danger px-3 rounded-pill font-weight-normal">{data.status}</div>
                        </div>
                    </div>
                </div>
            </div>
         ))}
        </div>
        
        <div className="container d-flex justify-content-center">
            <button type="button" class="btn btn-primary mr-2" onClick={() => setNext(next - 1)}> Prev </button>
            <button type="button" class="btn btn-primary" onClick={() => setNext(next + 1)}> Next </button>
        </div>
        <hr/>
    </div>
  );
}

export default Main;
