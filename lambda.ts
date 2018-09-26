import { priceOrder, buildPizza } from "./pizza/pizza";
import { buildSuccessfulResponse, buildErrorResponse } 
  from "./utils/lex.utils";
import { LexEvent, LexResponse } from "../types/lex";

module.exports.orderPizza = async 
  (event: LexEvent): Promise<LexResponse> => {
  try {
    console.log(JSON.stringify(event, null, 2));

    //Grab the data from the Lex Slots
    const { PizzaType, PizzaSize } = event.currentIntent.slots;

    //Build a pizza object from the given Slots
    const pizza = buildPizza([PizzaType], PizzaSize);

    //Make an async call to the Dominos API
    const response = await priceOrder(pizza);
    console.log(JSON.stringify(response.data, null, 2));

    //Build the response message
    const { Payment } = response.data.Order.Amounts;
    const { EstimatedWaitMinutes } = response.data.Order;
    
    const message = `Your total will be, $${Payment}. And your 
      estimated wait time is ${EstimatedWaitMinutes} minutes. 
      Please have cash or a credit card ready when your pizza 
      is delivered.`;

    return buildSuccessfulResponse(message);
  } catch (e) {
    console.error(e);
    return buildErrorResponse(
      "We are unable to process your request at this time"
    );
  }
};
