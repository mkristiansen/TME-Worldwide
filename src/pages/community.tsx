import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";
import {withLayout} from "../components/Layout";

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            Share your Picture!
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
          If you have a drawing that you think will make a good TME (Card)
        </p>
        <p>
          Take a high-resolution picture of it.
        </p>
        <p>
          Send it in to us at <a href="mailto:morten.kristiansen@gmail.com" target="blank"> our email address</a>
        </p>
        <p>
          We will share the new TME (Card) on this site, check out the news.
        </p>
      </Segment>
    </Container>
  );
};

export default withLayout(AboutPage);
