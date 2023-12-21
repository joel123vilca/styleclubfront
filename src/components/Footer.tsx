import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="bg-gray-200 h-[150px] w-full flex items-center justify-around">
        <div className="text-center">
          <div className="text-gray-500">TERMINOS Y CONDICIONES</div>
          <hr className="border-t border-gray-300 my-1 w-full" />
          <span className="text-[10px] text-gray-500 block">
            Términos y condiciones
          </span>
        </div>
        <div className="text-center">
          <div className="text-gray-500">CONTACTO</div>
          <hr className="border-t border-gray-300 my-1 w-full" />
          <span className="text-[10px] text-gray-500 block">
            hola@stylestore.com.ar
          </span>
          <span className="text-[10px] text-gray-500 block">
            invitar a un amigo
          </span>
          <div>
            {/* Asegúrate de importar FontAwesome en tu proyecto */}
            <i className="fab fa-facebook-square"></i>
          </div>
        </div>
      </div>
      <div className="bg-[#D7D7D7] h-[60px] w-full flex items-center justify-between py-4 px-20">
        <div className="flex flex-col">
          <span className="text-gray-700 font-bold">THE</span>
          <span className="text-gray-700 font-bold">STYLECLUB</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-[12px]">
            SUSCRIBETE PARA RECIBIR NOVEDADES
          </span>
          <input type="text" className="h-6 border border-gray-400" />
          <button className="h-6 bg-gray-500 px-2 text-white">
            SUSCRIBETE
          </button>
        </div>
        <button className="h-6 bg-gray-500 px-2 text-white">
          Soporte Técnico
        </button>
      </div>
    </footer>
  );
};

export default Footer;
