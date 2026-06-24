import LegalLayout from '../components/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Política de Privacidad" updatedAt="24 de junio de 2026">
      <section>
        <h2>1. Responsable del tratamiento</h2>
        <p>
          GPTech Core ("nosotros") es responsable del tratamiento de los datos personales que
          nos proporcione a través de este sitio web, WhatsApp o llamada telefónica, conforme a
          la Ley N.º 29733 de Protección de Datos Personales del Perú y su reglamento.
        </p>
      </section>

      <section>
        <h2>2. Datos que recopilamos</h2>
        <p>Recopilamos únicamente los datos que usted decide compartir al contactarnos, tales como:</p>
        <ul className="list-disc list-inside">
          <li>Nombre y datos de contacto (teléfono, correo electrónico).</li>
          <li>Información sobre su empresa y el proyecto que desea cotizar.</li>
          <li>Mensajes enviados a través de WhatsApp o llamadas telefónicas.</li>
        </ul>
        <p>No utilizamos cookies de rastreo ni recopilamos datos de navegación de forma automática.</p>
      </section>

      <section>
        <h2>3. Finalidad del tratamiento</h2>
        <p>Usamos sus datos exclusivamente para:</p>
        <ul className="list-disc list-inside">
          <li>Responder a sus consultas y elaborar cotizaciones.</li>
          <li>Coordinar el desarrollo y soporte de proyectos contratados.</li>
          <li>Enviar comunicaciones relacionadas con el servicio solicitado.</li>
        </ul>
      </section>

      <section>
        <h2>4. Conservación y confidencialidad</h2>
        <p>
          Conservamos sus datos solo durante el tiempo necesario para los fines descritos o
          mientras exista una relación contractual vigente. No vendemos ni compartimos sus datos
          con terceros, salvo proveedores estrictamente necesarios para prestar el servicio
          (por ejemplo, pasarelas de pago o servicios de correo transaccional) y bajo
          obligaciones de confidencialidad.
        </p>
      </section>

      <section>
        <h2>5. Sus derechos</h2>
        <p>
          Usted puede ejercer sus derechos de acceso, rectificación, cancelación y oposición
          (derechos ARCO) sobre sus datos personales escribiéndonos a{' '}
          <a href="mailto:soluciones.software.2000@gmail.com" className="text-mint-400 hover:underline">
            soluciones.software.2000@gmail.com
          </a>{' '}
          o al WhatsApp +51 908 576 452.
        </p>
      </section>

      <section>
        <h2>6. Cambios a esta política</h2>
        <p>
          Podemos actualizar esta política para reflejar cambios en nuestras prácticas o por
          requerimientos legales. La fecha de última actualización se indica al inicio de este
          documento.
        </p>
      </section>
    </LegalLayout>
  );
}
