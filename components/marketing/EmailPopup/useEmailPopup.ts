"use client";

import { useState, useEffect } from "react";
import { getDeviceFingerprint } from "@/lib/utils/device";
import { usePopupStorage } from "./usePopupStorage";

const POPUP_DELAY = 3000; // 3 seconds

export function useEmailPopup() {
  const [open, setOpen] = useState(false);
  const { hasSeenPopup, markPopupAsSeen } = usePopupStorage();
  const [shouldShowPopup, setShouldShowPopup] = useState(false);

  useEffect(() => {
    if (!hasSeenPopup()) {
      const timer = setTimeout(() => {
        setShouldShowPopup(true);
        markPopupAsSeen();
      }, POPUP_DELAY);

      return () => clearTimeout(timer);
    }
  }, [hasSeenPopup, markPopupAsSeen]);

  return {
    open,
    setOpen,
    shouldShowPopup,
  };
}