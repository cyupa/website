import IntegrationBuffer from "@heydovetail/website/components/icons/account/integrations/IntegrationBuffer";
import IntegrationCampaignMonitor from "@heydovetail/website/components/icons/account/integrations/IntegrationCampaignMonitor";
import IntegrationDelighted from "@heydovetail/website/components/icons/account/integrations/IntegrationDelighted";
import IntegrationDisqus from "@heydovetail/website/components/icons/account/integrations/IntegrationDisqus";
import IntegrationDrive from "@heydovetail/website/components/icons/account/integrations/IntegrationDrive";
import IntegrationEvernote from "@heydovetail/website/components/icons/account/integrations/IntegrationEvernote";
import IntegrationExcel from "@heydovetail/website/components/icons/account/integrations/IntegrationExcel";
import IntegrationFacebook from "@heydovetail/website/components/icons/account/integrations/IntegrationFacebook";
import IntegrationIntercom from "@heydovetail/website/components/icons/account/integrations/IntegrationIntercom";
import IntegrationJira from "@heydovetail/website/components/icons/account/integrations/IntegrationJira";
import IntegrationMailchimp from "@heydovetail/website/components/icons/account/integrations/IntegrationMailchimp";
import IntegrationRev from "@heydovetail/website/components/icons/account/integrations/IntegrationRev";
import IntegrationSalesforce from "@heydovetail/website/components/icons/account/integrations/IntegrationSalesforce";
import IntegrationSlack from "@heydovetail/website/components/icons/account/integrations/IntegrationSlack";
import IntegrationSurveymonkey from "@heydovetail/website/components/icons/account/integrations/IntegrationSurveymonkey";
import IntegrationTrello from "@heydovetail/website/components/icons/account/integrations/IntegrationTrello";
import IntegrationTwilio from "@heydovetail/website/components/icons/account/integrations/IntegrationTwilio";
import IntegrationTwitter from "@heydovetail/website/components/icons/account/integrations/IntegrationTwitter";
import IntegrationTypeform from "@heydovetail/website/components/icons/account/integrations/IntegrationTypeform";
import IntegrationUservoice from "@heydovetail/website/components/icons/account/integrations/IntegrationUservoice";
import IntegrationWordpress from "@heydovetail/website/components/icons/account/integrations/IntegrationWordpress";
import IntegrationWufoo from "@heydovetail/website/components/icons/account/integrations/IntegrationWufoo";
import IntegrationYoutube from "@heydovetail/website/components/icons/account/integrations/IntegrationYoutube";
import IntegrationZendesk from "@heydovetail/website/components/icons/account/integrations/IntegrationZendesk";
import { FlexWrap } from "@heydovetail/website/components/layout/FlexWrap";
import { Item } from "@heydovetail/website/components/layout/Item";
import React from "react";

export class Integrations extends React.PureComponent {
  public render() {
    return (
      // Since we’re using this as an “Illustration” in FeautureHeroLarge
      // We want it to line up with the other illustrations which are not full bleed
      <div style={{ margin: "64px 0" }}>
        <FlexWrap styled={{ gap: 64, justifyContent: "center" }}>
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
