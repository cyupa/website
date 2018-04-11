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
import { GridWrap } from "../../components/layout/GridWrap";
import { Item } from "../../components/layout/Item";

export class Integrations extends React.PureComponent {
  public render() {
    return (
      // Since we’re using this as an “Illustration” in FeautureHeroLarge
      // We want it to line up with the other illustrations which are not full bleed
      <div style={{ margin: "64px 0" }}>
        <GridWrap gap={64} justifyContent="center">
          <Item>
            <IntegrationBuffer />
          </Item>
          <Item>
            <IntegrationCampaignMonitor />
          </Item>
          <Item>
            <IntegrationDelighted />
          </Item>
          <Item>
            <IntegrationDisqus />
          </Item>
          <Item>
            <IntegrationDrive />
          </Item>
          <Item>
            <IntegrationEvernote />
          </Item>
          <Item>
            <IntegrationExcel />
          </Item>
          <Item>
            <IntegrationFacebook />
          </Item>
          <Item>
            <IntegrationIntercom />
          </Item>
          <Item>
            <IntegrationJira />
          </Item>
          <Item>
            <IntegrationMailchimp />
          </Item>
          <Item>
            <IntegrationRev />
          </Item>
          <Item>
            <IntegrationSalesforce />
          </Item>
          <Item>
            <IntegrationSlack />
          </Item>
          <Item>
            <IntegrationSurveymonkey />
          </Item>
          <Item>
            <IntegrationTrello />
          </Item>
          <Item>
            <IntegrationTwilio />
          </Item>
          <Item>
            <IntegrationTwitter />
          </Item>
          <Item>
            <IntegrationTypeform />
          </Item>
          <Item>
            <IntegrationUservoice />
          </Item>
          <Item>
            <IntegrationWordpress />
          </Item>
          <Item>
            <IntegrationWufoo />
          </Item>
          <Item>
            <IntegrationYoutube />
          </Item>
          <Item>
            <IntegrationZendesk />
          </Item>
        </GridWrap>
      </div>
    );
  }
}
