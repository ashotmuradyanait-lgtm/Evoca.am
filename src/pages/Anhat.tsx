
import Lottie from 'lottie-react';

// Անիմացիոն մոդելի JSON տվյալները (Երեք նկարներով և սահուն անցումներով)
const animationData = {
    v: "5.7.4",
    fr: 30, // 30 կադր/վայրկյան
    ip: 0,
    op: 90, // Ամբողջ անիմացիան 3 վայրկյան է (90 կադր)
    w: 300,
    h: 300,
    nm: "Evoca Scan",
    ddd: 0,
    assets: [
        {
            id: "image_0",
            w: 300,
            h: 300,
            u: "",
            p: "https://www.evoca.am/img/temp/biometric/face1.png", // Առաջին նկարը (Կետերով)
            e: 0
        },
        {
            id: "image_1",
            w: 300,
            h: 300,
            u: "",
            p: "https://www.evoca.am/img/temp/biometric/face2.png", // Երկրորդ նկարը (Ցանցով/Mesh)
            e: 0
        },
        {
            id: "image_2",
            w: 300,
            h: 300,
            u: "",
            p: "https://www.evoca.am/img/temp/biometric/face3.png", // Երրորդ նկարը (Ամբողջական սկան)
            e: 0
        }
    ],
    layers: [
        // Շերտ 1: Ամբողջական սկանավորված նկարը
        {
            ddd: 0,
            ind: 1,
            ty: 2, // Image layer
            nm: "Face 3 (Full Scan)",
            refId: "image_2",
            sr: 1,
            ks: {
                o: { // Opacity անիմացիա
                    a: 1,
                    k: [
                        { t: 0, s: [0], h: 1 }, // Սկզբում անտեսանելի է
                        { t: 30, s: [0], i: { x: [0.8], y: [0.8] }, o: { x: [0.2], y: [0.2] }, h: 0 }, // Մնում է անտեսանելի մինչև 1 վրկ
                        { t: 60, s: [100], h: 1 }, // 2 վրկ-ում դառնում է ամբողջությամբ տեսանելի
                        { t: 75, s: [100], i: { x: [0.8], y: [0.8] }, o: { x: [0.2], y: [0.2] }, h: 0 }, // Մնում է տեսանելի
                        { t: 90, s: [0], h: 1 } // 3 վրկ-ում անհայտանում է
                    ]
                },
                r: { a: 0, k: 0 },
                p: { a: 0, k: [150, 150, 0] },
                a: { a: 0, k: [150, 150, 0] },
                s: { a: 0, k: [100, 100, 100] }
            },
            ao: 0,
            ip: 30, // Հայտնվում է 30-րդ կադրից (1 վրկ)
            op: 90,
            st: 30,
            bm: 0
        },
        // Շերտ 2: Ցանցով նկարը (Mesh)
        {
            ddd: 0,
            ind: 2,
            ty: 2, // Image layer
            nm: "Face 2 (Mesh)",
            refId: "image_1",
            sr: 1,
            ks: {
                o: { // Opacity անիմացիա
                    a: 1,
                    k: [
                        { t: 0, s: [0], h: 1 }, // Սկզբում անտեսանելի է
                        { t: 15, s: [0], i: { x: [0.8], y: [0.8] }, o: { x: [0.2], y: [0.2] }, h: 0 }, // Մնում է անտեսանելի մինչև 0.5 վրկ
                        { t: 45, s: [100], h: 1 }, // 1.5 վրկ-ում դառնում է ամբողջությամբ տեսանելի
                        { t: 60, s: [100], i: { x: [0.8], y: [0.8] }, o: { x: [0.2], y: [0.2] }, h: 0 }, // Մնում է տեսանելի
                        { t: 75, s: [0], h: 1 } // 2.5 վրկ-ում անհայտանում է
                    ]
                },
                r: { a: 0, k: 0 },
                p: { a: 0, k: [150, 150, 0] },
                a: { a: 0, k: [150, 150, 0] },
                s: { a: 0, k: [100, 100, 100] }
            },
            ao: 0,
            ip: 15, // Հայտնվում է 15-րդ կադրից (0.5 վրկ)
            op: 75,
            st: 15,
            bm: 0
        },
        // Շերտ 3: Առաջին նկարը (Կետերով)
        {
            ddd: 0,
            ind: 3,
            ty: 2, // Image layer
            nm: "Face 1 (Dots)",
            refId: "image_0",
            sr: 1,
            ks: {
                o: { a: 0, k: 100 }, // Միշտ տեսանելի է
                r: { a: 0, k: 0 },
                p: { a: 0, k: [150, 150, 0] },
                a: { a: 0, k: [150, 150, 0] },
                s: { a: 0, k: [100, 100, 100] }
            },
            ao: 0,
            ip: 0,
            op: 90,
            st: 0,
            bm: 0
        }
    ]
};

function Anhat() {
    return (
        /* Container - Մուգ ֆոն և կենտրոնացում Tailwind-ով */
        <div className="flex items-center justify-center min-h-screen bg-[#282b30] p-4">
            
            <div className="relative w-80 max-w-full">
                
                {/* Եռանկյունի ֆոն (ըստ վիդեոյի) */}
                <div 
                    className="absolute inset-0 bg-[#6a3db5] opacity-20"
                    style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)', transform: 'scale(1.4)' }}
                ></div>

                {/* Անիմացիայի շրջանակը */}
                <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
                    <Lottie 
                        animationData={animationData} 
                        loop={true} 
                        autoplay={true}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default Anhat;