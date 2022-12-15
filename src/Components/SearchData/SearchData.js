import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./SearchData.css";
import NumberAbbreviate from "number-abbreviate";
import load from "../../Assets/spinner.gif";

const SearchData = () => {
  const { Id } = useParams();
  const [search, setSearch] = useState([]);
  const [error, setError] = useState("");

  const fetchSearchApi = () => {
    const options = {
      method: "GET",
      url: "https://youtube138.p.rapidapi.com/search/",
      params: { q: `${Id}`, hl: "en", gl: "US" },
      headers: {
        "X-RapidAPI-Key": "b21e2a7498msh48824e6ee10d538p17d33ajsn2ae7fa606aa8",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSearch(response.data);
      })
      .catch(function (error) {
        console.error(error);
        setError(error.message);
      });
  };

  useEffect(() => {
    fetchSearchApi();
  }, [Id]);

  return (
    <div className="Search Items">
      <div className="conatiner px-3 py-3">
        <h5 className="text-center py-3 text-light">
          You Search for <span className="text-danger">{Id}</span>
        </h5>
        <div className="d-flex justify-content-center">
          <div className="col-sm-6">
            {!search.contents && (
              <img
                src={load}
                alt="..."
                className=" w-100"
                style={{ objectFit: "contain" }}
              />
            )}
            {/* {error.length !== 0 && (
              <div className="containe  bg-dark">
                <div className="d-flex justify-content-center text-light py-5">
                  <h1 className="px-2">{error}</h1>
                </div>
              </div>
            )} */}
            {search.contents &&
              search.contents.map((vid) => {
                return (
                  <Link
                    to={`/video/${vid?.video?.videoId}`}
                    className="my-3 myLink text-decoration-none"
                    key={vid?.video?.videoId}
                  >
                    <div className="searchCard">
                      <div className="myimage">
                        <img
                          src={vid?.video?.thumbnails?.[0].url}
                          alt=""
                          className="me-2"
                        />
                        <span className="bg-dark text-light">00:02:02</span>
                      </div>
                      <div className="title my-3">
                        <div className="chanel">
                          <img
                            src={vid?.video?.author?.avatar[0]?.url}
                            alt=""
                            className="me-3"
                          />
                        </div>
                        <div className="searchdetails">
                          <span className="text-light fw-semibold">
                            {vid?.video?.title}
                          </span>
                          <div className="d-flex">
                            <span className="text-secondary fw-semibold">
                              {vid?.video?.author?.title}
                            </span>
                            <span className="text-secondary ms-3 me-1">
                              {NumberAbbreviate(vid?.video?.stats?.views, 2)}
                            </span>
                            <span className="me-3 text-secondary">views</span>
                            <span className="text-secondary">
                              {vid?.video?.publishedTimeText}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchData;
