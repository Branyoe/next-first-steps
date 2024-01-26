import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'pricing page, give info about pricing',
  keywords: ['pricing', 'pricing page', 'pricing info', 'pricing info page', 'pricing page info', 'pricing info page info'],
};

export default function PricingPage() {
  return (
    <span className="text-7xl">Pricing Page</span>
  )
}
