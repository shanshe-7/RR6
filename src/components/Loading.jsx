import { useState, useEffect } from "react";

function Delayed({ wait = 500, children }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, wait);

    return () => clearTimeout(timeout);
  });

  return show ? children : null;
}

function Loading() {
  return (
    <Delayed>
      <div className="loading center" />
    </Delayed>
  );
}

export default Loading;
