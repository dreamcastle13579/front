import axios from "axios";

const instance = axios.create();

export const postInterpret = ({
  nickname,
  content,
}: {
  nickname: string;
  content: string;
}) => {
  return axios.post("/dreams/interpret", { data: { nickname, content } });
};

export default instance;
