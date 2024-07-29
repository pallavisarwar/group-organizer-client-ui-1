import http from "../common/httpCommon";

export const getHealth = async () => {
  return await http.get();
};
