import axios from "axios";

const baseUrl = "/api/persons";

export const getAll = () => axios.get(baseUrl);

export const create = (newObject) => axios.post(baseUrl, newObject);

export const update = (id, newObject) =>
  axios.put(`${baseUrl}/${id}`, newObject);

export const deleteObject = (id) => axios.delete(`${baseUrl}/${id}`);


/**
 * json server url http://localhost:3001/persons
 * 
 * live server base url https://phonenote.herokuapp.com
 */