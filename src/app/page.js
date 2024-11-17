"use client";
import React, { useState, useEffect } from "react";
import {
  Truck,
  Camera,
  FileText,
  Package,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";


export default function NocturnalDeliveryLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shootingStars, setShootingStars] = useState([]);
  const [fixedStars, setFixedStars] = useState([]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      senderName: e.target.senderName.value,
      receiverName: e.target.receiverName.value,
      senderPhone: e.target.senderPhone.value,
      receiverPhone: e.target.receiverPhone.value,
      orderDescription: e.target.orderDescription.value,
      orderDate: e.target.orderDate.value,
    };
  
    console.log(formData)
    setIsModalOpen(false)
    toast.success("Pedido enviado correctamente 🎉");
    toast.error("Error de conexión con el servidor 💔");
    
  };
  


  const twinkleKeyframes = `
    @keyframes twinkle {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;

  const shootingStarKeyframes = `
 @keyframes shootingStar {
  0% { transform: translate(0, 0); opacity: 1; }
  100% { transform: translate(400px, 200px); opacity: 0; }
}
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      setShootingStars((prev) => [
        ...prev,
        {
          id: Date.now(),
          top: Math.random() * 50,
          left: Math.random() * 50,
        },
      ]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (shootingStars.length > 5) {
      setShootingStars((prev) => prev.slice(10));
    }
  }, [shootingStars]);

  useEffect(() => {
    setFixedStars(
      [...Array(250)].map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        animationDelay: Math.random() * 10,
        animationDuration: Math.random() * 3 + 2,
      }))
    );
  }, []);



  return (
    <>
    
      <style>{`
        ${twinkleKeyframes}
        ${shootingStarKeyframes}
        .shooting-star {
          position: fixed;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 100%;
          animation: shootingStar 0.7s linear forwards;
        }
      `}</style>
      <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      <ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
/>
        <div className="fixed inset-0 z-0">
          {fixedStars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full animate-twinkle"
              style={{
                width: star.size + "px",
                height: star.size + "px",
                top: star.top + "%",
                left: star.left + "%",
                animationDelay: star.animationDelay + "s",
                animationDuration: star.animationDuration + "s",
                boxShadow:
                  "0 0 " +
                  (Math.random() * 8 + 4) +
                  "px rgba(255, 255, 255, 0.7)",
                background:
                  "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 50%)",
              }}
              aria-hidden="true"
            />
          ))}
        </div>
        <div className="fixed inset-0 z-10 pointer-events-none">
          {shootingStars.map((star) => (
            <div
              key={star.id}
              className="shooting-star"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                boxShadow: "0 0 4px 2px white",
              }}
            />
          ))}
        </div>

        <div className="relative z-20">
          <header className="bg-navy-800 py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="/images/logonocturnabb.png"
                  alt="Logo Nocturna"
                  className="h-28 w-28 mr-2"
                />
                <span className="text-2xl font-bold font-mono">Nocturna</span>
              </div>
              <nav className="hidden md:block">
                <a
                  href="#routes"
                  className="mx-2 hover:text-blue-300 font-mono"
                >
                  Rutas
                </a>
                <a
                  href="#security"
                  className="mx-2 hover:text-blue-300 font-mono"
                >
                  Seguridad
                </a>
                <a
                  href="#contact"
                  className="mx-2 hover:text-blue-300 font-mono"
                >
                  Contacto
                </a>
              </nav>
              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu />
              </button>
            </div>
            {isMenuOpen && (
              <div className="md:hidden bg-navy-800 mt-2 py-2">
                <a href="#routes" className="block px-4 py-2 hover:bg-navy-700">
                  Rutas
                </a>
                <a
                  href="#security"
                  className="block px-4 py-2 hover:bg-navy-700"
                >
                  Seguridad
                </a>
                <a
                  href="#contact"
                  className="block px-4 py-2 hover:bg-navy-700"
                >
                  Contacto
                </a>
              </div>
            )}
          </header>

          <section className="py-12 md:py-20 text-center px-4">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              Envíos Nocturnos Seguros y Eficientes
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Especialistas en envíos de paquetes nocturnos en Costa Rica
            </p>
          </section>

          <section
            id="routes"
            className="py-12 md:py-16 bg-navy-800 bg-opacity-50"
          >
            <div className="container mx-auto px-4">
              <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
                Rutas y Tarifas
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm md:text-base">
                  <thead>
                    <tr className="bg-navy-700">
                      <th className="p-2 md:p-3">Día</th>
                      <th className="p-2 md:p-3">Recolección</th>
                      <th className="p-2 md:p-3">Destino</th>
                      <th className="p-2 md:p-3">Tarifa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-navy-600">
                      <td className="p-2 md:p-3">Lunes</td>
                      <td className="p-2 md:p-3">Alajuela-Heredia-San José</td>
                      <td className="p-2 md:p-3">Cartago</td>
                      <td className="p-2 md:p-3">4,000 colones</td>
                    </tr>
                    <tr className="border-b border-navy-600">
                      <td className="p-2 md:p-3">Martes</td>
                      <td className="p-2 md:p-3">Alajuela-Heredia-San José</td>
                      <td className="p-2 md:p-3">San Ramón</td>
                      <td className="p-2 md:p-3">3,000 colones</td>
                    </tr>
                    <tr className="border-b border-navy-600">
                      <td className="p-2 md:p-3">Miércoles</td>
                      <td className="p-2 md:p-3">Alajuela-Heredia-San José</td>
                      <td className="p-2 md:p-3">Puntarenas</td>
                      <td className="p-2 md:p-3">5,000 colones</td>
                    </tr>
                    <tr>
                      <td className="p-2 md:p-3">Jueves - Domingo</td>
                      <td className="p-2 md:p-3" colSpan={2}>
                        Ubicaciones y tarifas variables (contáctanos para más
                        información)
                      </td>
                      <td className="p-2 md:p-3"></td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-4 text-center text-sm md:text-base underline">
                  Consulta por enviar un paquete cuando el mensajero te visite
                  fuera del GAM
                </p>
              </div>
            </div>
          </section>

          <section id="security" className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
                Sistema de Envío Seguro
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="flex items-start">
                  <Truck
                    className="text-blue-300 mr-4 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Recolección Matutina
                    </h3>
                    <p>
                      Recogemos tu paquete en la mañana para asegurar un
                      procesamiento eficiente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Camera
                    className="text-blue-300 mr-4 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Evidencia Fotográfica
                    </h3>
                    <p>
                      Tomamos fotografías del paquete y la identificación del
                      remitente y destinatario.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText
                    className="text-blue-300 mr-4 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Formulario Firmado
                    </h3>
                    <p>
                      Documentamos los detalles del contenido y obtenemos firmas
                      de confirmación.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Package
                    className="text-blue-300 mr-4 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Protección del Paquete
                    </h3>
                    <p>
                      Embalamos cuidadosamente con cajas y papel protector para
                      garantizar la seguridad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-navy-800 bg-opacity-50 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              ¿Listo para enviar?
            </h2>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <button
                className="w-full md:w-auto bg-blue-300 text-navy-900 px-6 py-3 rounded-full font-semibold hover:bg-black border-2 border-blue-300 hover:border-blue-300 transition duration-300"
                onClick={() => setIsModalOpen(true)}
              >
                Realiza tu Envío Ahora
              </button>
              <button
                className="w-full md:w-auto bg-transparent border-2 border-blue-300 text-blue-300 px-6 py-3 hover:text-white rounded-full font-semibold hover:bg-blue-300 hover:text-navy-900 transition duration-300"
                onClick={() =>
                  (window.location.href =
                    "https://wa.me/50663894824?text=Hola,%20estoy%20interesado%20en%20sus%20servicios.")
                }
              >
                Contacta a Nuestro Equipo
              </button>
            </div>
          </section>

          <footer id="contact" className="bg-navy-800 py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between items-center">
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold mb-2">
                    RivcodeNocturna
                  </h3>
                  <p>Envíos nocturnos seguros en Costa Rica</p>
                </div>
                <div className="w-full md:w-1/3 mb-4 md:mb-0">
                  <h4 className="text-lg font-semibold mb-2">Contacto</h4>
                  <div className="flex items-center mb-2">
                    <Phone className="text-blue-300 mr-2" size={16} />
                    <span>+506 6389 4824</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Mail className="text-blue-300 mr-2" size={16} />
                    <span>rivcodecra@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-blue-300 mr-2" size={16} />
                    <span>Alajuela, Costa Rica</span>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-300 hover:text-blue-400">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-blue-300 hover:text-blue-400">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-blue-300 hover:text-blue-400">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-black p-1 rounded-lg max-w-md w-full shadow-lg">
              <div className="bg-navy-800 p-6 rounded-lg border-2 border-blue-300 shadow-inner">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">
                    Formulario de Envío
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="senderName"
                      className="block text-sm font-medium text-white"
                    >
                      Nombre del Remitente
                    </label>
                    <input
                      type="text"
                      id="senderName"
                      name="senderName"
                      required
                      className="mt-1 block w-full px-3 py-2 bg-black border border-2 border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white font-bold"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="receiverName"
                      className="block text-sm font-medium text-white"
                    >
                      Nombre del Destinatario
                    </label>
                    <input
                      type="text"
                      id="receiverName"
                      name="receiverName"
                      placeholder="Opcional"
                      required
                      className="mt-1 block w-full px-3 py-2 bg-black border border-2  border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white font-bold"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="senderPhone"
                      className="block text-sm font-medium text-white"
                    >
                      Teléfono del Remitente
                    </label>
                    <input
                      type="tel"
                      id="senderPhone"
                      name="senderPhone"
                      required
                      className="mt-1 block w-full px-3 py-2 bg-black border border-2  border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white font-bold"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="receiverPhone"
                      className="block text-sm font-medium text-white"
                    >
                      Teléfono del Destinatario
                    </label>
                    <input
                      type="tel"
                      id="receiverPhone"
                      name="receiverPhone"
                      placeholder="Opcional"
                      required
                      className="mt-1 block w-full px-3 py-2 bg-black border border-2  border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white font-bold"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="orderDescription"
                      className="block text-sm font-medium text-white"
                    >
                      Descripción del Pedido
                    </label>
                    <textarea
                      id="orderDescription"
                      name="orderDescription"
                      rows={3}
                      required
                      className="mt-1 block w-full px-3 py-2 bg-black border border-2  border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white font-bold"
                    ></textarea>
                  </div>
                  <div>
                    <label
                      htmlFor="orderDate"
                      className="block text-sm font-medium text-white"
                    >
                      Fecha del Pedido
                    </label>
                    <input
                      type="date"
                      id="orderDate"
                      name="orderDate"
                      required
                      min="2024-01-01"
                      max="2024-12-31"
                      className="mt-1 block w-full px-3 py-2 bg-black border border-2 border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white font-bold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-300 text-navy-900 px-4 py-2 text-black font-bold rounded-md  hover:bg-blue-400 transition duration-300 shadow-md hover:shadow-lg"
                  >
                    Enviar Pedido
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
