import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="book" />
          <Header.Content>
            News
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
          Great News!!!. We're launching a website.
        </p>
        <p>
          And today we're also launching the TME board game.
          Check it out on the <a href="/pictures/" target="blank">TME Picures</a> page.
        </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
