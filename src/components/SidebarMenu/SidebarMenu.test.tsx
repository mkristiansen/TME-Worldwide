import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import { SidebarMenu } from "./SidebarMenu";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

const items = [
  { name: "Home", path: "/", exact: true },
  { name: "TME Pictures", path: "/about/", exact: true },
  { name: "Community", path: "/blog/", exact: false },
  { name: "News", path: "/blog/", exact: false },
  { name: "Shop", path: "/blog/", exact: false },
  { name: "Origins", path: "/blog/", exact: false },
  { name: "Game Sign-up", path: "/blog/", exact: false },
];

const LinkStub: any = (props: any) => <div {...props} />;

describe("SidebarMenu component", () => {
  it("should render correctly", () => {

    const wrapper = render(<SidebarMenu Link={LinkStub} pathname="/" items={items} visible />);
    expect(wrapper).toMatchSnapshot();
  });
});
