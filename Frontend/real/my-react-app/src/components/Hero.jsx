import { Link } from "react-router-dom";
import imageImg from "../assets/image.jpg";
import image2Img from "../assets/imaage2.webp"; 
import qwe1Img from "../assets/qwe1.jpg";
import qwe2Img from "../assets/qwe2.jpg";
import qwe3Img from "../assets/QWE3.jpg";

const Hero = () => {
  const handleAction = (type) => {
    console.log(`User clicked on: ${type}`);
  };
  return (
    <main className="w-full p-0 ">
      <div className="bg-[#2d412d] w-full py-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 md:h-23">
  <span className="text-white font-bold text-lg text-center px-4">
    It's a great day for coffee
  </span>
    <Link to="/joinnow">
    <button className="border border-white text-white px-5 py-2 rounded-full cursor-pointer font-semibold hover:bg-[#277627] transition-colors">
      Start an order
    </button>
  </Link>
</div> 
      <div className="mt-7 flex flex-col md:flex-row w-full">
        <img className="w-full md:w-1/2 h-auto sm:h-100 object-cover" src={imageImg} alt="Fall drinks" />
        <div className="md:w-1/2 w-full h-auto bg-[#F8F0E5] flex flex-col justify-center items-center text-center p-8 md:p-12">
          <h2 className="text-[#5F4633] font-bold lg:text-[24px] text-[22px] mb-4">Fall. Starts. Now.</h2>
          <p className="text-[#5F4633] md:text-[20px] text-[17px] mb-6">
            Our fall flavors are officially here. Time for all things pumpkin and pecan, including the new Oatmilk Cortado.
          </p>
          <Link to="/menu">
            <button className="cursor-pointer hover:bg-green-900 transition duration-300 text-white font-bold rounded-full bg-[#00754A] px-6 py-2">
              View the menu
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-11 flex flex-col-reverse md:flex-row w-full">
        <div className="md:w-1/2 w-full h-auto bg-[#F8F0E5] flex flex-col justify-center items-center text-center p-8 md:p-12">
          <h2 className="text-[#006242] font-bold lg:text-[24px] text-[22px] mb-4">Love it? Get it free.</h2>
          <p className="text-[#006242] md:text-[20px] text-[17px] mb-6">
            Just join Starbucks® Rewards and enjoy a free drink with a qualifying purchase during your first week.*
          </p>
          <Link to="/joinnow">
            <button className="cursor-pointer text-[#006242] transition duration-300 hover:bg-[#d8d2ca] border border-[#32462F] font-bold rounded-full bg-[#F8F0E5] px-6 py-2">
              Join & order
            </button>
          </Link>
        </div>
        <img className="w-full md:w-1/2 object-cover h-auto sm:h-100" src={image2Img} alt="Rewards drink" />
      </div>

      <div className="mt-11 flex flex-col md:flex-row w-full">
        <img className="w-full md:w-1/2 object-cover h-auto sm:h-112.5" src={qwe1Img} alt="PSL" />
        <div className="md:w-1/2 w-full h-auto bg-[#32462F] flex flex-col text-center items-center justify-center p-8 md:p-12">
          <h2 className="text-white font-bold lg:text-[24px] text-[22px] mb-4">For the PSL fans</h2>
          <p className="text-white md:text-[20px] text-[17px] mb-6">
            Celebrate the season of Pumpkin Spice Latte by sending a festive Starbucks eGift.
          </p>
           <button 
            onClick={() => handleAction('eGift')}
            className="cursor-pointer hover:bg-[#263d23] transition duration-300 text-white font-bold border border-white rounded-full bg-[#32462F] px-6 py-2">
            Send an eGift
          </button>
        </div>
      </div>

   
      <div className="mt-11 flex flex-col-reverse md:flex-row w-full">
        <div className="md:w-1/2 w-full h-auto bg-[#61381C] flex flex-col justify-center items-center text-center p-8 md:p-12">
          <h2 className="text-white font-bold lg:text-[24px] text-[22px] mb-4">Our enchanting new collection</h2>
          <p className="text-white md:text-[20px] text-[17px] mb-6">
            American artist Mike Willcox honors coffee-growing regions with captivating Art Deco symbolism. For a limited time.
          </p>
         <button 
            onClick={() => handleAction('CollectionInfo')}
            className="cursor-pointer transition duration-300 text-white hover:bg-[#432a0a] border border-white font-bold rounded-full bg-[#61381C] px-6 py-2">
            Learn more
          </button>
        </div>
        <img className="w-full sm:h-100 md:w-1/2 object-cover h-auto" src={qwe2Img} alt="Collection art" />
      </div>

     
      <div className="mt-11 flex flex-col md:flex-row w-full">
        <img className="w-full md:w-1/2 object-cover h-auto" src={qwe3Img} alt="Coffee refill" />
        <div className="w-full md:w-1/2 bg-[#32462F] flex flex-col items-center justify-center text-center p-10">
          <h2 className="lg:text-[52px] text-[30px] text-white font-bold mb-6">Free refills while you stay</h2>
          <p className="text-white md:text-[20px] text-[17px] mb-8 px-4">
            When you stay to enjoy your handcrafted beverage, refills of hot or iced brewed coffee or tea are on us.**
          </p>
          <Link to="/menu">
            <button className="cursor-pointer hover:bg-[#263d23] transition duration-300 text-white font-bold border border-white rounded-full bg-[#32462F] px-8 py-2 text-[18px]">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;