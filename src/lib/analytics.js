// Provider-neutral analytics interface.
// Non-blocking conversion tracking. Never throws, never blocks navigation.
// Currently acts as a clean stub until an analytics provider is configured.
export function trackEvent(eventName, properties = {}) {
    try {
        if (typeof window !== 'undefined' && window.__ANALYTICS_DEBUG__) {
            console.debug('[analytics]', eventName, properties);
        }
        // Future provider integration hook (e.g. Plausible, PostHog, GA4) can be dispatched here safely.
    } catch {
        /* analytics must never break the UI */
    }
}