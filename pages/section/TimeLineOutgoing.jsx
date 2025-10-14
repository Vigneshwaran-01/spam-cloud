
import React from "react";
import { Timeline } from "../../components/ui/timeline";

export default function TimeLineOutgoing() {
  const data = [
    {
      title: "Protect Your IP and Business Reputation",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Safeguard your IP from blacklisting by filtering outgoing spam, phishing, malware, ransomware, and other email threats. Prevent blacklisting to maintain a trusted sender reputation, ensuring your emails reach inboxes without interruptions.
          </p>
          <div className="grid grid-cols-2 gap-4">
           
          </div>
        </div>
      ),
    },
    {
      title: "Reduce Costs and Save Time",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Blacklisting can lead to costly delays and reputation damage. Our advanced filtering helps you avoid the expenses of delisting, identifying abused accounts, and handling user complaints—saving both time and resources.
          </p>
          
        </div>
      ),
    },
    {
      title: "Enhanced Abuse Management",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Gain full control over outgoing emails with real-time monitoring, detailed filtering reports, and automated abuse detection. Instantly identify and lock compromised accounts to prevent spam from affecting your network.
          </p>
        
        </div>
      ),
    },
    {
        title: "Ensure Reliable Email Delivery",
        content: (
          <div>
            <p
              className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
             Improve email deliverability and maintain seamless business communication with an extra layer of outbound email security. Prevent disruptions and ensure that your emails consistently reach their intended recipients.
            </p>
          
          </div>
        ),
      },
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
