import axios from "axios";

export const api = axios.create({
  baseURL:
    "http://app-movies-django-env.eba-se3ptfd6.us-west-2.elasticbeanstalk.com/",
});
