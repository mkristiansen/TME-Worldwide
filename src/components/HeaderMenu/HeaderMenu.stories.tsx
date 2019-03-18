/* tslint:disable no-var-requires */
const withReadme = (require("storybook-readme/with-readme") as any).default;
const HeaderMenuReadme = require("./README.md");

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { HeaderMenu } from "./HeaderMenu";

const items = [
  { name: "Home", path: "/", exact: true },
  { name: "TME Pictures", path: "/about/", exact: true },
  { name: "Community", path: "/blog/", exact: false },
  { name: "News", path: "/blog/", exact: false },
  { name: "Shop", path: "/blog/", exact: false },
  { name: "Origins", path: "/blog/", exact: false },
  { name: "Game Sign-up", path: "/blog/", exact: false },

];

const LinkStub = (props: any) =>
  <div {...props} onClick={action(props.to.toString())} >{props.children}</div>;
const dispatchStub = (a: any) => action(a.type)(a) && a;

storiesOf("HeaderMenu", module)
  .addDecorator(withKnobs)
  .addDecorator(withReadme(HeaderMenuReadme))
  .add("default", () => {
    const pathname = text("pathname", "/");
    const inverted = boolean("inverted", false);

    return (
      <HeaderMenu Link={LinkStub} items={items} pathname={pathname} inverted={inverted} dispatch={dispatchStub} />
    );
  });
