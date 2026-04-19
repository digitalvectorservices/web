
export const Footer = () => {
  return (
    <footer className="bg-[#0e0e0e] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bold text-lg mb-4">Digital Vector</h3>
          <p className="text-gray-400 text-sm">
            Building digital products that scale and perform.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 text-sm">info@digitalvector.com</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-12">
        © {new Date().getFullYear()} Digital Vector
      </div>
    </footer>
  );
}