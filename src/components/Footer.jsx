import ig from "../assets/images/ic_social_ig.png";
import fb from "../assets/images/ic_social_fb.png";
import line from "../assets/images/ic_social_line.png";
function Footer() {
  return (
    <footer className="bg-maroon-Default text-white py-6 px-4">
      <div className="flex items-start justify-between">
        <div className="flex flex-col ">
          <ul className="hidden  md:flex md:items-end md:gap-12 md:mt-2 md:mb-7.5">
            <li>
              <a href="" className="py-4">
                首頁
              </a>
            </li>
            <li>
              <a href="" className="py-4">
                系列鏡框
              </a>
            </li>
            <li>
              <a href="" className="py-4">
                門市據點
              </a>
            </li>
            <li>
              <a href="" className="py-4">
                部落格
              </a>
            </li>
            <li>
              <a href="" className="py-4">
                常見問題
              </a>
            </li>
          </ul>
          <div className="flex gap-2.5 mb-2">
            <span className="material-symbols-outlined">phone_in_talk</span>
            <p>0800-000-000</p>
          </div>
          <div className="flex gap-2.5">
            <span className="material-symbols-outlined">mail</span>
            <p>glasses@business.com</p>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 lg:gap-8">
          <img
            width={24}
            height={24}
            className="object-contain md:w-10 md:h-10"
            src={fb}
            alt=""
          />
          <img
            width={24}
            height={24}
            className="object-contain md:w-10 md:h-10"
            src={ig}
            alt=""
          />
          <img
            width={24}
            height={24}
            className="object-contain md:w-10 md:h-10"
            src={line}
            alt=""
          />
        </div>
      </div>
      <hr className="mt-6 mb-4" />
      <div className="flex flex-col gap-2 md:flex-row justify-between">
        <p>Copyright © 2020 Glasses.All rights reserved.</p>
        <div className="flex flex-col md:flex-row md:gap-12">
          <p>隱私權政策</p>
          <p>服務條款</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
