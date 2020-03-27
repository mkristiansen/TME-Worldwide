import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";
import Checkout from "../components/checkout";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="money" />
          <Header.Content>
            Shop
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
          On this page you can order one of our special TME Cards
        </p>
        <Checkout />
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
