import Image from "next/image"
import HOUSE_IMAGE from "@/public/assets/house.png"
import STAR_IMAGE from "@/public/assets/star.png"
import React from "react"
import Pill from "./Pill"


const Card: React.FC = () => {

 return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg ">
      <Image className="rounded-lg" src={HOUSE_IMAGE} width={378.56} height={299.37} alt="house image" />
      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className=" font-semibold text-[22px]">Villa Arrecife Beach House</h3>
          <p className=" font-medium text=[17px] text-[#929292]">Sideman, Bali, Indonesia</p>
        </div>
        <div className="flex items-center">
          <Image src={STAR_IMAGE} alt="star" />
          <p className=" font-medium text=[17px] ml-2">4.76</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className=" grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          <div className="flex items-center">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2456 9.22324C16.8562 9.05231 16.4356 8.96423 16.0103 8.9646H4.89287C4.46767 8.96419 4.04702 9.05213 3.6576 9.22285C3.10721 9.46354 2.63886 9.85937 2.3098 10.3619C1.98073 10.8645 1.80521 11.4521 1.80469 12.0528V16.3762C1.80469 16.54 1.86976 16.6971 1.98559 16.813C2.10142 16.9288 2.25852 16.9939 2.42232 16.9939C2.58613 16.9939 2.74323 16.9288 2.85906 16.813C2.97489 16.6971 3.03996 16.54 3.03996 16.3762V16.0674C3.04096 15.9858 3.07382 15.9079 3.13152 15.8502C3.18922 15.7925 3.26719 15.7596 3.34878 15.7586H17.5544C17.636 15.7596 17.714 15.7925 17.7717 15.8502C17.8294 15.9079 17.8622 15.9858 17.8632 16.0674V16.3762C17.8632 16.54 17.9283 16.6971 18.0441 16.813C18.16 16.9288 18.3171 16.9939 18.4809 16.9939C18.6447 16.9939 18.8018 16.9288 18.9176 16.813C19.0334 16.6971 19.0985 16.54 19.0985 16.3762V12.0528C19.0979 11.4521 18.9224 10.8647 18.5933 10.3622C18.2642 9.85967 17.7959 9.4639 17.2456 9.22324Z" fill="#131212" />
              <path d="M15.0837 3.40576H5.8192C5.24587 3.40576 4.69603 3.63351 4.29063 4.03892C3.88522 4.44432 3.65747 4.99416 3.65747 5.56749V8.34685C3.65749 8.37078 3.66307 8.39438 3.67376 8.41578C3.68446 8.43718 3.69999 8.45581 3.71912 8.47018C3.73825 8.48456 3.76045 8.49429 3.78399 8.49861C3.80752 8.50293 3.83174 8.50173 3.85473 8.49509C4.1919 8.39647 4.54144 8.34655 4.89274 8.34685H5.05603C5.09414 8.3471 5.131 8.33323 5.15951 8.30793C5.18801 8.28264 5.20615 8.24769 5.21044 8.20982C5.24413 7.90802 5.3878 7.62921 5.61403 7.42663C5.84025 7.22404 6.13316 7.11189 6.43684 7.11158H8.59856C8.90243 7.1116 9.19563 7.22363 9.4221 7.42624C9.64856 7.62885 9.79241 7.90782 9.82612 8.20982C9.8304 8.24769 9.84854 8.28264 9.87705 8.30793C9.90556 8.33323 9.94241 8.3471 9.98053 8.34685H10.9247C10.9629 8.3471 10.9997 8.33323 11.0282 8.30793C11.0567 8.28264 11.0749 8.24769 11.0791 8.20982C11.1128 7.90822 11.2563 7.62957 11.4823 7.42701C11.7083 7.22446 12.0009 7.11217 12.3044 7.11158H14.4661C14.77 7.1116 15.0632 7.22363 15.2896 7.42624C15.5161 7.62885 15.66 7.90782 15.6937 8.20982C15.6979 8.24769 15.7161 8.28264 15.7446 8.30793C15.7731 8.33323 15.81 8.3471 15.8481 8.34685H16.0102C16.3615 8.34669 16.7111 8.39673 17.0482 8.49547C17.0712 8.50212 17.0955 8.50332 17.1191 8.49898C17.1426 8.49464 17.1648 8.48487 17.184 8.47045C17.2031 8.45603 17.2186 8.43736 17.2293 8.41591C17.24 8.39446 17.2455 8.37081 17.2455 8.34685V5.56749C17.2455 4.99416 17.0177 4.44432 16.6123 4.03892C16.2069 3.63351 15.6571 3.40576 15.0837 3.40576Z" fill="#131212" />
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">4</p>
          </div>
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_8_604)">
                <path d="M1.10254 12.1843V13.5573C1.10254 15.1441 2.26869 16.4635 3.ta78896 16.7037V17.7188H4.78733V16.7429H13.1234V17.7188H14.1218V16.7037C15.6421 16.4635 16.8082 15.1441 16.8082 13.5573V12.1843H1.10254Z" fill="#131212" />
                <path d="M2.10119 9.18778V3.42795C2.10119 2.46359 2.88578 1.67903 3.85014 1.67903C4.74325 1.67903 5.48162 2.35204 5.58595 3.21747C4.54635 3.45161 3.76728 4.38176 3.76728 5.49104V6.15673H8.42924V5.49104C8.42924 4.37377 7.63896 3.43807 6.58821 3.21231C6.47769 1.79797 5.29234 0.680664 3.85014 0.680664C2.33527 0.680664 1.10282 1.91308 1.10282 3.42795V9.18778H0.436768V11.1861H17.4746V9.18778H2.10119Z" fill="#131212" />
              </g>
              <defs>
                <clipPath id="clip0_8_604">
                  <rect width="17.0382" height="17.0382" fill="white" transform="translate(0.436279 0.680664)" />
                </clipPath>
              </defs>
            </svg>

            <p className="ml-1 text-[12.95px] font-medium">2</p>
          </div>
          <div className="flex items-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.9053 14.1692C16.9053 14.3575 16.8305 14.538 16.6973 14.6712C16.5642 14.8043 16.3836 14.8791 16.1953 14.8791H7.67621C7.48792 14.8791 7.30735 14.8043 7.17421 14.6712C7.04108 14.538 6.96628 14.3575 6.96628 14.1692C6.96628 13.0395 7.41506 11.956 8.21388 11.1572C9.0127 10.3584 10.0961 9.90961 11.2258 9.90961H12.6457C13.7754 9.90961 14.8588 10.3584 15.6577 11.1572C16.4565 11.956 16.9053 13.0395 16.9053 14.1692ZM11.9358 3.52026C11.3741 3.52026 10.8251 3.68681 10.3581 3.99884C9.89113 4.31087 9.52715 4.75437 9.31222 5.27326C9.09729 5.79215 9.04106 6.36312 9.15063 6.91397C9.2602 7.46482 9.53065 7.97081 9.92779 8.36795C10.3249 8.76509 10.8309 9.03555 11.3818 9.14512C11.9326 9.25469 12.5036 9.19845 13.0225 8.98352C13.5414 8.76859 13.9849 8.40462 14.2969 7.93763C14.6089 7.47064 14.7755 6.92161 14.7755 6.35997C14.7755 5.60683 14.4763 4.88454 13.9437 4.35199C13.4112 3.81945 12.6889 3.52026 11.9358 3.52026ZM5.54643 3.52026C4.98479 3.52026 4.43576 3.68681 3.96877 3.99884C3.50178 4.31087 3.13781 4.75437 2.92288 5.27326C2.70795 5.79215 2.65171 6.36312 2.76128 6.91397C2.87085 7.46482 3.14131 7.97081 3.53845 8.36795C3.93559 8.76509 4.44158 9.03555 4.99243 9.14512C5.54328 9.25469 6.11425 9.19845 6.63314 8.98352C7.15203 8.76859 7.59553 8.40462 7.90756 7.93763C8.21959 7.47064 8.38614 6.92161 8.38614 6.35997C8.38614 5.60683 8.08695 4.88454 7.5544 4.35199C7.02186 3.81945 6.29957 3.52026 5.54643 3.52026ZM5.54643 14.1692C5.54537 13.4235 5.69229 12.685 5.97866 11.9965C6.26504 11.3079 6.68518 10.6831 7.21476 10.1581C6.78137 9.99446 6.32204 9.91029 5.8588 9.90961H5.23406C4.18778 9.91148 3.18488 10.328 2.44504 11.0678C1.70521 11.8076 1.28874 12.8105 1.28687 13.8568V14.1692C1.28687 14.3575 1.36166 14.538 1.4948 14.6712C1.62794 14.8043 1.80851 14.8791 1.99679 14.8791H5.67421C5.59156 14.6514 5.54835 14.4114 5.54643 14.1692Z" fill="#131212" />
            </svg>

            <p className="ml-1 text-[12.95px] font-medium">2-4</p>
          </div>
        </div>
        <p className=" text-[22px] font-semibold">$2,450<span className=" text-[14px] text-[#787878]">/n</span></p>

      </div>
    </div>
  )
}



export default Card;