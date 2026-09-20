# Contact Form Server-Side API Specification (POST /api/contact)

This directory houses the independent server-side boundary for the Marth Systems contact form.

## Intended Architecture

```
User submits form on https://marthsystems.com/contact
  ↓
Browser sends POST /api/contact with JSON payload
  ↓
Independent Serverless/Edge Handler (Cloudflare / Vercel / Netlify / Node)
  ↓
Validation & Department Routing (server/contact-handler.js)
  ↓
Server-side Email Provider (Resend / SendGrid / Postmark / AWS SES / SMTP)
  ↓
Destination Department Inbox (e.g., credentialing@marthsystems.com)
  ↓
JSON response `{ success: true }` sent to browser
  ↓
Browser navigates to /thank-you
```

## Department Email Routing

The destination inbox is determined exclusively by the server based on the selected `service`:

| Service Selected | Destination Inbox |
|---|---|
| Credentialing | `credentialing@marthsystems.com` |
| Provider Enrollment | `credentialing@marthsystems.com` |
| Billing | `billing@marthsystems.com` |
| AR Management | `billing@marthsystems.com` |
| Prior Authorization | `support@marthsystems.com` |
| Patient Support | `support@marthsystems.com` |
| Provider Contracting | `info@marthsystems.com` |
| Multiple Services | `info@marthsystems.com` |
| Other / No selection | `info@marthsystems.com` |

## Security & Privacy Requirements

1. **Server-Side Enforcement**: The client must never specify or override the recipient email address.
2. **Zero Client Secrets**: Email API keys, SMTP credentials, and private tokens must never be bundled into client-side code or exposed in frontend environment variables.
3. **Sensitive Data Protection**: Never log free-text message contents to server logs or analytics providers.
4. **Method Constraint**: Only `POST` requests are allowed; return `405 Method Not Allowed` for any other HTTP method.
5. **Anti-Abuse**: Rate-limiting or Honeypot/Turnstile/reCAPTCHA can be integrated at the edge if needed.
