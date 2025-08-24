import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-black py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="HomeItems Logo" width={150} height={40} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-orange-500 hover:text-orange-400">
              ABOUT US
            </Link>
            <Link href="/categories" className="text-orange-500 hover:text-orange-400">
              CATEGORIES
            </Link>
            <Link href="/featured" className="text-orange-500 hover:text-orange-400">
              FEATURED
            </Link>
            <Link href="/news" className="text-orange-500 hover:text-orange-400">
              NEWS
            </Link>
            <Link href="/contact" className="text-orange-500 hover:text-orange-400">
              CONTACT
            </Link>
          </nav>
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </header>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About HomeItems</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Welcome to HomeItems, your trusted marketplace for quality pre-owned household items. We believe in giving
              household items a second life while helping our customers find affordable solutions for their homes.
            </p>
            <p className="text-lg mb-6">
              Our mission is to create a sustainable marketplace where sellers can find new homes for their quality
              items, and buyers can discover unique pieces at affordable prices.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-4">Our Story</h2>
            <p className="text-lg mb-6">
              HomeItems was founded in 2023 with a simple idea: to create a specialized marketplace focused exclusively
              on household items. We noticed that while general marketplaces exist, there was a need for a platform
              dedicated to home goods, where buyers could easily find quality items and sellers could reach the right
              audience.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Curated selection of quality pre-owned household items</li>
              <li>Secure and easy buying and selling process</li>
              <li>Detailed item descriptions and multiple photos</li>
              <li>Responsive customer service</li>
              <li>Local pickup and delivery options</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <Image src="/logo.svg" alt="HomeItems Logo" width={150} height={40} className="h-10 w-auto mb-4" />
            <p className="text-gray-400 mt-4">Your trusted marketplace for quality pre-owned household items.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-white">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-gray-400 hover:text-white">
                  Sell Items
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/furniture" className="text-gray-400 hover:text-white">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="/category/electronics" className="text-gray-400 hover:text-white">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/category/kitchen" className="text-gray-400 hover:text-white">
                  Kitchen
                </Link>
              </li>
              <li>
                <Link href="/category/decor" className="text-gray-400 hover:text-white">
                  Home Decor
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-400">
              <p>123 Market Street</p>
              <p>Sydney, NSW 2000</p>
              <p className="mt-2">Email: info@homeitems.com.au</p>
              <p>Phone: (02) 1234 5678</p>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} HomeItems. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
