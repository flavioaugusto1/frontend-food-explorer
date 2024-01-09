import { toast } from "react-toastify";

export const toastNotify = {
  success: (message) => {
    toast.success(`${message}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  },
  error: (message) => {
    toast.error(`${message}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  },
  warn: (message) => {
    toast.warn(`${message}`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  },
};
