import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
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
          <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
              <p className="mb-6">
                Have questions about an item? Want to sell something? We're here to help! Fill out the form and we'll
                get back to you as soon as possible.
              </p>

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 p-3 rounded-full text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p className="text-gray-600">(02) 1234 5678</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 p-3 rounded-full text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p className="text-gray-600">info@homeitems.com.au</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500 p-3 rounded-full text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p className="text-gray-600">
                      123 Market Street
                      <br />
                      Sydney, NSW 2000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block mb-1 font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block mb-1 font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-1 font-medium">
                    Phone
                  </label>
                  <Input id="phone" placeholder="(02) xxxx xxxx" />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="How can we help you?" />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message here..." className="min-h-[120px]" />
                </div>

                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full">
                  Send Message
                </Button>
              </form>
            </div>
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
