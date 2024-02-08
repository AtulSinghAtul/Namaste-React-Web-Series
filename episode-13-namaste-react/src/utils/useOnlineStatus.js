import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // Check If Online

  useEffect(() => {
    window.addEventListener("online", (event) => {
      console.log(event + "1");
      setOnlineStatus(true);
    });

    window.addEventListener("offline", (event) => {
      console.log(event + "2");
      setOnlineStatus(false);
    });
  }, []);

  // boolean value
  return onlineStatus;
};

export default useOnlineStatus;
