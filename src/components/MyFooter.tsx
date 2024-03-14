'use client';


import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function FlowbiteFooter() {
  return (
    <Footer className='bg-sky-400'>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterTitle title="Company" className=' text-white' />
            <FooterLinkGroup col className=' text-white'>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Brand Center</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinkGroup>
          </div>
          <div >
            <FooterTitle title="help center" className=' text-white'/>
            <FooterLinkGroup col className=' text-white'>
              <FooterLink href="#">Discord Server</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="legal" className=' text-white'/>
            <FooterLinkGroup col className=' text-white'>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Terms &amp; Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="download" className=' text-white'/>
            <FooterLinkGroup col className=' text-white'>
              <FooterLink href="#">iOS</FooterLink>
              <FooterLink href="#">Android</FooterLink>
              <FooterLink href="#">Windows</FooterLink>
              <FooterLink href="#">MacOS</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-sky-400 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" className='text-white' by="Flowbite™" year={2022} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon className=' text-white' href="#" icon={BsFacebook} />
            <FooterIcon className=' text-white' href="#" icon={BsInstagram} />
            <FooterIcon className=' text-white' href="#" icon={BsTwitter} />
            <FooterIcon className=' text-white' href="#" icon={BsGithub} />
            <FooterIcon className=' text-white' href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default FlowbiteFooter;




