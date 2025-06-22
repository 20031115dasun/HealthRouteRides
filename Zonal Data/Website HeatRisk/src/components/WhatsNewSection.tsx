import React from 'react';
import { BellIcon, MapIcon, CloudIcon, UsersIcon } from 'lucide-react';
export const WhatsNewSection = () => {
  return <section id="whats-new" className="py-12 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-neutral-white">What's New</h2>
          <p className="text-neutral-mid mt-3 max-w-2xl mx-auto">
            We're revolutionizing delivery routes with cutting-edge AI
            technology and real-time heat mapping. Our latest updates focus on
            driver safety and efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-dark-700 p-6 rounded-xl shadow-sm">
            <div className="bg-[#2F9E44]/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <BellIcon className="h-6 w-6 text-[#2F9E44]" />
            </div>
            <h3 className="font-bold text-lg text-neutral-white mb-2">
              Rest Zone Alerts
            </h3>
            <p className="text-neutral-mid">
              Get notified about nearby cool spots to take a break during hot
              days.
            </p>
            <span className="inline-block mt-4 text-xs font-semibold bg-[#2F9E44]/10 text-[#2F9E44] px-2 py-1 rounded-full">
              NEW FEATURE
            </span>
          </div>
          <div className="bg-dark-700 p-6 rounded-xl shadow-sm">
            <div className="bg-[#3FA9F5]/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <MapIcon className="h-6 w-6 text-[#3FA9F5]" />
            </div>
            <h3 className="font-bold text-lg text-neutral-white mb-2">
              Expanded City Coverage
            </h3>
            <p className="text-neutral-mid">
              Now available in 15 more cities across the country.
            </p>
            <span className="inline-block mt-4 text-xs font-semibold bg-[#3FA9F5]/10 text-[#3FA9F5] px-2 py-1 rounded-full">
              EXPANDED
            </span>
          </div>
          <div className="bg-dark-700 p-6 rounded-xl shadow-sm">
            <div className="bg-[#0CA678]/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <CloudIcon className="h-6 w-6 text-[#0CA678]" />
            </div>
            <h3 className="font-bold text-lg text-neutral-white mb-2">
              Improved AI Model
            </h3>
            <p className="text-neutral-mid">
              Enhanced temperature prediction with more granular data.
            </p>
            <span className="inline-block mt-4 text-xs font-semibold bg-[#0CA678]/10 text-[#0CA678] px-2 py-1 rounded-full">
              UPGRADED
            </span>
          </div>
          <div className="bg-dark-700 p-6 rounded-xl shadow-sm">
            <div className="bg-[#FFD43B]/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
              <UsersIcon className="h-6 w-6 text-[#FFD43B]" />
            </div>
            <h3 className="font-bold text-lg text-neutral-white mb-2">
              Community Updates
            </h3>
            <p className="text-neutral-mid">
              Driver-suggested improvements implemented in our latest update.
            </p>
            <span className="inline-block mt-4 text-xs font-semibold bg-[#FFD43B]/10 text-[#FFD43B] px-2 py-1 rounded-full">
              COMMUNITY
            </span>
          </div>
        </div>
      </div>
    </section>;
};