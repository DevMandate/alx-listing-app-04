# ALX Listing App

The **ALX Listing App** is a simplified Airbnb clone focused on building a dynamic, responsive, and reusable property listing page. The goal of this project is to provide a solid foundation for developing user interfaces that display real estate or rental property listings, using modern tools and best practices in web development.

---

## 🚀 Project Goals

- Scaffold a well-structured Next.js application with TypeScript.
- Integrate Tailwind CSS for fast and responsive UI styling.
- Build reusable components like cards and buttons for listings.
- Maintain clean code using ESLint and organized TypeScript interfaces.
- Prepare asset handling and constants for scalability.

---

## 🧱 Project Structure

```bash
alx-listing-app/
├── components/
│   └── common/
│       ├── Card.tsx         # Reusable component to display listing details
│       └── Button.tsx       # Reusable button component for actions
│
├── interfaces/
│   └── index.ts             # TypeScript interfaces (e.g., props for components)
│
├── constants/
│   └── index.ts             # Project-wide constants like API URLs and UI text
│
├── public/
│   └── assets/              # Static assets like images and SVGs
│
├── pages/
│   └── index.tsx            # Home page that displays listings using components
│
├── styles/
│   └── globals.css          # Global Tailwind CSS imports
│
├── tailwind.config.js       # TailwindCSS configuration
├── tsconfig.json            # TypeScript configuration
├── .eslintrc.json           # ESLint configuration
└── README.md                # Project overview and setup guide

```

---

## 🛠️ Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the Repository


git clone https://github.com/your-username/alx-listing-app.git
cd alx-listing-app

---
### 2. Install Dependencies

npm install

### 3. Run the Development Server
npm run dev

### 4. Open the App
Visit http://localhost:3000 in your browser. You should see the default or custom homepage.


## 📁 Notes
- Make sure any new components are placed under components/.
- All shared interfaces should be defined in interfaces/index.ts.
- Add any new static images or icons to public/assets/.
- Store project-wide constants and strings in constants/index.ts.

