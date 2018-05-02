import React from "react";
import { KeyboardListener } from "../KeyboardListener";

export function OnEsc({ action }: { action: () => void }) {
  return <KeyboardListener eventType="keydown" eventKey="Escape" onEvent={action} />;
}
