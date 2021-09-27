import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoYoutube,
} from "react-icons/io5";
export default function Footer() {
  return (
    <div className="w-full text-white bg-gray-700 ">
      <div className="container">
        <footer className="flex flex-col justify-between py-12 space-y-4 sm:flex-row ">
          <div className="flex flex-col w-full sm:w-1/5">
            <div>Logo</div>
            <p className="opacity-60">
              Jhon Vazquez y César Herrera, locos soñadores.
            </p>
          </div>
          <div className="flex flex-col w-full space-y-4 text-lg sm:w-1/5">
            <a href="" className="bg-opacity-60">
              Home
            </a>
            <a href="" className="bg-opacity-60">
              Juegos
            </a>
            <a href="" className="bg-opacity-60">
              Deportes
            </a>
          </div>
          <div className="flex flex-col w-full space-y-4 text-lg sm:w-1/5">
            <a href="" className="bg-opacity-60">
              Musica
            </a>
            <a href="" className="bg-opacity-60">
              Noticias
            </a>
            <a href="" className="bg-opacity-60">
              Home
            </a>
          </div>
          <div className="flex flex-col w-full space-y-4 text-lg sm:w-1/5">
            <a href="" className="bg-opacity-60">
              Home
            </a>
            <a href="" className="bg-opacity-60">
              Home
            </a>
            <a href="" className="bg-opacity-60">
              Home
            </a>
          </div>
          <div className="flex items-end ">
            <div className="flex flex-row mb-1 space-x-2">
              <IoLogoFacebook className="text-lg" />
              <IoLogoInstagram className="text-lg" />
              <IoLogoWhatsapp className="text-lg" />
              <IoLogoYoutube className="text-lg" />
            </div>
          </div>
        </footer>
        <div className="opacity-60">
          <p>© 2021 </p>
        </div>
      </div>
    </div>
  );
}
