import React from 'react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  const sections = [
    {
      title: "Բանկի մասին",
      links: ["Մեր մասին", "Ղեկավարություն", "Բաժնետերեր", "Հաշվետվություններ", "Իրավական ակտեր", "Սակագներ", "Օտարվող գույք", "Կառուցապատողներ", "Գործընկեր ավտոսրահներ", "Սակագների արխիվ"]
    },
    {
      title: "Օգտակար հղումներ",
      links: ["Հաճախորդի իրավունքները", "Հաճախորդի ռեզիդենտության չափանիշներ", "Կարգավորում", "Գաղտնիության քաղաքականություն", "Ֆին. հաշտարար", "Ֆինանսական հանցագործությունների կանխարգելում"]
    },
    {
      title: "Այլ հղումներ",
      links: ["EvocaONLINE", "Պահատուփեր", "Հաճախ տրվող հարցեր", "Հայտարարություններ", "Dibrary", "Բուկլետներ", "Հետադարձ կապ", "Կայքի քարտեզ"]
    }
  ];

  const partners = [
    "https://www.evoca.am/img/temp/partners/partner-1.png",
    "https://www.evoca.am/img/temp/partners/partner-2.png",
    "https://www.evoca.am/img/temp/partners/partner-6.png",
    "https://www.evoca.am/img/temp/partners/partner-3.png",
    "https://www.evoca.am/img/temp/partners/partner-4.png",
    "https://www.evoca.am/img/temp/partners/partner-5-new.png",
    "https://www.evoca.am/img/temp/partners/partner-7.png"
  ];

  return (
    <footer className="w-full">
      
      <div className="bg-white py-12 px-6 md:px-16 font-sans text-[14px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-1">
            <img 
              src="https://avand.am/images/banks/evoca/evokabank-b-10-7469.jpg" 
              alt="Evocabank Logo" 
              className="w-80"
            />
            <div className="text-gray-600 space-y-4 leading-relaxed mb-10">
              <p>ք. Երևան, 0010,<br />Հանրապետության 44/2</p>
              <p className="font-medium">
                Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
              </p>
              <p className="text-[11px] text-gray-400 uppercase">
                1990 - 2026, © Բոլոր իրավունքները պաշտպանված են
              </p>
            </div>
          </div>

          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-gray-800 mb-4 text-[15px]">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-900 hover:text-gray-600 font-semibold transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col space-y-6">
            <div className="flex space-x-4 text-gray-400">
              <FaFacebookF className="hover:text-gray-300 cursor-pointer text-lg transition-colors" />
              <FaInstagram className="hover:text-gray-300 cursor-pointer text-lg transition-colors" />
              <FaPinterestP className="hover:text-gray-300 cursor-pointer text-lg transition-colors" />
              <FaYoutube className="hover:text-gray-300 cursor-pointer text-lg transition-colors" />
              <FaLinkedinIn className="hover:text-gray-300 cursor-pointer text-lg transition-colors" />
            </div>

            <div className="flex gap-4">
              <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-32 cursor-pointer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32 cursor-pointer" />
            </div>

            <div className="space-y-2">
              <a href="#" className="block text-[#6400dc] font-semibold hover:text-[#9049e6]">Բանկի հասցեները և աշխատաժամերը</a>
              <a href="#" className="block text-[#6400dc] font-semibold hover:text-[#9049e6]">Կապ մեզ հետ</a>
              <p className="text-[#6400dc] font-semibold text-lg hover:text-[#9049e6]">+374 10 605555</p>
              <p className="text-[#6400dc] font-semibold text-lg hover:text-[#9049e6]">8444</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f2f2] py-5 px-6 md:px-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-2xl text-[12px] text-gray-500 leading-relaxed text-justify">
            <p>
              Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր լեզուներում 
              անհամապատասխանություն, ինչպես նաև ռուսերեն և անգլերեն լեզուներում ոչ ամբողջական 
              նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: 
              "Էվոկաբանկ" ՓԲԸ-ն պատասխանատվություն չի կրում իր ինտերնետային կայքում հղված 
              այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության և արժանահավատության, 
              այնտեղ տեղադրված գովազդների, ինչպես նաև երրորդ անձանց կողմից այդ կայքերում 
              տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար:
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-5">
            {partners.map((src, index) => (
              <a key={index} href="#" className="block grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                <img src={src} alt={`partner-${index}`} className="h-8 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </div>

     
      <div className="fixed bottom-6 right-6 z-50 flex items-center group cursor-pointer">
        <div className="bg-[#6400dc] text-white px-4 py-2 rounded-l-full text-sm font-medium shadow-lg transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
          Գրեք մեզ, մենք օնլայն ենք !
        </div>
        <div className="bg-[#9049e6] p-4 rounded-full shadow-2xl hover:bg-[#6400dc] transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;