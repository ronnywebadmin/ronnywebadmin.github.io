# Web3Forms Contact Setup

The contact form posts directly to Web3Forms from the static site. No backend is required.

## Setup

1. Go to `https://web3forms.com/`.
2. Create an access key for `johanna.castillo7878@gmail.com`.
3. Check that inbox and complete Web3Forms verification if prompted.
4. Add the access key locally:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

5. Run `npm.cmd run build`.

Vite bakes `VITE_*` values into the built JavaScript, so the key must be present wherever the production build is created. Web3Forms access keys are intended for frontend use, but this still means the key is visible in the published site bundle.

## Testing

Submit the contact form after the access key is configured. Web3Forms should email `johanna.castillo7878@gmail.com`. The visitor email is included in the payload so replies can go back to the sender.

## Later Recipient Change

When testing is done, create or use a Web3Forms access key for the final recipient email and update:

- `VITE_WEB3FORMS_ACCESS_KEY`
- `contactRecipientEmail` in `src/pages/ContactPage.jsx`
