/**
 * SectionWrapper — Wraps every portfolio section with consistent layout.
 * Eliminates repeated section > section-container > section-title markup.
 */

function SectionWrapper({ id, className = "", title, children }) {
  return (
    <section id={id} className={`${className} section`.trim()}>
      <div className="section-container">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
