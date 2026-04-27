import React from 'react';
import { FileText, Home, ChevronRight } from 'lucide-react'; 
import { Link } from 'react-router-dom';
import { div } from 'framer-motion/client';


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
    <div>
        <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden lg:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
                <div className="flex flex-col gap-6">
                  <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold">f</Link>
                  <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold">t</Link>
                  <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold font-serif italic">in</Link>
                  <Link to="#" className="text-gray-400 hover:text-[#6c2db5] transition-all text-center font-bold">p</Link>
                </div>
              </div> 
              
        <div className="max-w-[1400px] mx-auto px-20 py-6 flex items-center gap-2 text-gray-400 text-[13px] mr-80">
            <Link to="/" className="cursor-pointer hover:text-gray-600">
              <Home size={16} />
            </Link>
            <ChevronRight size={14} />
            <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
            <ChevronRight size={14} />
            <span className="cursor-pointer hover:text-gray-600">Evocatouch</span>
      </div>
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans text-[#333] bg-white selection:bg-purple-100">

      
      <h1 className="text-3xl font-bold mb-8 text-black tracking-tight">
        EvocaTOUCH
      </h1>

   
      <div className="space-y-5 text-[15px] leading-relaxed text-gray-700">
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
          ծառայություններից օգտվելու համար։ Կարևորելով հավելվածի անվտանգ օգտագործումը՝ Բանկն ապահովում է 
          օգտատերերի մասին ինֆորմացիայի և կատարած գործարքների պաշտպանությունը՝ օգտագործելով գաղտնագրման 
          վերջին տեխնոլոգիաները:
        </p>
        <p>
          EvocaTOUCH հավելվածը կառուցված է այս պահին հայտնի ամենավերջին մոբայլ տեխնոլոգիաներով:
        </p>
        <p>
          Հավելվածը գրվել է User Interface և User Experience նորագույն սկզբունքներով, ունի գունային 2 
          appearance` Dark և Light։ Այն ավելի նման է facebook-ի կամ instagram-ի feed-ի՝ ամենակարևոր ու 
          շատ օգտագործվող ֆունկցիաներն անմիջապես առաջին էջին են` Քարտեր, Հաշիվներ, Վարկեր, Ավանդեր: 
          Օգտատերերը հնարավորություն ունեն ստեղծել Template-ներ, որի շնորհիվ բանկային փոխանցումները 
          կատարվում են ավելի արագ ու հեշտ։ Հնարավոր է ծանոթանալ Բանկի նորություններին ու ամենաակտուալ 
          պրոդուկտներին՝ թերթվող story-ների միջոցով։
        </p>
        <p>
          EvocaTOUCH հավելվածը 24/7 հասանելի է իր բոլոր օգտատերերին աշխարհի ցանկացած կետից, ցանկացած ժամի:
        </p>
        <p>
          Նոր հավելվածն առաջարկում է գործառույթների լայն շրջանակ, որը ներառում է ամենօրյա բանկային 
          գործընթացները՝ վերացնելով ֆիզիկական մասնաճյուղ այցելելու անհրաժեշտությունը: Առանց գրանցման 
          և սպասարկման վճարի՝ օգտատերերը կարող են․
        </p>
      </div>

     
      <ul className="mt-6 mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-[15px] text-gray-700">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#7B2CBF] mt-2 mr-3 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <div className="space-y-5 text-[15px] leading-relaxed text-gray-700">
        <p>
          Հավելվածի հիմնական ուժեղ կողմերից մեկն անհատականացված բանկային ծառայության տրամադրումն է: 
          Հաճախորդակենտրոն մոտեցման շնորհիվ՝ Բանկը հնարավորություն է տալիս օգտատերերին հավելվածը 
          հարմարեցնել իրենց նախասիրություններին և կարիքներին:
        </p>
        <p>
          Հավելվածից օգտվելու հարմարավետությունն ու անվտանգությունը բարձրացնելու համար օգտատերը կարող է 
          ակտիվացնել կենսաչափական նույնականացումը՝ օգտագործելով մատնահետքի կամ դեմքի ճանաչման համակարգերը: 
          Բացի այդ, նոր հավելվածն առաջարկում է արագ և հեշտ ինտեգրում այլ ֆինանսական գործիքների հետ, 
          ինչը թույլ է տալիս օգտատերերին կառավարել իրենց ֆինանսները մեկ հավելվածի միջոցով:
        </p>
        <p>
          EvocaTOUCH-ի միջոցով օգտատերերը կարող են 24/7 հասանելիություն ունենալ իրենց ֆինանսներին, 
          վերահսկել իրենց դրամական միջոցները, արագ ու անվտանգ գործարքներ կատարել աշխարհի ցանկացած կետից, 
          ցանկացած ժամի:
        </p>
        <p className="font-medium text-black">
          EvocaTOUCH-ը պարզապես բանկային հավելված չէ․ կարծում ենք, այն ձեզ համար դառնալու է ապրելակերպի մի մաս։
        </p>
      </div>

     
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-black">Փաստաթղթեր</h2>
        <div className="grid gap-3">
          {documents.map((doc) => (
            <a
              key={doc.id}
              href="https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf"
              className="flex items-center p-4 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md hover:border-purple-100 transition-all group"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 mr-4 group-hover:bg-purple-100 transition-colors">
                <FileText size={20} className="text-[#7B2CBF]" />
              </div>
              <span className="text-[15px] font-medium text-gray-800 group-hover:text-[#7B2CBF] transition-colors">
                {doc.title}
              </span>
            </a>

          ))}
        </div>
      </div>
    </div>

     <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 overflow-hidden font-sans bg-gray-50">
      <div className="relative w-full bg-[#6600cc] min-h-[600px] lg:min-h-[650px] rounded-tl-[60px] sm:rounded-tl-[120px] rounded-br-[60px] sm:rounded-br-[120px] flex items-center p-6 sm:p-10 md:p-16 shadow-[0_20px_50px_rgba(102,0,204,0.3)] overflow-hidden">
        
      
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
         
          <div className="hidden md:block absolute top-10 left-[5%] w-12 h-12 bg-pink-400/20 rounded-lg rotate-12 animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-[60%] left-[5%] w-8 h-8 bg-pink-500/30 rounded rotate-45 animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-20 right-[5%] w-12 h-12 md:w-16 md:h-16 bg-pink-300/20 rounded-2xl animate-spin" style={{ animationDuration: '8s' }}></div>
          
          <div className="hidden lg:block absolute top-[15%] right-[25%] w-10 h-10 bg-amber-400/20 rounded-lg animate-bounce" style={{ animationDuration: '5.5s' }}></div>
          <div className="absolute bottom-[5%] left-[10%] w-10 h-10 bg-amber-300/20 rounded-xl rotate-12 animate-pulse" style={{ animationDuration: '3.5s' }}></div>

          
          <div className="absolute -top-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-pink-500/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-amber-400/15 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>

      
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full relative z-10">
          
        
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[320px] sm:max-w-[450px] lg:max-w-[550px]">
              <div className="bg-black p-[1.5%] rounded-t-xl border-x-[3px] md:border-x-[6px] border-t-[3px] md:border-t-[6px] border-[#222] shadow-2xl">
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
              <div className="h-2 md:h-3 bg-[#333] rounded-b-lg w-[106%] -ml-[3%] shadow-2xl"></div>
              <div className="h-1 bg-[#111] w-[20%] mx-auto rounded-b-md"></div>
            </div>
          </div>

          {/* 2. Phone Section - Թաքցված է փոքր mobile-ների վրա, որ տեղ ազատվի */}
          <div className="hidden sm:flex lg:col-span-3 justify-center lg:pt-20 order-3 lg:order-2">
            <div className="relative w-32 h-[260px] md:w-44 md:h-[350px] bg-black rounded-[25px] md:rounded-[30px] border-[5px] md:border-[7px] border-[#1a1a1a] overflow-hidden shadow-2xl">
              <img 
                src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" 
                className="w-full h-full object-cover"
                alt="phone"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
              <div className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center text-white font-black text-lg md:text-xl italic uppercase tracking-tighter">
                evoca
              </div>
            </div>
          </div>

          {/* 3. Content Section */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8 text-white text-center lg:text-left order-1 lg:order-3">
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
                Օնլայն և <br className="hidden lg:block" />
                <span className="text-purple-300">մոբայլ բանկ</span>
              </h1>
              <p className="text-sm md:text-base opacity-80 leading-relaxed font-light max-w-xs md:max-w-sm mx-auto lg:mx-0">
                Evocabank-ը արագ, պարզ և նորարարական ծառայություններ մատուցող բանկ է՝ Ձեր հարմարավետության համար:
              </p>
            </div>
            
            <button className="bg-white text-[#6600cc] px-8 md:px-12 py-3 md:py-4 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-transform">
              Դառնալ հաճախորդ
            </button>

            <div className="pt-4 md:pt-8 flex flex-col items-center lg:items-start gap-6">
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center p-1.5 md:p-2 shadow-xl">
                  <img 
                    src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" 
                    className="w-full h-full"
                    alt="qr"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-bold leading-snug opacity-90 uppercase tracking-widest text-left">
                  Ներբեռնեք <br /> <span className="text-purple-300">հավելվածը</span>
                </span>
              </div>
              
              <div className="flex gap-2 md:gap-3">
                <a href="https://apps.apple.com/am/app/evocatouch/id970309076" className="active:scale-90 transition-transform">
                   <img 
                      src="https://cdn.prod.website-files.com/5c67cca1c8252c4258aad60b/6508be8577cc9ad9700103a4_Download_on_the_App_Store_Badge.svg.png" 
                      alt="App Store" 
                      className="h-8 md:h-10 w-auto"
                   />
                </a>
                
                <a href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank" className="active:scale-90 transition-transform">
                   <img 
                      src="https://bciconline.com/wp-content/uploads/2025/09/1664287128google-play-store-logo-png.png" 
                      alt="Google Play" 
                      className="h-8 md:h-10 w-auto"
                   />
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