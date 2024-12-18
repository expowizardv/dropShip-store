export function getDeviceFingerprint(): string {
  const userAgent = window.navigator.userAgent;
  const screenResolution = `${window.screen.width}x${window.screen.height}`;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const language = window.navigator.language;
  
  // Create a unique fingerprint by combining device data
  const fingerprint = `${userAgent}-${screenResolution}-${timezone}-${language}`;
  return btoa(fingerprint); // Base64 encode the fingerprint
}