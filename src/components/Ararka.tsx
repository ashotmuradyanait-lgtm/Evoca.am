import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../pages/Reviews';
import Reviews from '../pages/Reviews';

const Ararka: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [openSections, setOpenSections] = useState<number[]>([1]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const subMenuItems = [
    { name: 'Հաշիվների բացում և սպասարկում', path: '/hashiv' },
    { name: 'Առարկայազուրկ մետաղական հաշիվներ', path: '' },
  ];

  return (
    <div className="w-full bg-[#f9f9f9] min-h-screen pb-20">
      
      <div className="flex items-center gap-6 pt-14 flex-wrap px-4 md:px-0 md:flex-nowrap">
        <Link to="/">
          <img 
            className="h-[100px] md:h-[140px] w-[200px] md:w-[300px] object-contain" 
            src="https://myreloc.com/wp-content/uploads/2022/07/evocabank.png" 
            alt="Evocabank Logo" 
          />
        </Link>
        <nav className="flex flex-wrap md:flex-nowrap gap-3 text-gray-800 font-medium text-[14px] md:text-[15px]">
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Վարկեր</Link>
          <Link to="/lizing" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Լիզինգ</Link>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Հաշիվներ</p>
          <Link to="/dasakan" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Ավանդներ</Link>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Արժեթղթերի շուկա</p>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Առևտրի ֆինանսավորում</p>
          <p className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Դիջիթալ</p>
          <Link to="" className="cursor-pointer hover:text-[#6c2db5] transition-colors font-bold">Այլ</Link>
        </nav>
        <Link to="/evocaonline" className="md:px-20 mt-4 md:mt-0">
          <div className="text-white bg-[#6c2db5] h-[40px] w-[150px] hover:bg-[#530498] flex items-center justify-center rounded-3xl font-bold">EvocaONLINE</div>
        </Link>
      </div>

     
      <div className="w-full bg-[#6c2db5] text-white overflow-x-auto">
        <div className="max-w-[1400px] mx-auto flex items-center h-[60px] px-6 whitespace-nowrap">
          {subMenuItems.map((item) => (
            <NavLink 
              key={item.name}
              to={item.path}
              className={({ isActive }) => 
                `h-full flex items-center px-4 md:px-8 transition-colors text-[13px] md:text-[14px] font-medium
                ${isActive ? 'bg-[#530498]' : 'hover:bg-[#530498]'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-wrap items-center gap-2 text-gray-400 text-[12px] md:text-[13px]">
        <Link to="/" className="cursor-pointer hover:text-gray-600">🏠</Link>
        <span>›</span>
        <span className="cursor-pointer hover:text-gray-600">Բիզնես</span>
        <span>›</span>
        <span className="cursor-pointer text-gray-800">Հաշիվներ</span>
        <span>›</span>
        <span className="text-gray-800">Առարկայազուրկ մետաղական հաշիվներ</span>
      </div>

      
      <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 w-full text-center md:text-left">
          <h1 className="text-3xl md:text-[42px] font-bold text-[#333333] mb-6 leading-tight">
            Առարկայազուրկ <br className="hidden md:block"/>մետաղական հաշիվներ
          </h1>
          <p className="text-[#555555] leading-relaxed text-[15px] md:text-[16px]">
            Անկանխիկ ոսկու առարկայազուրկ մետաղական հաշիվները նախատեսված են անկանխիկ ոսկով գործառնություններ կատարելու համար: Այս ցպահանջ հաշիվները հնարավորություն են ընձեռում խնայողություններ կատարել ինչպես նաև ավելացնել դրանք՝ շնորհիվ ոսկու գնի բարձրացման շնորհիվ:
          </p>
        </div>
        <div className="flex-1 w-full">
          <img 
            src="https://www.evoca.am/images-cache/menu/1/16154599304948/780x585.jpg" 
            alt="Gold Bar" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

     
      <div className="max-w-[1400px] mx-auto px-6 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-8">Հիմնական պայմաններ</h2>
        
        <ul className="list-disc pl-5 space-y-4 text-[#555555] text-[15px] md:text-[16px] leading-relaxed">
          <li>Հաշիվներ ենթադրում են բացում ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար, միայն 999.9 հարգի ոսկով, առանց նվազագույն մնացորդի պահանջի: Մեզ մոտ կարելի է գնել անկանխիկ ոսկի՝ սկսած 31 գրամից (ոսկու գնանշումը կատարվում է դրամով): Մեր կայքում հրապարակվում են ոսկու գնանշման օրական տվյալները, որոնք փոփոխվում են՝ կախված միջազգային շուկաներում ոսկու գնից:</li>
          <li>Հաշիվներում անկանխիկ ոսկին հաշվառվում է ֆիզիկական քաշով՝ ՀՀ կենտրոնական բանկի հայտարարած հաշվարկային գնով և կշռային (գրամային) արտահայտությամբ՝ 0.01 գրամ ճշտությամբ կամ տրոյական ունցիաներով՝ 0.001 տրոյական ունցիա ճշտությամբ (մեկ տրոյական ունցիան հավասար է 31.10348 գրամի):</li>
          <li>Մետաղական հաշիվները բացվում և ղեկավարվում են ՀՀ օրենսդրության, ՀՀ կենտրոնական բանկի նորմատիվ ակտերով, որոշումներով, մեր ներքին իրավական ակտերով:</li>
          <li>Հաշիվներ բացելու համար կարող եք դիմել մեր Գլխամասային գրասենյակ և ցանկացած մասնաճյուղ: Մետաղական հաշիվների սպասարկման, գործառնությունների կատարման սակագներին և պայմաններին կարող եք ծանոթանալ այստեղ:</li>
          <li>
            Այս հաշիվներով կարող են իրականացվել հետևյալ գործառնությունները՝
            <ul className="list-[circle] pl-8 mt-3 space-y-2">
              <li>Հաշվի համալրում՝ բանկից անկանխիկ ոսկի գնելու և այն հաշվին մուտքագրելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվից անկանխիկ ոսկի փոխանցելու միջոցով,</li>
              <li>Հաշվի ելքագրում՝ հաշվին առկա անկանխիկ ոսկին բանկին վաճառելու, ինչպես նաև ձեր կամ այլ անձի՝ նույն բանկում կամ այլ բանկում առկա մետաղական հաշվին անկանխիկ ոսկի փոխանցելու միջոցով:</li>
            </ul>
          </li>
          <li>Մետաղական հաշիվները կարող են գրավադրվել:</li>
          <li>Հաշիվ բացելու համար անհրաժեշտ փաստաթղթերը՝</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-bold text-[#333333] mt-10 mb-6">Իրավաբանական անձանց դեպքում՝</h3>
        <ul className="list-disc pl-5 space-y-4 text-[#555555] text-[15px] md:text-[16px] leading-relaxed">
          <li>Դիմում՝ մեր ձևանմուշի համաձայն:</li>
          <li>Կանոնադրություն (ոչ ռեզիդենտների դեպքում՝ կանոնադրություն կամ փոխարինող այլ փաստաթուղթ):</li>
          <li>Պետական ռեգիստրի գրանցման վկայական (ոչ ռեզիդենտների դեպքում՝ տվյալ երկրի գրանցող մարմնի կողմից տրված վկայական և գրանցման երկրի համապատասխան մարմնի կողմից տրված հարկային մարմիններում հաշվառված փաստաթուղթ):</li>
          <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում:</li>
          <li>Գործադիր մարմնի ղեկավարի/ների, գլխավոր հաշվապահի անձնագրերը կամ նույնականացման քարտերը ինչպես նաև թարգմանված պաշտոնների նշանակման հրամանները, եթե պետական ռեգիստրի գրանցման վկայականում ղեկավարի վերաբերյալ տվյալները բացակայում են (ոչ ռեզիդենտների դեպքում՝ գործադիր մարմնի ղեկավարի/ների, անձնագրերը և իրավասու մարմնի կողմից պաշտոնների նշանակման վերաբերյալ որոշումները):</li>
          <li>Հաշվի կարգադրիչների անձնագրեր կամ նույնականացման քարտերը:</li>
          <li>Կանոնադրական կապիտալում 10 % և ավելի բաժնեմաս ունեցող անձանց/իրական շահառուների նույնականացման համար անհրաժեշտ են՝ Եթե իրական շահառուն ֆիզիկական անձ է, ապա անձնագիր կամ նույնականացման քարտի պատճենները: Եթե իրական շահառուն իրավաբանական անձ է, ապա տվյալ իրավաբանական անձի այս տեղեկատվության 2-րդ, 3-րդ և 4-րդ կետերով պահանջվող փաստաթղթերի (ոչ ռեզիդենտների դեպքում՝ միայն 2-րդ և 3-րդ կետերով պահանջվող փաստաթղթերի) պատճենները:</li>
          <li>Մեր պահանջով այլ փաստաթղթեր:</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-bold text-[#333333] mt-10 mb-6">Անհատ ձեռնարկատերի դեպքում՝</h3>
        <ul className="list-disc pl-5 space-y-4 text-[#555555] text-[15px] md:text-[16px] leading-relaxed mb-10">
          <li>Դիմում՝ մեր ձևանմուշի համաձայն:</li>
          <li>Անձնագիր կամ նույնականացման քարտ:</li>
          <li>Պետական ռեգիստրի գրանցման վկայական (բացակայության դեպքում՝ քաղվածք պետական ռեգիստրից):</li>
          <li>Հարկ վճարողի հաշվառման համարը (ՀՎՀՀ), եթե առկա չէ պետական ռեգիստրի վկայականում:</li>
          <li>Ստորագրության նմուշի քարտ: Առանց կնիքի գործող անհատ ձեռնարկատերի դեպքում, ստորագրության և կնիքի քարտում կատարվում է համապատասխան գրառում՝ կնիքի բացակայության վերաբերյալ:</li>
          <li>Մեր պահանջով այլ փաստաթղթեր:</li>
        </ul>
      </div>

      
      <div className="fixed left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col border border-l-0 border-gray-200 rounded-r-xl bg-white py-4 px-3 shadow-sm z-50">
        <div className="flex flex-col gap-3">
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/fb-icon.png" className="w-5 h-5" alt="FB" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/twitter-icon.png" className="w-5 h-5" alt="TW" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/linkedin-icon.png" className="w-5 h-5" alt="IN" /></Link>
          <Link to="#" className="hover:opacity-70 transition-opacity"><img src="https://www.evoca.am/img/social-icons/pinterest-icon.png" className="w-5 h-5" alt="PN" /></Link>
        </div>
      </div>
      <Reviews/>

    </div>
  )
}
export default Ararka;