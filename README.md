# Doc's Creator

A professional tool to create tender documentation for government bids in minutes.

## 🚀 Features

- **Quick Generate**: Instantly create documents from pre-defined templates.
- **Company Branding**: Upload your own letterhead, footer, watermark, and signature.
- **Export Options**: Download documents as PDF or Microsoft Word.
- **AI Integration**: Ready for Gemini AI to help generate content.

## 🛠️ Installation

1. **Extract the project**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   - Copy `.env.example` to `.env`
   - Add your `VITE_GEMINI_API_KEY` if you plan to use AI features.

## 💻 Running Locally

To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 📁 Project Structure

- `src/components`: Reusable UI components (Dashboard, Hero, etc.)
- `src/pages`: Main application pages (Branding, Generate)
- `src/templates`: Document templates logic
- `src/utils`: Helper functions for AI, API, and printing

## 📝 Usage

1. Go to **Company Branding** to set up your company details and upload images.
2. Return to the **Dashboard**.
3. Click **Quick Generate** on any document type to preview and download.
