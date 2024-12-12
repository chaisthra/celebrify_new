import { InvitationFormData, InvitationRequest } from '../types/invitation';

export function transformFormDataToRequest(formData: InvitationFormData): InvitationRequest {
  // Split guestList string into array and clean up email addresses
  const guestList = formData.guestList
    .split(',')
    .map(email => email.trim())
    .filter(email => email.length > 0);

  return {
    customMessage: formData.customMessage,
    venue: formData.venue,
    hostNames: formData.hostNames,
    eventType: formData.eventType,
    rsvpDeadline: formData.rsvpDeadline,
    guestList: guestList,
    eventDate: formData.eventDate,
    eventTime: formData.eventTime,
    lang: formData.languageCode
  };
}