import React, { useEffect, useState } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const TawkMessenger = () => {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    // Delay the loading of the Tawk widget by 3 seconds
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 3000);  // Adjust the delay time as needed

    // Cleanup timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showWidget && (
        <TawkMessengerReact
          propertyId="680f2b7c429e411905b99f3b"
          widgetId="1iptk3ntr"
        />
      )}
    </div>
  );
};

export default TawkMessenger;
