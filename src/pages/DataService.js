import axios from 'axios';

let dataServiceObj = {};

let url = "http://localhost:3000/books/";

dataServiceObj.getData = function()
{
    return axios.get(url);
};

dataServiceObj.getDataById = function( bookno )
{
    return axios.get(url + bookno);
};

dataServiceObj.addData = function( bookObj )
{
    return axios.post(url, bookObj);
};

dataServiceObj.updateData = function( bookObj )
{
    return axios.put(url + bookObj.bookno,  bookObj);
};

dataServiceObj.deleteData = function( bookno )
{
    return axios.delete(url + bookno);
};

export default dataServiceObj;