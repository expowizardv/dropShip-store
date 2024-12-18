"use client";

import { getDeviceFingerprint } from "@/lib/utils/device";

const POPUP_COOKIE_NAME = "email_popup_shown";
const POPUP_COOKIE_DURATION = 7; // days

export function usePopupStorage() {
  const hasSeenPopup = () => {
    const cookie = document.cookie
      .split("; ")
      .find(row => row.startsWith(POPUP_COOKIE_NAME));
    
    if (cookie) {
      const [_, value] = cookie.split("=");
      return value === getDeviceFingerprint();
    }
    
    return false;
  };

  const markPopupAsSeen = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + POPUP_COOKIE_DURATION);
    document.cookie = `${POPUP_COOKIE_NAME}=${getDeviceFingerprint()}; expires=${expires.toUTCString()}; path=/`;
  };

  return {
    hasSeenPopup,
    markPopupAsSeen,
  };
}