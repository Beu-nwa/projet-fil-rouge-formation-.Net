import axios from 'axios';

const __BASE_URL = 'http://localhost:7777/api';
const __HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const getTrainingApi = (async () => {
    return await axios(__BASE_URL + '/trainings', {
        method: 'get',
        headers: __HEADERS
    });
});

export const postTrainingApi = (async (training) => {
    let bodyFormData = new FormData();
    bodyFormData.append('name', training.name);
    bodyFormData.append('category', training.category);
    bodyFormData.append('difficulty', training.difficulty);
    bodyFormData.append('price', training.price);
    bodyFormData.append('duration', training.duration);
    bodyFormData.append('startDate', training.startDate);
    bodyFormData.append('endDate', training.endDate);
    bodyFormData.append('location', training.location);
    bodyFormData.append('description', training.description);
    bodyFormData.append('urlImg', training.urlImg);
    return await axios({
        method: "post",
        url: __BASE_URL + "/training",
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});

export const updateTrainingApi = (async (training) => {
    let bodyFormData = new FormData();
    bodyFormData.append('name', training.name);
    bodyFormData.append('category', training.category);
    bodyFormData.append('difficulty', training.difficulty);
    bodyFormData.append('price', training.price);
    bodyFormData.append('duration', training.duration);
    bodyFormData.append('startDate', training.startDate);
    bodyFormData.append('endDate', training.endDate);
    bodyFormData.append('location', training.location);
    bodyFormData.append('description', training.description);
    bodyFormData.append('urlImg', training.urlImg);
    bodyFormData.append('updated', training.updated);
    return await axios({
        method: "put",
        url: __BASE_URL + "/training/" + training.id,
        data: bodyFormData,
        headers: __HEADERS
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});

export const deleteTrainingApi = (async (id) => {
    return await axios({
        method: "delete",
        url: __BASE_URL + "/training/" + id,
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
        url: __BASE_URL + "/training/" + id,
        data: bodyFormData,
        headers: {
            "Content-Type": "multipart/form-data"
        }
    }).catch(err => {
        alert(err);
        console.log(err)
    })
});