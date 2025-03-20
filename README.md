# Genify

A modern web application that generates intelligent, context-aware responses using Google's Gemini AI. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🤖 AI-powered response generation using Gemini AI
- 🎨 Modern, responsive UI with Tailwind CSS
- ✨ Beautiful animations and transitions
- 🔒 Secure API key handling
- 📱 Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Gemini API key

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/genify.git
cd genify
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```bash
cp .env.example .env
```
Then edit `.env` and add your actual API key.

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- Google Gemini AI

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Shravan Kondekar
- GitHub: [@sxrvn](https://github.com/sxrvn)
- LinkedIn: [Shravan Kondekar](https://www.linkedin.com/in/shravan-kondekar/)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# Genify-Bot
