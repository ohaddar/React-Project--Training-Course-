export const setData = (key, value) => {
  localStorage.setItem(key, value);
};
export const getData = (key) => {
  localStorage.getItem(key);
};
export const getAllDatas = () => {
  localStorage;
};
export const removeData = (key) => {
  localStorage.removeItem(key);
};
export const removeAllDatas = () => {
  localStorage.clear();
};
export const setSessionData = (key, value) => {
  localStorage.setItem(key, value);
};
export const getSessionData = (key, value) => {
  localStorage.getItem(key, value);
};
export const getAllSessionDatas = () => {
  return sessionStorage;
};
export const removeSessionData = (key) => {
  sessionStorage.removeItem(key);
};
export const removeAllSessionData = () => {
  sessionStorage.clear();
};
