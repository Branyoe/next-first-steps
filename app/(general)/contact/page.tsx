import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact page, give info about contact',
  keywords: ['contact', 'contact page', 'contact info', 'contact info page', 'contact page info', 'contact info page info'],
};

export default function ContactPage() {
  return (
    <span className="text-7xl">Contact Page</span>
  )
}
