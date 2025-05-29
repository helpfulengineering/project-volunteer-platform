// This function is used to fix the back navigation issue after signup where navigating back in history can show a stale or invalid Auth0 transaction page, leading to errors. This is a known issue when using auth0 and SPA. Need further testing as it doesn't seem to solve this problem.

import { useEffect } from "react";

export default function BackNavigationFix() {
  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        window.location.reload();
      }
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);
  return null;
}
