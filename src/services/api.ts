// API service for handling invitation requests
export async function createInvitation(data) {
  const url = 'https://dzzu31.buildship.run/api/create-event';
  
  try {
    // Convert data object to URLSearchParams format
    const formData = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        // Handle arrays (like guestList)
        value.forEach(item => formData.append(key, item));
      } else {
        formData.append(key, value);
      }
    });

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString()
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}