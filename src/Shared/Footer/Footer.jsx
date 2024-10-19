import carLogo from '../../assets/footer-btn/Group 2.png';
import img1 from '../../assets/footer-btn/Icon (1).png'
import img2 from '../../assets/footer-btn/Icon (2).png'
import img3 from '../../assets/footer-btn/Icon (3).png'
import img4 from '../../assets/footer-btn/Icon.png'
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black text-white py-10 px-[120px]">
  <aside>
    <img src={carLogo} alt="" />
    <p className='mt-4 text-lg'>
    Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .
    </p>
    <div className='flex items-center gap-3 mt-5'>
      <img className='hover:bg-red-500 rounded-full w-[50px]' src={img1} alt="" />
      <img className='hover:bg-red-500 rounded-full w-[50px]' src={img2} alt="" />
      <img className='hover:bg-red-500 rounded-full w-[50px]' src={img3} alt="" />
      <img className='hover:bg-red-500 rounded-full w-[50px]' src={img4} alt="" />
    </div>
  </aside>
  <nav>
    <h6 className="font-bold text-xl">About</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="font-bold text-xl">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="font-bold text-xl">Support</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;