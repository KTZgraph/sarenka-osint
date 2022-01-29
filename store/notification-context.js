import { createContext, useState } from "react";

// nazwa z wielkiej żeby było wiadomo, że można Providera wyciągnąć
const NotificationContext = createContext({
  notification: null, //{title, messsage, status}
  showNotification: function (notificationData) {}, //inicjalizacyjnie pusta punckja
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData);
  }

  function hideNotificationHandler() {
    setActiveNotification(null);
  }

  // poniższy obiekt rozdytrubuuję do wszsytkich zainteresowanych komponentów
  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
