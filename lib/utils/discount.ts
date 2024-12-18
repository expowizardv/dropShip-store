export function generateDiscountCode(email: string): string {
  const timestamp = Date.now().toString(36);
  const emailHash = btoa(email).slice(0, 5);
  return `WELCOME${emailHash}${timestamp}`.toUpperCase();
}