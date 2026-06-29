import "./globals.css";

export const metadata = {
  title: "Second App",
  description: "Next.js CI/CD Practice Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}