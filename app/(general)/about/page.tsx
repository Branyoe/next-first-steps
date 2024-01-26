import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
  keywords: ['about page', 'about', 'page', 'yoel', 'info', 'info page']
};

export default function About() {
  return (
    <span className="text-7xl">About Page</span>
  );
}