import axios from 'axios';

const instance =axios.create({
    baseURL:'https://react-burger-app-95d8c.firebaseio.com/'
});

export default instance;