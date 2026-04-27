import React from 'react';
import { FileText } from 'lucide-react'; 
import { Link } from 'react-router-dom';


interface DocumentItem {
  id: number;
  title: string;
}

<div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center gap-2 text-gray-400 text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Անհատ</span>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Evocatouch</span>
      </div>

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
              href="#"
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
  );
};

export default Evocatouch