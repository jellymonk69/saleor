import { storiesOf } from "@storybook/react";
import * as React from "react";

import ShippingZoneDetailsPage, {
  ShippingZoneDetailsPageProps
} from "../../../shipping/components/ShippingZoneDetailsPage";
import { shippingZone } from "../../../shipping/fixtures";
import Decorator from "../../Decorator";

const props: ShippingZoneDetailsPageProps = {
  disabled: false,
  onBack: () => undefined,
  onCountryAdd: () => undefined,
  onCountryRemove: () => undefined,
  onDelete: () => undefined,
  onPriceRateAdd: () => undefined,
  onPriceRateEdit: () => undefined,
  onPriceRateRemove: () => undefined,
  onSubmit: () => undefined,
  onWeightRateAdd: () => undefined,
  onWeightRateEdit: () => undefined,
  onWeightRateRemove: () => undefined,
  saveButtonBarState: "default",
  shippingZone
};

storiesOf("Views / Shipping / Shipping zone details", module)
  .addDecorator(Decorator)
  .add("default", () => <ShippingZoneDetailsPage {...props} />)
  .add("loading", () => (
    <ShippingZoneDetailsPage
      {...props}
      disabled={true}
      shippingZone={undefined}
    />
  ));
