import React, { useEffect, useState } from "react";

interface IProps {
  children: any;
  parentRef: any;
}
const Visibility: React.SFC<IProps> = props => {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(props.parentRef.current);
    return () => observer.unobserve(props.parentRef.current);
  }, []);
  return (
    <div className={`${isVisible ? "animated fadeIn" : ""}`}>
      {props.children}
    </div>
  );
};

export default Visibility;
