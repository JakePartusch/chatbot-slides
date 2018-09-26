import { PizzaSize, PizzaType } from "./pizza";

export interface LexEvent {
  currentIntent: {
    slots: {
      PizzaType: PizzaType;
      PizzaSize: PizzaSize;
    };
    name: string;
    confirmationStatus: "None" | "Confirmed" | "Denied";
  };
  bot: {
    alias: string;
    version: string;
    name: string;
  };
  userId: string;
  invocationSource: "FulfillmentCodeHook" | "DialogCodeHook";
  outputDialogMode: "Text" | "Voice";
  messageVersion: string;
  sessionAttributes: object;
}

export interface LexResponse {
  sessionAttributes: object;
  dialogAction: {
    type:
      | "ElicitIntent"
      | "ElicitSlot"
      | "ConfirmIntent"
      | "Delegate"
      | "Close";
    fulfillmentState: "Fulfilled" | "Failed";
    message: {
      contentType: "PlainText" | "SSML" | "CustomPayload";
      content: string;
    };
  };
}
