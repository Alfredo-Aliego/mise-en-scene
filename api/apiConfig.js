"use client";

import axios from "axios";

const api = axios.create({
  baseURL:
    "http://app-movies-django-env.eba-se3ptfd6.us-west-2.elasticbeanstalk.com",
});

export default api;
