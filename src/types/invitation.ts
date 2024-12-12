export interface InvitationFormData {
  eventType: string;
  hostNames: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  rsvpDeadline: string;
  customMessage: string;
  guestList: string;
  languageCode: string;
}

export interface InvitationRequest {
  eventType: string;
  hostNames: string;
  eventDate: string;
  eventTime: string;
  venue: string;
  rsvpDeadline: string;
  customMessage: string;
  guestList: string[];
  lang: string; // API expects 'lang' instead of 'languageCode'
}

export interface InvitationResponse {
  output: string;
  output_1732498863574: {
    output: string;
  };
  "19f72370-d1ab-4b25-832f-cfeccedcadec": string;
  "1f4b5b22-0469-4d68-9250-ea81f8c0be03": {
    latitude: number;
    longitude: number;
  };
  "5817d4b1-0134-4a52-96d9-7ff0b391b32b": {
    id: string;
    threadId: string;
    labelIds: string[];
  };
}