import { base44 } from "@/api/base44Client";

// Non-blocking conversion tracking. Never throws, never blocks navigation.
export function trackEvent(eventName, properties = {}) {
    try {
        base44.analytics.track({ eventName, properties });
    } catch {
        /* analytics must never break the UI */
    }
}