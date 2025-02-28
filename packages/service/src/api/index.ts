import axios from "axios";

const instance = axios.create();

export const postInterpret = ({
  promptType,
  nickname,
  content,
}: {
  promptType?: string;
  nickname: string;
  content: string;
}) => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/dreams/interpretation`, {
    promptType,
    nickname,
    content,
  });
};

export default instance;
