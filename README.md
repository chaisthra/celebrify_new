# Celebrify Workflow 🚀

### **Overview**
Celebrify is a free event invitation platform designed to simplify the process of creating and managing event invites. The workflow leverages AI for creating personalized invitation text, modern designs, and custom music tracks. It also integrates multilingual support, geolocation for venues, and email reminders, making it a comprehensive solution for events like weddings, birthdays, and corporate gatherings.

### **Features**
- AI-generated personalized invitation text and designs.
- Multilingual support for global users.
- Automatic music generation for invite videos.
- Venue geolocation integration.
- Automated email reminders to guest lists.

---

## **Prerequisites**
To run this workflow, you'll need:
1. **Accounts and API Keys**:
   - Gemini API Key (for text generation).
   - Replicate API Key (for music and image generation).
   - Google Maps API Key (for geolocation).
   - Gmail account credentials for sending invitations.

2. **Supabase Database**:
   - A database table to store event details. Ensure the following schema exists:
     ```sql
     CREATE TABLE invite (
       eventID SERIAL PRIMARY KEY,
       eventType VARCHAR,
       hostNames VARCHAR,
       eventDate DATE,
       eventTime TIME,
       venue VARCHAR,
       rsvpDeadline DATE,
       customMessage TEXT,
       guestList TEXT
     );
     ```

---

## **How to Use**
### **Step 1: Set Up API Keys**
- Add your API keys in the respective input fields or environment variables:
  - Gemini API Key
  - Replicate API Key
  - Google Maps API Key
  - Gmail API credentials

### **Step 2: Input Event Details**
1. Fill out the form on the **Celebrify frontend**:
   - Event Type
   - Host Names
   - Event Date & Time
   - Venue
   - RSVP Deadline
   - Custom Message
   - Guest List (comma-separated emails)
2. Submit the form to trigger the backend workflow.

### **Step 3: Run the Workflow**
The workflow:
1. Generates invitation text using Gemini (Gemini).
2. Translates the invitation text (if needed).
3. Creates modern invitation designs using Replicate’s Flux image generator.
4. Generates custom music tracks using Replicate's music generator.
5. Fetches venue geolocation via Google Maps API.
6. Sends email reminders to guests using Gmail API.

### **Step 4: Test and Verify**
- Use tools like Postman or Hoppscotch to test the REST API endpoint:
  ```
  POST https://dzzu31.buildship.run/api/create-event
  Content-Type: application/json
  Body:
  {
    "eventType": "wedding",
    "hostNames": "John Doe and Jane Smith",
    "eventDate": "2024-12-31",
    "eventTime": "18:00",
    "venue": "123 Main St, Springfield",
    "rsvpDeadline": "2024-12-15",
    "customMessage": "We are thrilled to invite you to our special day.",
    "guestList": "guest1@example.com, guest2@example.com"
  }
  ```

### **Step 5: Output**
The workflow generates:
- A text-based invitation in multiple languages (if specified).
- A downloadable invitation image URL.
- A custom music track URL.
- Venue geolocation coordinates.
- Automated emails sent to the guest list.

---

## **Resources**
- **Frontend**: The web interface for user input.
- **Backend**: Workflow logic powered by Buildship.
- **APIs**:
  - [Gemini](https://Gemini.com/api/) for text generation.
  - [Replicate](https://replicate.com/) for music and image generation.
  - [Google Maps](https://cloud.google.com/maps-platform) for geolocation.
  - [Gmail API](https://developers.google.com/gmail/api) for email delivery.

---

## **Future Enhancements**
- Add integration for virtual event hosting.
- Enable RSVP tracking for attendees.
- Provide analytics on guest engagement and invitation views.
