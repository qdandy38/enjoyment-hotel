'use client';
import Image from 'next/image';
import Logo_white from '@/assets/images/logo_white.png';
import Ic_Line from '@/assets/icons/bi_line.svg';
import IC_Ig from '@/assets/icons/ic_instagram.svg';
import { usePathname } from 'next/navigation';

function Footer() {
  const pathName = usePathname();
  const isHide: boolean = ['/login', '/register'].includes(pathName);
  return (
    !isHide && (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-content-contact">
            <div className="footer-content-contact-sns">
              <Image
                className="w-[196px]"
                src={Logo_white}
                alt="logo"
                priority
              />
              <div className="flex items-start gap-4">
                <div className="footer-content-contact-sns-ic">
                  <Ic_Line className="icon w-6 h-6" />
                </div>
                <div className="footer-content-contact-sns-ic">
                  <IC_Ig className="icon w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="footer-content-contact-way">
              <div className="footer-content-contact-way-col">
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <p>TEL</p>
                  <p className="text-sm">+886-7-1234567</p>
                </div>
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <p>FAX</p>
                  <p className="text-sm">+886-7-1234567</p>
                </div>
              </div>
              <div className="footer-content-contact-way-col">
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <p>MAIL</p>
                  <p className="text-sm">elh@hexschool.com</p>
                </div>
                <div className="flex flex-col items-start gap-2 self-stretch">
                  <p>WEB</p>
                  <p className="text-sm">www.elhhexschool.com.tw</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content-copyRight">
            <p>806023 台灣高雄市新興區六角路123號</p>
            <p>© 享樂酒店 2024 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    )
  );
}

export default Footer;
