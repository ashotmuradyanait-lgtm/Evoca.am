import React from 'react';
import { FileText, Home, ChevronRight } from 'lucide-react'; 
import { Link } from 'react-router-dom';

interface DocumentItem {
  id: number;
  title: string;
}

const Evocatouch: React.FC = () => {
  const documents: DocumentItem[] = [
    { id: 1, title: 'Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025' },
    { id: 2, title: 'SWIFT Transfers' },
    { id: 3, title: 'SWIFT переводы в РФ' },
  ];

  const features: string[] = [
    'Բացել բանկային հաշիվներ,',
    'Պատվիրել քարտ կամ բացել թվային քարտ վայրկյանների ընթացքում,',
    'Ստանալ վարկ,',
    'Ներդնել ավանդ,',
    'Կատարել փոխանցումներ հաշիվներին և քարտերին, ինչպես հայաստանյան, այնպես էլ արտերկրյա բանկերին,',
    'Կատարել բանկային փոխանցումներ և վճարումներ,',
    'Կատարել կոմունալ վճարումներ,',
    'Առցանց ստանալ ավտոմեքենաների տուգանքները և իրականացնել վճարումներ մեկ հպումով,',
    'Կատարել փոխանցումներ կոնտակտային տվյալներով,',
    '24/7 ուղղել հարցեր նամակի միջոցով:',
  ];

  return (
    <div className="overflow-x-hidden">
        {/* Social Sidebar - Hidden on mobile/tablet */}
        <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
          <div className="flex flex-col gap-3">
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
            <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
          </div>
        </div>
              
      {/* Breadcrumbs - Responsive padding */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-20 py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[11px] md:text-[13px]">
            <Link to="/" className="cursor-pointer hover:text-gray-600">
              <Home size={14} />
            </Link>
            <ChevronRight size={12} />
            <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
            <ChevronRight size={12} />
            <span className="cursor-pointer hover:text-gray-600 font-medium text-gray-600">Evocatouch</span>
      </div>

    <div className="max-w-4xl mx-auto px-6 md:px-10 py-8 md:py-12 font-sans text-[#333] bg-white selection:bg-purple-100">

      <h1 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-black tracking-tight">
        EvocaTOUCH
      </h1>

      <div className="space-y-5 text-[14px] md:text-[15px] leading-relaxed text-gray-700">
        <p>
          Շատերին թվում է՝ դժվար ու անիրական է ֆինանսական ոլորտում լինել կրեատիվ, սակայն Evocabank-ին 
          տարիներ շարունակ հաջողվում է գտնել out of box լուծումներ և շուկային ներկայանալ նոր և 
          ժամանակակից պրոդուկտներով։
        </p>
        <p>
          Այդ գաղափարների շարքից է նոր EvocaTOUCH հավելվածը, որն առանձնանում է ժամանակակից թվային 
          լուծումներով և հնարավորություններով։
        </p>
        <p>
          EvocaTOUCH հավելվածն անվտանգ է, հարմար և նախատեսված է անմիջապես smartphone-ից մի շարք բանկային 
          ծառայություններից օգտվելու համար։
        </p>
        <p>
          Հավելվածը գրվել է User Interface և User Experience նորագույն սկզբունքներով, ունի գունային 2 
          appearance` Dark և Light։ Այն ավելի նման է facebook-ի կամ instagram-ի feed-ի՝ ամենակարևոր ու 
          շատ օգտագործվող ֆունկցիաներն անմիջապես առաջին էջին են։
        </p>
        <p>
          Նոր հավելվածն առաջարկում է գործառույթների լայն շրջանակ, որը ներառում է ամենօրյա բանկային 
          գործընթացները՝ վերացնելով ֆիզիկական մասնաճյուղ այցելելու անհրաժեշտությունը։ Առանց գրանցման 
          և սպասարկման վճարի՝ օգտատերերը կարող են․
        </p>
      </div>

      <ul className="mt-6 mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-[14px] md:text-[15px] text-gray-700">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#7B2CBF] mt-2 mr-3 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="space-y-5 text-[14px] md:text-[15px] leading-relaxed text-gray-700">
        <p>
          Հավելվածից օգտվելու հարմարավետությունն ու անվտանգությունը բարձրացնելու համար օգտատերը կարող է 
          ակտիվացնել կենսաչափական նույնականացումը՝ օգտագործելով մատնահետքի կամ դեմքի ճանաչման համակարգերը:
        </p>
        <p className="font-medium text-black">
          EvocaTOUCH-ը պարզապես բանկային հավելված չէ․ կարծում ենք, այն ձեզ համար դառնալու է ապրելակերպի մի մաս։
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-black">Փաստաթղթեր</h2>
        <div className="grid gap-3">
          {documents.map((doc) => (
            <a
              key={doc.id}
              href="#"
              className="flex items-center p-3 md:p-4 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-purple-100 transition-all group"
            >
              <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-50 mr-3 md:mr-4 group-hover:bg-purple-100 transition-colors">
                <FileText size={18} className="text-[#7B2CBF]" />
              </div>
              <span className="text-[13px] md:text-[15px] font-medium text-gray-800 group-hover:text-[#7B2CBF] transition-colors line-clamp-1">
                {doc.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>

     {/* Blue Section - Full responsive grid */}
     <div className="min-h-fit lg:min-h-screen flex items-center justify-center p-4 md:p-10 overflow-hidden font-sans bg-gray-50">
      <div className="relative w-full bg-[#6600cc] rounded-[40px] md:rounded-[80px] lg:rounded-tl-[120px] lg:rounded-br-[120px] flex items-center p-6 sm:p-10 md:p-16 shadow-2xl overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-[5%] w-8 h-8 bg-pink-400/20 rounded-lg rotate-12 animate-bounce hidden md:block"></div>
          <div className="absolute bottom-20 right-[5%] w-12 h-12 bg-pink-300/20 rounded-2xl animate-spin hidden sm:block"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full relative z-10">
          
          {/* Laptop/Video Section */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[500px]">
              <div className="bg-black p-[2%] rounded-t-xl border-x-[4px] border-t-[4px] border-[#222]">
                <div className="aspect-video bg-black overflow-hidden relative">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="video.mp4" 
                    title="EvocaTouch"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="h-2 bg-[#333] rounded-b-lg w-[104%] -ml-[2%]"></div>
            </div>
          </div>

          {/* Phone Section - Hidden on small mobile */}
          <div className="hidden sm:flex lg:col-span-3 justify-center lg:pt-20 order-3 lg:order-2">
            <div className="relative w-36 h-[280px] md:w-44 md:h-[350px] bg-black rounded-[30px] border-[6px] border-[#1a1a1a] overflow-hidden shadow-2xl">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                className="w-full h-full object-cover"
                alt="phone"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-4 space-y-6 text-white text-center lg:text-left order-1 lg:order-3">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Օնլայն և <br className="hidden lg:block" />
                <span className="text-purple-300">մոբայլ բանկ</span>
              </h1>
              <p className="text-sm md:text-base opacity-80 leading-relaxed max-w-sm mx-auto lg:mx-0 font-light">
                Evocabank-ը արագ, պարզ և նորարարական ծառայություններ մատուցող բանկ է։
              </p>
            </div>
            
            <button className="bg-white text-[#6600cc] px-8 py-3 rounded-full font-black text-[11px] uppercase tracking-widest shadow-xl hover:bg-gray-100 transition-colors">
              Դառնալ հաճախորդ
            </button>

            <div className="pt-6 flex flex-col items-center lg:items-start gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-lg">
                  <img src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" alt="qr" className="w-full h-full" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-left">
                  Ներբեռնեք <br /> <span className="text-purple-300">հավելվածը</span>
                </span>
              </div>
              
              <div className="flex gap-2">
                <a href="#" className="active:scale-95 transition-transform">
                   <img src="https://cdn.prod.website-files.com/5c67cca1c8252c4258aad60b/6508be8577cc9ad9700103a4_Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-8 md:h-9" />
                </a>
                <a href="#" className="active:scale-95 transition-transform">
                   <img src="https://bciconline.com/wp-content/uploads/2025/09/1664287128google-play-store-logo-png.png" alt="Google Play" className="h-8 md:h-9" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Evocatouch;