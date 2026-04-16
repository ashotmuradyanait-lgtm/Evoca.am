import React from 'react';

// Սահմանում ենք գույները փոփոխականների տեսքով` հեշտ փոփոխման համար
const THEME_COLORS = {
  purple: '#6C2AF5', // Evoca Bank-ի հիմնական մանուշակագույնը
  darkPurple: '#5119C2', // Ավելի մուգ մանուշակագույն երանգավորման համար
  yellow: '#F7E135', // Դեղին պրիզմայի գույնը
  pink: '#E91E63', // Վարդագույն պրիզմայի գույնը
};

const EvocaBackground: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Հիմնական մանուշակագույն ֆոն */}
      <div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: THEME_COLORS.purple }}
      />

      {/* Դեկորատիվ էլեմենտներ (կետեր և երկրաչափական պատկերներ) */}
      <div className="absolute inset-0 z-10 opacity-30">
        {/* Կետավոր նախշ ձախ կողմում */}
        <div
          className="absolute top-10 left-10 h-40 w-40 rounded-full"
          style={{
            backgroundImage: `radial-gradient(${THEME_COLORS.darkPurple} 2px, transparent 2px)`,
            backgroundSize: '15px 15px',
          }}
        />

        {/* Կետավոր նախշ աջ կողմում */}
        <div
          className="absolute bottom-20 right-20 h-60 w-60 rounded-full"
          style={{
            backgroundImage: `radial-gradient(${THEME_COLORS.darkPurple} 2px, transparent 2px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Դեղին եռանկյուն պրիզմա */}
        <div
          className="absolute top-1/4 right-10 h-16 w-16 rotate-12 transform"
          style={{
            backgroundColor: THEME_COLORS.yellow,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Ստեղծում ենք եռանկյուն
          }}
        />

        {/* Մանուշակագույն եռանկյուն պրիզմա (ավելի մուգ) */}
        <div
          className="absolute top-20 right-1/4 h-12 w-12 rotate-[-15deg] transform"
          style={{
            backgroundColor: THEME_COLORS.darkPurple,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />

        {/* Վարդագույն եռանկյուն պրիզմա (ձախում) */}
        <div
          className="absolute bottom-1/4 left-5 h-10 w-10 rotate-[30deg] transform"
          style={{
            backgroundColor: THEME_COLORS.pink,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
      </div>

      {/* Բովանդակության բլոկները (Cards) */}
      <div className="relative z-20 flex flex-col items-center p-6 md:p-12 lg:p-20">
        {/* Վերնագիր */}
        <h1 className="mb-10 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Լավագույնը Evocabank-ից
        </h1>

        {/* Քարտերի կոնտեյներ */}
        <div className="grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Քարտ 1: Evoca Digital քարտ */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-purple-700">
                Թվային քարտեր
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Evoca Digital քարտ
            </h2>
            <p className="text-gray-600">
              Evoca Digital քարտը արդեն հասանելի է EvocaTOUCH հավելվածով: Ակտիվացրու այն հիմա և ընտրիր քո սիրելի դիզայնը:
            </p>
          </div>

          {/* Քարտ 2: Evoca Gift Card */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-purple-700">
                Նվեր քարտեր
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Evoca Gift Card
            </h2>
            <p className="text-gray-600">
              Գնիր Evoca Gift Card, և լավագույն նվերը կլինի քոնը: Քարտը հարմար է բոլոր առիթների համար:
            </p>
          </div>

          {/* Քարտ 3: EvocaTOUCH 2 */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-purple-700">
                Նոր հավելված
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              EvocaTOUCH 2
            </h2>
            <p className="text-gray-600">
              EvocaTOUCH-ը պարզապես բանկային հավելված չէ, վստահ ենք՝ այն քեզ համար դառնալու է ապրելակերպ:
            </p>
          </div>

          {/* Քարտ 4: Արագ online վճարումներ */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-purple-700">
                Օնլայն վճարումներ
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-gray-900">
              Արագ online վճարումներ
            </h2>
            <p className="text-gray-600">
              Կատարիր քո ընթացիկ վճարումները Evocabank-ի online տերմինալի միջոցով՝ պարզ և արագ: Այն հասանելի է 24/7:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvocaBackground;