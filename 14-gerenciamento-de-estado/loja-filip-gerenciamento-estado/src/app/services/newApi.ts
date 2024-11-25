import axios from "axios";

const newAPi = axios.create({
  baseURL: "https://bloom-wandering-amphibian.glitch.me"
});

export default newAPi;