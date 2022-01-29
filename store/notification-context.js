import { createContext } from "react";

// nazwa z wielkiej żeby było wiadomo, że można Providera wyciągnąć
const NotificationContext = createContext({
  notification: null, //{title, messsage, status}
  showNotification: function () {}, //inicjalizacyjnie pusta punckja
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
    // ta funkcją opakowywać komponenty, które powinny mieć dostęp do tego kontekstu
    // będzie ogarnaić wszystkiecontext-realteted state - useState etc żeby pokazywać i chować tutaj notyfikacje
  return (
    <NotificationContext.Provider>
      {props.children}
    </NotificationContext.Provider>
  );
}

export default NotificationContext;
