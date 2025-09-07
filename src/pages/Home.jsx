import home_section2_1 from "../assets/images/home-section2-1.png";
import home_section2_2 from "../assets/images/home-section2-2.png";
import home_section2_3 from "../assets/images/home-section2-3.png";
import home_section2_4 from "../assets/images/home-section2-4.png";
import home_section3_1 from "../assets/images/home-section3-1.png";
import home_section3_2 from "../assets/images/home-section3-2.png";
import home_section3_3 from "../assets/images/home-section3-3.png";
import home_section4_1_sm from "../assets/images/home-section4-1-sm.png";
import home_section4_1 from "../assets/images/home-section4-1.png";
import home_section4_2_sm from "../assets/images/home-section4-2-sm.png";
import home_section4_2 from "../assets/images/home-section4-2.png";
import home_section5_1 from "../assets/images/home-section5-1.png";
import home_section5_2 from "../assets/images/home-section5-2.png";
import home_section5_3 from "../assets/images/home-section5-3.png";
import home_section5_4 from "../assets/images/home-section5-4.png";
function Home(){
    return(
        <>
        
        <header className="bg-[url('./assets/images/home-header-sm.png')] h-[396px] bg-no-repeat bg-cover md:bg-[url('./assets/images/home-header.png')] md:h-[787px]">
        <div className="container flex flex-col justify-center items-end h-full">
          <p className="text-maroon-dark md:text-4xl">
            Promise-Desert 2020 早春系列
          </p>
          <h1 className="text-maroon-dark font-bold text-2xl md:text-6xl mb-2.5">
            看得清，才能看得遠
          </h1>
          <a className="btn bg-maroon-Default py-1.5 px-3 text-white md:text-xl">
            立即購買
          </a>
        </div>
      </header>
      <section className="bg-maroon-light py-10 md:py-20 mb-10 md:mb-20">
        <div className="container">
          <h2 className="text-maroon-dark text-5xl text-center mb-6 font-bold">
            用專業的心，做專業的事
          </h2>
          <ul className="flex flex-wrap -mx-3 justify-center text-center">
            <li className="mb-6 sm:mb-12 px-3 w-full flex flex-col  items-center sm:w-1/2 lg:w-1/4 lg:mb-0">
              <img
                src={`${home_section2_1}`}
                alt=""
                className="w-[83px] h-[83px] "
              />
              <h3 className="text-maroon-dark text-4xl font-bold">單一價格</h3>
              <p>無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。</p>
            </li>
            <li className="mb-6 sm:mb-12 px-3 w-full flex flex-col items-center sm:w-1/2 lg:w-1/4 lg:mb-0 ">
              <img
                src={`${home_section2_2} `}
                alt=""
                className="w-[83px] h-[83px]"
              />
              <h3 className="text-maroon-dark text-4xl font-bold truncate whitespace-nowrap">
                20 分鐘即可取件
              </h3>
              <p>
                為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快
                20 分鐘即可完成。
              </p>
            </li>
            <li className="mb-6 px-3 w-full flex flex-col items-center sm:w-1/2 lg:w-1/4 lg:mb-0 ">
              <img
                src={`${home_section2_3} `}
                alt=""
                className="w-[83px] h-[83px]"
              />
              <h3 className="text-maroon-dark text-4xl font-bold">
                安心售後服務
              </h3>
              <p>
                我們提供長達 120
                天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。
              </p>
            </li>
            <li className=" px-3 w-full flex flex-col items-center sm:w-1/2 lg:w-1/4">
              <img
                src={`${home_section2_4} `}
                alt=""
                className="w-[83px] h-[83px]"
              />
              <h3 className="text-maroon-dark text-4xl font-bold">關於鏡片</h3>
              <p>使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。</p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container pt-10 pb-10">
          <h2 className="text-5xl text-maroon-dark text-center mb-12 font-bold">
            經典系列鏡框
          </h2>
          <ul className="flex flex-wrap gap-6 flex-col items-center md:gap-0 lg:-mx-3 lg:flex-row">
            <li className="mb-6 lg:mb-0 lg:w-1/3 lg:px-3 ">
              <img src={home_section3_1} alt="" className="object-contain " />
              <p className="text-maroon-Default text-5xl text-center mt-2 italic font-black">
                OPTICAL
              </p>
            </li>
            <li className="mb-6 lg:mb-0 lg:w-1/3  lg:px-3 ">
              <img src={home_section3_2} alt="" className="object-contain " />
              <p className="text-maroon-Default text-5xl text-center mt-2 italic font-black">
                SUNGLASSES
              </p>
            </li>
            <li className="lg:mb-0 lg:w-1/3 lg:px-3 ">
              <img src={home_section3_3} alt="" className="object-contain " />
              <p className="text-maroon-Default text-5xl text-center mt-2 italic font-black">
                FUNCTIONAL
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-20 bg-[url('./assets/images/index-bg-sm.png')] min-h-[820px] bg-no-repeat bg-center bg-cover md:h-[960px] md:bg-[url('./assets/images/index-bg-md.png')] lg:bg-[url('./assets/images/index-bg.png')] lg:h-[608px]">
        <div className="container">
          <h2 className="text-white text-5xl text-center mb-6 md:mb-12">
            聯名鏡框設計
          </h2>
          <div className="lg:flex lg:flex-wrap ">
            <picture className="block lg:w-1/2 mb-6 lg:mb-0">
              <source srcSet={home_section4_1} media="(min-width: 768px)" />
              <img
                src={home_section4_1_sm}
                alt="Responsive image"
                className=" object-cover"
              />
              <h3 className=" text-5xl bg-white text-maroon-Default py-2 text-center italic font-black">
                DOUBLE A+
              </h3>
            </picture>
            <picture className="block lg:w-1/2">
              <source srcSet={home_section4_2} media="(min-width: 768px)" />
              <img
                src={home_section4_2_sm}
                alt="Responsive image"
                className=" object-cover"
              />
              <h3 className=" text-5xl bg-white text-maroon-Default py-2 text-center italic font-black">
                YOUTH
              </h3>
            </picture>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <h2 className="text-5xl text-maroon-dark text-center mb-6 font-bold">
            顧客推薦
          </h2>
          <ul className="flex flex-wrap gap-y-4 md:gap-y-6 md:-mx-3 lg:gap-y-0">
            <li className=" md:w-1/2 md:px-3 lg:w-1/4">
              <div className="rounded border border-gray-20  shadow-[0px_2px_6px_#00000029]">
                <img className="w-full" src={home_section5_1} alt="" />
                <div className="py-4 px-4 h-[205px] flex flex-col">
                  <p className="mb-2 font-medium">Jessy</p>
                  <p className="">眼鏡品質優良，下次還會想來這邊購買！</p>
                  <p className="text-gray-400 mt-auto">2021/06/20</p>
                </div>
              </div>
            </li>
            <li className=" md:w-1/2 md:px-3 lg:w-1/4">
              <div className="rounded border border-gray-20 shadow-[0px_2px_6px_#00000029]">
                <img src={home_section5_2} alt="" />
                <div className="py-4 px-4 h-[205px] flex flex-col">
                  <p className="mb-2 font-medium">凱倫</p>
                  <p className="">
                    做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！
                  </p>
                  <p className="text-gray-400 mt-auto">2021/04/18</p>
                </div>
              </div>
            </li>
            <li className=" md:w-1/2 md:px-3 lg:w-1/4">
              <div className="rounded border border-gray-20 shadow-[0px_2px_6px_#00000029]">
                <img src={home_section5_3} alt="" />
                <div className="py-4 px-4 h-[205px] flex flex-col">
                  <p className="mb-2 font-medium">悠悠</p>
                  <p className="">
                    謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！
                  </p>
                  <p className="text-gray-400 mt-auto">2020/12/25</p>
                </div>
              </div>
            </li>
            <li className=" md:w-1/2 md:px-3 lg:w-1/4">
              <div className="rounded border border-gray-20 shadow-[0px_2px_6px_#00000029]">
                <img src={home_section5_4} alt="" />
                <div className="py-4 px-4 h-[205px] flex flex-col">
                  <p className="mb-2 font-medium">Kyuan</p>
                  <p className="">服務很好，品質沒有任何問題，非常喜歡。</p>
                  <p className="text-gray-400 mt-auto">2020/10/31</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="py-10">
        <div className="container md:w-5/6 lg:w-1/2">
          <h2 className="text-2xl text-maroon-dark text-center font-bold mb-6">
            聯絡我們
          </h2>
          <p className="mb-6">
            我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
          </p>
          <form className="flex flex-col " onSubmit={() => {}}>
            <label htmlFor="name" className="block mb-2 ">
              姓名
            </label>
            <input
              className="border block w-full mb-[22px] py-[6px] px-3"
              id="name"
              name="name"
              required
              type="text"
              placeholder="陳小明"
            />
            <label htmlFor="phone" className="mb-2">
              聯絡電話
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="0912-345-678"
              className="block border w-full mb-[22px] py-[6px] px-3"
            />
            <label htmlFor="email" className="mb-2">
              電子郵件
            </label>
            <input
              id="email"
              name="email"
              required
              type="email"
              placeholder="example@email.com"
              className="block border w-full mb-[22px] py-[6px] px-3"
            />
            <label htmlFor="feedback" className="mb-2">
              意見反應
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              placeholder="請輸入您的意見"
              className="block border w-full mb-[22px] py-[6px] px-3"
            />
            <div className="mb-6 flex items-start ">
              <input
                id="privacy-policy"
                name="privacy-policy"
                required
                type="checkbox"
                className="mt-1 mr-2 "
              />
              <label htmlFor="privacy-policy">
                我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料
              </label>
            </div>
            <button
              type="submit"
              className="bg-maroon-Default py-4 px-34 text-white"
            >
              確認送出
            </button>
          </form>
        </div>
      </section>
    
      </>
    )
}   
export default Home;