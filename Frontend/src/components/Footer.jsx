

const Footer = () => {
  return (
    <>
     {/* Footer Section */}
     <footer className="bg-gray-100 border-t border-gray-300 mt-10">
        <div className="container mx-auto px-6 py-10">
          {/* Footer Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start">
              <img src="../img/icon.png" alt="icon" className="w-12 h-12" />
              <h1 className="text-2xl font-bold text-gray-800">audeus</h1>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center mt-4 md:mt-0">
              <a href="#pdf" className="text-gray-600 mx-4 hover:underline">
                PDF Reader
              </a>
              <a
                href="#features"
                className="text-gray-600 mx-4 hover:underline"
              >
                For Schools
              </a>
              <a href="#chrome" className="text-gray-600 mx-4 hover:underline">
                Chrome Extension
              </a>
              <a href="#pricing" className="text-gray-600 mx-4 hover:underline">
                Pricing
              </a>
              <a href="#contact" className="text-gray-600 mx-4 hover:underline">
                Contact
              </a>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © 2025 Audeus-website. All Rights Reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              {/* Terms and Privacy */}
              <p className="text-sm text-gray-500 mr-4">
                Get Started For Free · Terms · Privacy
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <img
                    src="../img/facebook.png"
                    alt="Facebook"
                    className="w-12 h-12 object-contain"
                  />
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <img
                    src="../img/tiktok.png"
                    alt="TikTok"
                    className="w-6 h-6 object-contain"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <img
                    src="../img/instagram.png"
                    alt="Instagram"
                    className="w-6 h-6 object-contain"
                  />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <img
                    src="../img/twitter.png"
                    alt="Twitter"
                    className="w-6 h-6 object-contain"
                  />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform transform hover:scale-110"
                >
                  <img
                    src="../img/youtube.png"
                    alt="YouTube"
                    className="w-6 h-6 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    
    </>
  )
}

export default Footer