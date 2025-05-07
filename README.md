# Ideal Resume

A React and TypeScript-based application for creating professional resumes with ease. This project provides a user-friendly interface to design, customize, and export resumes.

## Features

- Multiple templates to choose from.
- Real-time preview of the resume.
- Export resumes in PDF format.
- Fully responsive design.

## Folder Structure

```
src/
├── api/           
│   ├── context/
│   ├── hooks/
│   ├── templates/
│   ├── types/
│   ├── utils/
│   └── workers/
│
├── layout/
│   ├── header/
│   ├── main/
│   └── footer/
│
├── components/
│   ├── ui/
│   ├── views/
│   └── widgets/
│
├── config/
│   ├── fields/
│   ├── form/
│   └── tabs/
│
├── context/
│   ├── app/
│   └── language/
│
├── hooks/
│
├── locales/
│
├── mock/
│
├── App.tsx
└── index.tsx
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sebastianvelo/ideal-resume.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ideal-resume
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Running the App

Start the development server:
```
npm run build:tailwind
npm start
```
The app will be available at `http://localhost:3000`.

### Building for Production

To create a production build:
```bash
npm run build
```
