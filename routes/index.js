const express = require('express');

const router = express.Router();

// 주소 + /user 설정
const User = "/user";

const routes = {
    user: User,
};


module.exports = routes;