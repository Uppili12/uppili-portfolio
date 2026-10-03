export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: {
    id: number;
    name: string;
    email: string;
    subject: string;
    created_at: string;
  };
  errors?: string[];
}

const API_URL =
  import.meta.env.VITE_API_URL;

export const sendContactMessage = async (
  formData: ContactFormData
): Promise<ContactResponse> => {
  const response = await fetch(
    `${API_URL}/contact`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const data: ContactResponse =
    await response.json();

  if (!response.ok) {
    if (data.errors?.length) {
      throw new Error(
        data.errors.join(" ")
      );
    }

    throw new Error(
      data.message || "Unable to send message."
    );
  }

  return data;
};