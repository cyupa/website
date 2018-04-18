import IntegrationBuffer from "@heydovetail/website/components/icons/integrations/IntegrationBuffer";
import IntegrationCampaignMonitor from "@heydovetail/website/components/icons/integrations/IntegrationCampaignMonitor";
import IntegrationDelighted from "@heydovetail/website/components/icons/integrations/IntegrationDelighted";
import IntegrationDisqus from "@heydovetail/website/components/icons/integrations/IntegrationDisqus";
import IntegrationDrive from "@heydovetail/website/components/icons/integrations/IntegrationDrive";
import IntegrationEvernote from "@heydovetail/website/components/icons/integrations/IntegrationEvernote";
import IntegrationExcel from "@heydovetail/website/components/icons/integrations/IntegrationExcel";
import IntegrationFacebook from "@heydovetail/website/components/icons/integrations/IntegrationFacebook";
import IntegrationIntercom from "@heydovetail/website/components/icons/integrations/IntegrationIntercom";
import IntegrationJira from "@heydovetail/website/components/icons/integrations/IntegrationJira";
import IntegrationMailchimp from "@heydovetail/website/components/icons/integrations/IntegrationMailchimp";
import IntegrationRev from "@heydovetail/website/components/icons/integrations/IntegrationRev";
import IntegrationSalesforce from "@heydovetail/website/components/icons/integrations/IntegrationSalesforce";
import IntegrationSlack from "@heydovetail/website/components/icons/integrations/IntegrationSlack";
import IntegrationSurveymonkey from "@heydovetail/website/components/icons/integrations/IntegrationSurveymonkey";
import IntegrationTrello from "@heydovetail/website/components/icons/integrations/IntegrationTrello";
import IntegrationTwilio from "@heydovetail/website/components/icons/integrations/IntegrationTwilio";
import IntegrationTwitter from "@heydovetail/website/components/icons/integrations/IntegrationTwitter";
import IntegrationTypeform from "@heydovetail/website/components/icons/integrations/IntegrationTypeform";
import IntegrationUservoice from "@heydovetail/website/components/icons/integrations/IntegrationUservoice";
import IntegrationWordpress from "@heydovetail/website/components/icons/integrations/IntegrationWordpress";
import IntegrationWufoo from "@heydovetail/website/components/icons/integrations/IntegrationWufoo";
import IntegrationYoutube from "@heydovetail/website/components/icons/integrations/IntegrationYoutube";
import IntegrationZendesk from "@heydovetail/website/components/icons/integrations/IntegrationZendesk";
import { FlexWrap } from "@heydovetail/website/components/layout/FlexWrap";
import { Item } from "@heydovetail/website/components/layout/Item";
import * as React from "react";

export class Integrations extends React.PureComponent {
  public render() {
    return (
      // Since we’re using this as an “Illustration” in FeautureHeroLarge
      // We want it to line up with the other illustrations which are not full bleed
      <div style={{ margin: "64px 0" }}>
        <FlexWrap gap={64} justifyContent="center">
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
        </FlexWrap>
      </div>
    );
  }
}
