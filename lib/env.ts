export const getServerEnv = () => {
  const adminEmail = process.env.ADMIN_EMAIL;
  const apiKey = process.env.CONTACT_FORM_API_KEY;

  if (!adminEmail || !apiKey) {
    throw new Error("Missing required environment variables");
  }

  return {
    adminEmail,
    apiKey,
  };
};

export const maskApiKey = (key: string): string => {
  if (key.length <= 6) return "***";
  return `${key.slice(0, 3)}****${key.slice(-3)}`;
};
