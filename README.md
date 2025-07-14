# Website Blocker Chrome Extension

Blocks access to distracting websites you specify, helping you stay focused and productive.

![Extension Icon](images/blockchain.png)

## Features
- Block any website by adding its URL
- See a list of all blocked sites
- Clear all blocked sites with one click
- Friendly UI and motivational block page
- No data leaves your browser (privacy-friendly)

## Installation

### From Source (Locally)
1. **Clone or Download this Repository**
   - Click the green `Code` button on GitHub and select `Download ZIP` or use:
     ```bash
     git clone https://github.com/your-username/site-blocking-extension.git
     ```
2. **Open Chrome and go to** `chrome://extensions/`
3. **Enable Developer Mode** (toggle in the top right)
4. **Click "Load unpacked"** and select the folder where you cloned/downloaded this repo
5. The extension should now appear in your Chrome extensions bar

## Usage
1. Click the extension icon in your browser toolbar
2. In the popup:
   - Enter the website you want to block (e.g., `facebook.com` or `https://twitter.com`)
   - Click `Add` to block the site
   - Blocked sites will appear in the list below
   - Click `Clear All` to remove all blocked sites
3. When you try to visit a blocked site, you'll see a motivational block page instead

## Screenshots
| Popup UI | Block Page |
|---|---|
| ![Popup](images/blockchain.png) | ![Block Page](images/blockchain.png) |

## Development
- **Manifest Version:** 3
- **Main Files:**
  - `background.js` — Handles blocking logic
  - `popup.html`, `popup.js`, `popup.css` — User interface
  - `focus.html` — Shown when a blocked site is accessed
- **Icons:** Located in `images/`

### To Modify Block Logic or UI
- Edit `background.js` for blocking rules
- Edit `popup.html`/`popup.js`/`popup.css` for the popup interface
- Edit `focus.html` for the block page

## License
MIT (or specify your license here)

---
Made with ❤️ by Ankit Singh
