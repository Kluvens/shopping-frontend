import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const redirectPage = (path: string) => {
    navigate(path);
  }

  return (
    <footer className="bg-white">
      <section className="px-4 lg:px-36 py-12 grid lg:grid-cols-4 grid-cols-1 gap-12 border-b-2">
        <div>
          <h3 className="mb-6 text-gray-500">HELP</h3>
          <div className="grid grid-cols-1 text-gray-700">
            <div className="mb-4 text-sm">
              Please reach our client services team at&nbsp;
              <a href="tel:+852 8100 1182" className="underline underline-offset-4">
                <bdo dir="ltr">+852 8100 1182</bdo>
              </a>
              ,&nbsp;
              <a href="" className="underline underline-offset-4">WhatsApp</a>
              &nbsp;or&nbsp;
              <a href="" className="underline underline-offset-4">click here</a>
              &nbsp;for more information.
            </div>
            <div onClick={() => redirectPage("/faq")} className="mb-4 cursor-pointer">FAQ</div>
            <div onClick={() => redirectPage("/services")} className="mb-4 cursor-pointer">Product Care</div>
            <div className="mb-4">Stores</div>
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-gray-500">SERVICES</h3>
          <div className="grid grid-cols-1 text-gray-700">
            <a href="" className="mb-4">Repair</a>
            <a href="" className="mb-4">Personalization</a>
            <a href="" className="mb-4">Art of Gifting</a>
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-gray-500">ABOUT US</h3>
          <div className="grid grid-cols-1 text-gray-700">
            <div onClick={() => redirectPage("/designers")} className="mb-4">Our designers</div>
            <div onClick={() => redirectPage("/")} className="mb-4">Arts & Culture</div>
            <div onClick={() => redirectPage("/")} className="mb-4">La Maison</div>
            <div onClick={() => redirectPage("/")} className="mb-4">Sustainability</div>
            <div onClick={() => redirectPage("/")} className="mb-4">Latest News</div>
            <div onClick={() => redirectPage("/")} className="mb-4">Jobs</div>
            <div onClick={() => redirectPage("/")} className="mb-4">Foundation Louis Vuitton</div>
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-gray-500">CONNECT</h3>
          <div className="grid grid-cols-1 text-gray-700">
            <p className="mb-4 text-sm">
              <a href="" className="underline underline-offset-4">Sign up</a>
              &nbsp;for the latest news from the Maison, including Exclusive Digital Prelaunch for new collections.
            </p>
            <a href="" className="mb-4">Follow us</a>
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-36 py-12 text-black">
        <div className="text-center">
          <div className="text-2xl font-extrabold">LOUIS VUITTON</div>
        </div>
      </section>
    </footer>
  )
}

export default Footer;
