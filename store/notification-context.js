import { createContext, useState } from "react";

// nazwa z wielkiej żeby było wiadomo, że można Providera wyciągnąć
const NotificationContext = createContext({
  notification: null, //{title, messsage, status}
  showNotification: function () {}, //inicjalizacyjnie pusta punckja
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {}

  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
