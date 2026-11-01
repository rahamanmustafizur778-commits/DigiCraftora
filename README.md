# Once Again Unisex Salon – Website

Plain HTML/CSS/JS. No build step. Open `index.html` to preview.

```
index.html   page structure
style.css    black / charcoal / gold theme
script.js    EDIT block at top: phone, links, translations, prices, gallery, form endpoint
images/      optimized salon photos
```

## Edit content
- **Prices / services:** `CATS` in `script.js` (`name|price`, `500+` = onwards, `inq` = on inquiry).
- **Languages:** `T` in `script.js` (English, Hindi, Bengali).
- **Address and hours:** `addrV` and `hrsV` in each language of `T`.
- **Photos:** replace files in `images/`, then update `GALLERY`.

## Booking form (not connected yet)
The form validates input but **does not send bookings**. Until `CONFIG.FORM_ENDPOINT` is set, it only offers a pre-filled WhatsApp message.
To connect: create a free Formspree (or Web3Forms) form, paste its URL into `FORM_ENDPOINT`, then **submit a real test and confirm the salon receives it**. A request is never a confirmed booking; the salon must reply.

## Free preview hosting
- **Netlify Drop:** go to app.netlify.com/drop and drag the whole folder in.
- **Cloudflare Pages / GitHub Pages:** upload the folder to a repo and enable Pages.

## Custom domain
1. Buy a domain (GoDaddy, Namecheap, etc.).
2. In your host (Netlify/Cloudflare/GitHub Pages), choose **Add custom domain** and enter it.
3. At the domain registrar's DNS page, add what the host shows: usually an `A` record (or `ALIAS`) for the root domain and a `CNAME` for `www`.
4. Wait for DNS (minutes to 48 h), then enable HTTPS in the host.
5. In `index.html`, change `og:image` to the full URL, e.g. `https://yourdomain.com/images/hero.jpg`.

## Deploy updates
Edit files, then re-upload the folder (Netlify Drop) or commit and push (GitHub/Cloudflare).

## Verify before publishing
- [ ] Both phone and WhatsApp numbers work
- [ ] Google Maps, both Facebook links and Justdial open the right pages
- [ ] Address and opening hours added
- [ ] Every price checked against the current salon menu (waxing and foot reflexology prices especially)
- [ ] Salon owner approves photos and Hindi/Bengali text
- [ ] Booking form connected and tested end to end
- [ ] `og:image` URL set; domain and HTTPS working
