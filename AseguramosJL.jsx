
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function AseguramosJL() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-bold">Aseguramos JL Ltda</h1>
        <nav className="space-x-6">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#faq">FAQ</a>
          <a href="#contacto">Contacto</a>
          <Button>Cotiza ahora</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="bg-blue-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Tu tranquilidad, nuestra prioridad.</h2>
        <p className="text-lg mb-6">Seguros a tu medida para proteger lo que más te importa.</p>
        <Button className="text-lg">Cotiza tu seguro hoy</Button>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 px-6 bg-gray-50">
        <h3 className="text-3xl font-semibold text-center mb-10">Nuestros Servicios</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: "Seguro de Autos", desc: "Protección completa en caso de accidentes, robos y más." },
            { title: "Seguro de Hogar", desc: "Resguarda tu vivienda y pertenencias ante cualquier imprevisto." },
            { title: "Seguro de Vida", desc: "Seguridad para ti y tu familia, hoy y mañana." },
            { title: "Seguros Empresariales", desc: "Soluciones para pequeñas y medianas empresas." },
          ].map((s, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                <p>{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-10">¿Por qué elegirnos?</h3>
        <ul className="grid md:grid-cols-3 gap-6 text-center text-lg">
          <li>Atención personalizada</li>
          <li>Cobertura nacional</li>
          <li>+10 años de experiencia</li>
          <li>Asistencia 24/7</li>
          <li>Alto índice de satisfacción</li>
        </ul>
      </section>

      {/* Testimonios */}
      <section className="bg-blue-50 py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-10">Lo que dicen nuestros clientes</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <blockquote>“Gracias a Aseguramos JL me siento más tranquilo al conducir.”</blockquote>
          <blockquote>“Excelente atención y resolución rápida de siniestros.”</blockquote>
          <blockquote>“El seguro de hogar fue lo mejor que contraté este año.”</blockquote>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-16 px-6 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-10">Contáctanos</h3>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Nombre" className="p-2 border rounded" />
          <input type="email" placeholder="Correo" className="p-2 border rounded" />
          <input type="tel" placeholder="Teléfono" className="p-2 border rounded" />
          <select className="p-2 border rounded">
            <option>Tipo de seguro</option>
            <option>Auto</option>
            <option>Hogar</option>
            <option>Vida</option>
            <option>Empresarial</option>
          </select>
          <textarea placeholder="Comentarios" className="p-2 border rounded" />
          <Button type="submit">Solicitar cotización</Button>
        </form>
        <div className="text-center mt-10">
          <p>Teléfono: +56 9 1234 5678</p>
          <p>Correo: contacto@aseguramosjl.cl</p>
          <p>Dirección: Santiago, Chile</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        <p>Síguenos en redes sociales</p>
        <p className="mt-2 text-sm">© 2025 Aseguramos JL Ltda. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
