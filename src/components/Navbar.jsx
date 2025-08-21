import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="bg-white dark:bg-gray-800 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Links */}
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <div className="shrink-0">
              <a href="#">
                <img
                  className="block w-auto h-12"
                  src="https://res.cloudinary.com/dpk6qsn0e/image/upload/v1755796960/Screenshot_2025-08-21_220940-removebg-preview_wfwpmj.png"
                  alt="Logo"
                />
                {/* <img
                  className="hidden w-auto h-1 dark:block"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/logo-full-dark.svg"
                  alt="Logo Dark"
                /> */}
              </a>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-6 md:gap-8 py-3">
              {["Home", "Products", "Best Sellers", "Today's Deals", "About Us", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right: Cart + Account + Mobile menu */}
          <div className="flex items-center lg:space-x-2">
            {/* Cart */}
            <div className="relative">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium text-gray-900 dark:text-white"
              >
                <svg
                  className="w-5 h-5 lg:me-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 4h1.5L9 16h8a2 2 0 110 4 2 2 0 010-4H9a2 2 0 110 4 2 2 0 010-4Zm8.5-3h9.25L19 7H7.312" />
                </svg>
                <span className="hidden sm:flex">My Cart</span>
                <svg
                  className="hidden sm:flex w-4 h-4 ms-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m19 9-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              {cartOpen && (
                <div className="absolute right-0 mt-2 z-10 w-80 max-w-sm space-y-4 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                  {[
                    { name: "Tooth paste", price: "Rs 599", qty: 1 },
                    { name: "Organic Soap", price: "Rs 499", qty: 1 },
                  ].map((item, idx) => (
                    <div key={idx} className="grid grid-cols-2">
                      <div>
                        <a
                          href="#"
                          className="truncate text-sm font-semibold text-gray-900 dark:text-white hover:underline"
                        >
                          {item.name}
                        </a>
                        <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                          {item.price}
                        </p>
                      </div>
                      <div className="flex items-center justify-end gap-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Qty: {item.qty}
                        </p>
                        <button className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600">
                          ✕
                        </button>
                      </div>
                    </div>
                  ))}

                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-orange  -700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Proceed to Checkout
                  </a>
                </div>
              )}
            </div>

            {/* User */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium text-gray-900 dark:text-white"
              >
                <svg
                  className="w-5 h-5 me-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 17v1a1 1 0 001 1h8a1 1 0 001-1v-1a3 3 0 00-3-3h-4a3 3 0 00-3 3Zm8-9a3 3 0 11-6 0 3 3 0 016 0Z" />
                </svg>
                Account
                <svg
                  className="w-4 h-4 ms-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="m19 9-7 7-7-7" />
                </svg>
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 z-10 w-56 rounded-lg bg-white shadow dark:bg-gray-700">
                  <ul className="p-2 text-sm text-gray-900 dark:text-white">
                    {[
                      "My Account",
                      "My Orders",
                      "Settings",
                      "Favourites",
                      "Delivery Addresses",
                      "Billing Data",
                    ].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="p-2">
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      Sign Out
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex lg:hidden items-center p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 7h14M5 12h14M5 17h14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg py-3 px-4 mt-4">
            <ul className="space-y-3 text-sm font-medium text-gray-900 dark:text-white">
              {["Home", "Best Sellers", "Gift Ideas", "Games", "Electronics", "Home & Garden"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-primary-700 dark:hover:text-primary-500"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
