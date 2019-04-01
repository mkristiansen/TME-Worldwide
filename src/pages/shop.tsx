import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

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
          Our TME Shop will be coming soon. Come here to buy our TME board game and all of our merchandise.
        </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
