import axios from "axios";

const baseURL = "https://youtube138.p.rapidapi.com";

const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "b21e2a7498msh48824e6ee10d538p17d33ajsn2ae7fa606aa8",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const data = await axios.get(`${baseURL}/${url}`, options);
  return data;
};

// api : 1 : "5f4b59a426msha8c1bfa151c7ceap16324djsn49bf87cee9d3";
// api : 2 : bachab140 : "8700cc157fmsh23156f77184412dp11508ejsnf435d3353221";
//api : 3 :rafi : "e88cf571c6msh3adad4c1a08903ap192a25jsnd586e97eba7d"
//api : 4 : khan : "eca0dea86fmshcf9aa8d4fb8b596p10b282jsn4b944633970f"
//api : 5 : Hamza : "b21e2a7498msh48824e6ee10d538p17d33ajsn2ae7fa606aa8"
