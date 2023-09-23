import axiosClient from "../axiosClient";
import axios from "axios";

// get all category
export function getCategories({ commit }) {
  axiosClient.get(`hackathon/categories-list`).then(({ data }) => {
    console.log(data);
    commit("setCategories", data);
  });
}

// register
export async function Register({ commit }, payload) {
  let postData = {
    email: payload.email,
    phone_number: payload.phone_number,
    team_name: payload.team_name,
    project_topic: payload.project_topic,
    category: payload.category,
    group_size: payload.group_size,
    privacy_poclicy_accepted: payload.privacy_poclicy_accepted,
  };
  // try and catch error
  let response = "";
  let errorMessage = "";
  try {
    response = await axios.post(
      `https://backend.getlinked.ai/hackathon/registration`,
      postData
    );
    console.log(response);
  } catch (err) {
    errorMessage = err;
    throw errorMessage;
  }
}
// contact
export async function Contact({ commit }, payload) {
  let postontact = {
    email: payload.email,
    phone_number: payload.phone_number,
    first_name: payload.first_name,
    message: payload.message,
  };
  // try and catch error
  let response = "";
  let errorMessage = "";
  try {
    response = await axios.post(
      `https://backend.getlinked.ai/hackathon/contact-form`,
      postontact
    );
    console.log(response);
  } catch (err) {
    errorMessage = err;
    throw errorMessage;
  }
}
