import axios from "axios";



const addEmail = (payload) => {

  const config = {
    method: "POST",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: { "Content-Type": "application/json" }
  };

  return axios(config);
};





let emailService = { addEmail };

export default emailService;
















