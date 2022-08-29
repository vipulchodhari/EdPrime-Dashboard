import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { RECEIVE_FETCHDATA, REQUEST_FETCHDATA } from '../action/actionTypes';

function* getData(){
    let data = yield call(axios.get(`http://192.100.100.58:3000/books`))

    console.log("fetch data in saga", data);

    yield put({type: RECEIVE_FETCHDATA, data})
}

function* categorySaga(){
    yield takeEvery(REQUEST_FETCHDATA, getData)
}

export default categorySaga;