import "./Wrapper.scss";

const Wrapper = ({ children, className = '' }) => (
  <div className={`wrapper ${className}`}>
    {children}
  </div>
);

export default Wrapper;
