/* eslint-disable no-unused-vars */
const client_id = "Iv1.c8375698cbc26904";
const secret_key = "ff481831f75dedd185749ebd046548dfe6c7d1d0";
let id_user = 0;

export const search_user = (name) => {
  if (name === " " || name === "") {
    return async (dispatch) => {
      const url = `https://api.github.com/search/repositories?q=roadmap`;
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "SEARCH_REPOSITORIES",
        payload: data,
        id: id_user++,
      });
    };
  } else {
    return async (dispatch) => {
      const url = `https://api.github.com/search/repositories?q=${name}`;
      const res = await fetch(url);
      console.log(res.status)
      const data = await res.json();
      dispatch({
        type: "SEARCH_REPOSITORIES",
        payload: data,
        id: id_user++,
      });
    };
  }
};
