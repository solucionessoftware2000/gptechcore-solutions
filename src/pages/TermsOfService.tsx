import LegalLayout from '../components/LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout title="Términos de Servicio" updatedAt="24 de junio de 2026">
      <section>
        <h2>1. Objeto</h2>
        <p>
          Estos términos regulan la relación entre GPTech Core y los clientes que contratan
          servicios de desarrollo de software a medida, aplicaciones web/móviles, automatización
          e integraciones presentados en este sitio.
        </p>
      </section>

      <section>
        <h2>2. Cotizaciones y alcance</h2>
        <p>
          Las cotizaciones compartidas por WhatsApp, llamada o correo son referenciales y no
          vinculantes hasta la firma de una propuesta o contrato que detalle alcance, plazos y
          forma de pago del proyecto específico.
        </p>
      </section>

      <section>
        <h2>3. Plazos de entrega</h2>
        <p>
          Los tiempos estimados de entrega (por ejemplo, "4-8 semanas") son referenciales y
          pueden variar según la complejidad del proyecto, la disponibilidad de información del
          cliente y cambios de alcance solicitados durante el desarrollo.
        </p>
      </section>

      <section>
        <h2>4. Propiedad intelectual</h2>
        <p>
          La titularidad del software desarrollado a medida se transfiere al cliente una vez
          completado el pago acordado en el contrato. GPTech Core conserva el derecho de usar
          componentes, librerías o conocimientos técnicos genéricos no exclusivos del proyecto en
          trabajos futuros.
        </p>
      </section>

      <section>
        <h2>5. Servicios de terceros</h2>
        <p>
          Cuando el proyecto integre servicios de terceros (pasarelas de pago, correo
          transaccional, infraestructura cloud, etc.), el cliente acepta los términos y costos
          propios de dichos proveedores. GPTech Core no es responsable por interrupciones o
          cambios en dichos servicios externos.
        </p>
      </section>

      <section>
        <h2>6. Soporte post-lanzamiento</h2>
        <p>
          El alcance y duración del soporte posterior a la entrega se define específicamente en
          la propuesta de cada proyecto. Fuera de ese alcance, el soporte adicional se cotiza por
          separado.
        </p>
      </section>

      <section>
        <h2>7. Ley aplicable</h2>
        <p>
          Estos términos se rigen por las leyes de la República del Perú. Cualquier controversia
          se resolverá preferentemente de forma directa entre las partes antes de recurrir a
          instancias legales.
        </p>
      </section>

      <section>
        <h2>8. Contacto</h2>
        <p>
          Para consultas sobre estos términos, escríbanos a{' '}
          <a href="mailto:soluciones.software.2000@gmail.com" className="text-mint-400 hover:underline">
            soluciones.software.2000@gmail.com
          </a>{' '}
          o al WhatsApp +51 908 576 452.
        </p>
      </section>
    </LegalLayout>
  );
}
