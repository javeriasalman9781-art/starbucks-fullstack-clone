


import { Link } from "react-router-dom";
const Footer2 = () => {
  const currentYear = new Date().getFullYear();
  const footerSections = [
    { 
      title: "About Us", 
      links: ["Our Company", "Our Coffee", "About Starbucks", "Starbucks Archive", "Investor Relations", "Customer Service", "Contact Us"] 
    },
    { 
      title: "Careers", 
      links: ["Culture and Values", "Belonging at Starbucks", "College Achievement Plan", "Alumni Community", "U.S. Careers", "International Careers"] 
    },
    { 
      title: "Social Impact", 
      links: ["Communities", "Starbucks Foundation", "Sustainability", "Environmental and Social Impact Reporting"] 
    },
    { 
      title: "For Business Partners", 
      links: ["Landlord Support Center", "Suppliers", "Corporate Gift Card Sales", "Office & Food Service Coffee"] 
    },
    { 
      title: "Order and Pick Up", 
      links: ["Order on the App", "Order on the Web", "Delivery", "Pick Up Options", "Explore Coffee at Home"] 
    }
  ];

  return (
    <footer className="bg-white px-4 md:px-14 py-12 border-t border-gray-200 mt-20 pb-32 lg:pb-12">
      <div className="max-w-7xl mx-auto">
        
        <div className="hidden lg:flex justify-start space-x-12 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="w-44">
              <h2 className="text-[17px] mb-6 uppercase tracking-wider ">{section.title}</h2>
              <ul className="space-y-4 text-[#00000094]">
                {section.links.map((link, i) => (
                  <li key={i} className="hover:text-black cursor-pointer text-[16px]">
                    <Link to="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

       
        <div className="lg:hidden space-y-2 mb-8">
          {footerSections.map((section, index) => (
            <details key={index} className="group border-none outline-none">
              <summary className="flex justify-between items-center list-none py-4 cursor-pointer text-[19px] font-medium text-gray-900 group-open:mb-4">
                {section.title}
                <i className="fa-solid fa-chevron-down transition-transform group-open:rotate-180 text-sm"></i>
              </summary>
              <ul className="pl-2 pb-4 space-y-4 text-[#00000094]">
                {section.links.map((link, i) => (
                  <li key={i} className="text-[16px] hover:text-black">
                    <Link to="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <hr className="my-8 border-gray-200" />
        <div className="flex space-x-6 mb-8 text-2xl">
          <i className="fa-brands fa-spotify hover:text-green-600 cursor-pointer transition"></i>
          <i className="fa-brands fa-facebook hover:text-blue-700 cursor-pointer transition"></i>
          <i className="fa-brands fa-pinterest hover:text-red-600 cursor-pointer transition"></i>
          <i className="fa-brands fa-instagram hover:text-pink-600 cursor-pointer transition"></i>
          <i className="fa-brands fa-youtube hover:text-red-700 cursor-pointer transition"></i>
          <i className="fa-brands fa-twitter hover:text-blue-400 cursor-pointer transition"></i>
        </div>
        <div className="flex flex-col space-y-6 mb-8 text-[16px] font-medium">
          <Link to="#" className="hover:underline">Privacy Notice</Link>
          <Link to="#" className="hover:underline">Consumer Health Privacy Notice</Link>
          <Link to="#" className="hover:underline">Terms of Use</Link>
           <Link to="#" className="hover:underline">Do Not Sell or Share My Personal Information</Link>
          <Link to="#" className="hover:underline">CA Supply Chain Act</Link>
          <Link to="#" className="hover:underline">Accessibility</Link>
          <Link to="#" className="hover:underline">Cookie Preferences</Link>
        </div>

        <p className="text-[#00000094] text-sm tracking-tight">
          © {currentYear} Starbucks Coffee Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer2;
