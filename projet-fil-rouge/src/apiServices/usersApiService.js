import axios from 'axios';

const __BASE_URL = 'http://localhost:7777/api';
const __HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const getUserApi = (async () => {
    return await axios(__BASE_URL + '/users', {
        method: 'get',
        headers: __HEADERS
    });
});

export const postUserApi = (async (user) => {
    let bodyFormData = new FormData();
    bodyFormData.append('title', user.title);
    bodyFormData.append('firstname', user.firstname);
    bodyFormData.append('lastname', user.lastname);
    bodyFormData.append('dateOfBirth', user.dateOfBirth);
    bodyFormData.append('phone', user.phone);
    bodyFormData.append('email', user.email);
    bodyFormData.append('password', user.password);
    bodyFormData.append('status', user.status);
    bodyFormData.append('urlImg', user.urlImg);
    return await axios({
        method: "post",
        url: __BASE_URL + "/user",
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});

export const updateUserApi = (async (user) => {
    let bodyFormData = new FormData();
    bodyFormData.append('id', parseInt(user.id));
    bodyFormData.append('title', user.title);
    bodyFormData.append('firstname', user.firstname);
    bodyFormData.append('lastname', user.lastname);
    bodyFormData.append('dateOfBirth', user.dateOfBirth);
    bodyFormData.append('phone', user.phone);
    bodyFormData.append('email', user.email);
    bodyFormData.append('password', user.password);
    bodyFormData.append('status', user.status);
    bodyFormData.append('urlurlImg', user.urlurlImg);
    bodyFormData.append('created', user.created);
    return await axios({
        method: "put",
        url: __BASE_URL + "/user/" + user.id,
        data: bodyFormData,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});

export const deleteUserApi = (async (id) => {
    return await axios({
        method: "delete",
        url: __BASE_URL + "/user/" + id,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});

export const postImage = (async (id, image) => {
    let bodyFormData = new FormData();
    bodyFormData.append('urlImg', image);
    return await axios({
        method: "post",
        url: __BASE_URL + "/user/" + id,
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});