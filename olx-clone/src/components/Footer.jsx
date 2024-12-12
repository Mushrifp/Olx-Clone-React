import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-gray-200 text-black py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h2 className="font-bold text-lg mb-2">Popular Locations</h2>
              <ul className="space-y-1">
                <li>Kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-2">Trending Locations</h2>
              <ul className="space-y-1">
                <li>Bhubaneshwar</li>
                <li>Hyderabad</li>
                <li>Chandigarh</li>
                <li>Nashik</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-2">About Us</h2>
              <ul className="space-y-1">
                <li>Tech@OLX</li>
                <li>OLX</li>
                <li>Blog</li>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Legal & Privacy Information</li>
                <li>Vulnerability Disclosure Program</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-lg mb-2">Follow Us</h2>
              <ul className="space-y-1">
                <li>Download OLX in the Android Play Store</li>
                <li>Download OLX for iOS in the Apple App Store</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
