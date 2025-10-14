
import React from "react";
import { Timeline } from "../../components/ui/timeline";

export default function TimeLineIncome() {
  const data = [
    {
      title: "Help protect your network from spam, viruses, phishing, and malware attacks",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Eliminate spam email before it reaches your network with our proprietary, predictive, self-learning technology. Learning from millions of emails processed daily, the proprietary incoming email filtering system has a nearly 100% filtering accuracy rate.
          </p>
          <div className="grid grid-cols-2 gap-4">
           
          </div>
        </div>
      ),
    },
    {
      title: "Increased email continuity",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            When your email server is unreachable, our system allows you full access (read, compose, answer) to the emails stored in our queue until your email server is back online. This provides an uninterrupted email flow and increased email continuity, helping prevent email from being lost or bounced back to the sender.
          </p>
          
        </div>
      ),
    },
    {
      title: "Detect new spam and malware outbreaks immediately",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            SolarWinds Spam Experts continuously collects and analyzes data to predict and instantly identify new spam outbreaks. This accumulated intelligence is shared real-time with all clients worldwide, ensuring timely protection against new threats.
          </p>
        
        </div>
      ),
    },
    {
        title: "Save on resources, maintenance, and support",
        content: (
          <div>
            <p
              className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
              SolarWinds Spam Experts helps customers reduce resource usage while providing monitoring and regular release cycles with new product functionality. Optimize resources and offload your support by implementing SolarWinds Spam Experts solutions.
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
