import { buildSuccessfulResponse } from './utils/lex.utils';
import { LexEvent, LexResponse } from '../types/lex';
import PollingPlaceApi from './api/pollingPlaceApi';

module.exports.retrievePollingPlace = 
  async (event: LexEvent): Promise<LexResponse> => {

  const { StreetAddress, ZipCode, County } 
    = event.currentIntent.slots;

  //Sarpy 301600, Douglas 301400
  const countyCode = County === 'Douglas' ? 301400 : 301600;

  const sessionCookie = await PollingPlaceApi.getSessionCookie();
  
  const pollingLocation = await PollingPlaceApi.fetchPollingPlace(
    StreetAddress,
    ZipCode,
    countyCode,
    sessionCookie
  );

  console.log(JSON.stringify(pollingLocation, null, 2));

  return buildSuccessfulResponse(
    `Your polling place is ${pollingLocation.name}, 
    which is located at: ${pollingLocation.address}`
  );
};
