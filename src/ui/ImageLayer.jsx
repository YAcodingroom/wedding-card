import PropTypes from "prop-types";

ImageLayer.propTypes = { children: PropTypes.any, bgImage: PropTypes.string };

function ImageLayer({ children, bgImage }) {
  return (
    <section className={`${bgImage} h-imageBox w-full bg-cover bg-center`}>
      <div className="h-full w-full bg-[rgba(255,212,191,0.25)] p-4">
        {children}
      </div>
    </section>
  );
}

export default ImageLayer;
