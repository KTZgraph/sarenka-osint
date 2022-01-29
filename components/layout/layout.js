import { Fragment } from "react";
import MainNavigation from "./main-navigation";
import MainMenu from "./main-menu";

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <MainMenu />
      <main className="main">{props.children}</main>
      {/* notyfikacje dla każdego zainnteresowane komponentu */}
      <Notification title="test" message="this is a message" status="error" />
    </Fragment>
  );
}

export default Layout;
