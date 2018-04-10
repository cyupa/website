import * as React from "react";
import IntegrationBuffer from "../../components/icons/integrations/IntegrationBuffer";
import IntegrationCampaignMonitor from "../../components/icons/integrations/IntegrationCampaignMonitor";
import IntegrationDelighted from "../../components/icons/integrations/IntegrationDelighted";
import IntegrationDisqus from "../../components/icons/integrations/IntegrationDisqus";
import IntegrationDrive from "../../components/icons/integrations/IntegrationDrive";
import IntegrationEvernote from "../../components/icons/integrations/IntegrationEvernote";
import IntegrationExcel from "../../components/icons/integrations/IntegrationExcel";
import IntegrationFacebook from "../../components/icons/integrations/IntegrationFacebook";
import IntegrationIntercom from "../../components/icons/integrations/IntegrationIntercom";
import IntegrationJira from "../../components/icons/integrations/IntegrationJira";
import IntegrationMailchimp from "../../components/icons/integrations/IntegrationMailchimp";
import IntegrationRev from "../../components/icons/integrations/IntegrationRev";
import IntegrationSalesforce from "../../components/icons/integrations/IntegrationSalesforce";
import IntegrationSlack from "../../components/icons/integrations/IntegrationSlack";
import IntegrationSurveymonkey from "../../components/icons/integrations/IntegrationSurveymonkey";
import IntegrationTrello from "../../components/icons/integrations/IntegrationTrello";
import IntegrationTwilio from "../../components/icons/integrations/IntegrationTwilio";
import IntegrationTwitter from "../../components/icons/integrations/IntegrationTwitter";
import IntegrationTypeform from "../../components/icons/integrations/IntegrationTypeform";
import IntegrationUservoice from "../../components/icons/integrations/IntegrationUservoice";
import IntegrationWordpress from "../../components/icons/integrations/IntegrationWordpress";
import IntegrationWufoo from "../../components/icons/integrations/IntegrationWufoo";
import IntegrationYoutube from "../../components/icons/integrations/IntegrationYoutube";
import IntegrationZendesk from "../../components/icons/integrations/IntegrationZendesk";
import { styled } from "../../util/styled";

export class Integrations extends React.PureComponent {
  public render() {
    return (
      <Wrapper>
        <Logo>
          <IntegrationBuffer />
        </Logo>
        <Logo>
          <IntegrationCampaignMonitor />
        </Logo>
        <Logo>
          <IntegrationDelighted />
        </Logo>
        <Logo>
          <IntegrationDisqus />
        </Logo>
        <Logo>
          <IntegrationDrive />
        </Logo>
        <Logo>
          <IntegrationEvernote />
        </Logo>
        <Logo>
          <IntegrationExcel />
        </Logo>
        <Logo>
          <IntegrationFacebook />
        </Logo>
        <Logo>
          <IntegrationIntercom />
        </Logo>
        <Logo>
          <IntegrationJira />
        </Logo>
        <Logo>
          <IntegrationMailchimp />
        </Logo>
        <Logo>
          <IntegrationRev />
        </Logo>
        <Logo>
          <IntegrationSalesforce />
        </Logo>
        <Logo>
          <IntegrationSlack />
        </Logo>
        <Logo>
          <IntegrationSurveymonkey />
        </Logo>
        <Logo>
          <IntegrationTrello />
        </Logo>
        <Logo>
          <IntegrationTwilio />
        </Logo>
        <Logo>
          <IntegrationTwitter />
        </Logo>
        <Logo>
          <IntegrationTypeform />
        </Logo>
        <Logo>
          <IntegrationUservoice />
        </Logo>
        <Logo>
          <IntegrationWordpress />
        </Logo>
        <Logo>
          <IntegrationWufoo />
        </Logo>
        <Logo>
          <IntegrationYoutube />
        </Logo>
        <Logo>
          <IntegrationZendesk />
        </Logo>
      </Wrapper>
    );
  }
}

const Wrapper = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  margin: "0 -32px"
});

const Logo = styled("div", {
  margin: "32px"
});
