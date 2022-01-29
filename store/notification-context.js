import { createContext } from "react";

const notificationContext = createContext({
  notification: null, //{title, messsage, status}
  showNotification: function () {}, //inicjalizacyjnie pusta punckja
  hideNotification: function () {},
});


export default notificationContext;