import React from 'react';
import { ShieldIcon, BrainIcon, LineChartIcon, HeartIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-12 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-neutral-white">About Us</h2>
          <p className="text-neutral-mid mt-3">
            We're a team of passionate technologists and urban planners
            committed to making delivery work safer and more sustainable in an
            era of climate change.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold text-neutral-white mb-4">
              Our Mission
            </h3>
            <p className="text-neutral-white mb-6">
              HealthRouteRides emerged from a crucial observation: delivery
              workers face increasingly challenging conditions due to rising
              temperatures and extreme weather events. Our AI-powered platform
              was developed to address this growing concern, combining real-time
              environmental data with advanced route optimization.
            </p>
            <p className="text-neutral-white">
              By integrating heat mapping, rest stop locations, and efficient
              route planning, we're not just creating routes – we're building a
              safer, more sustainable future for delivery workers. Our solution
              considers multiple factors including temperature, shade coverage,
              and rest stop availability to ensure optimal worker wellbeing.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-600 p-6 rounded-xl">
              <ShieldIcon className="h-8 w-8 text-[#2F9E44] mb-4" />
              <h4 className="font-bold text-lg text-neutral-white mb-2">
                Safety First
              </h4>
              <p className="text-neutral-mid">
                Prioritizing worker health in extreme conditions
              </p>
            </div>
            <div className="bg-dark-600 p-6 rounded-xl">
              <BrainIcon className="h-8 w-8 text-[#3FA9F5] mb-4" />
              <h4 className="font-bold text-lg text-neutral-white mb-2">
                AI-Powered
              </h4>
              <p className="text-neutral-mid">
                Intelligent route suggestions based on multiple factors
              </p>
            </div>
            <div className="bg-dark-600 p-6 rounded-xl">
              <LineChartIcon className="h-8 w-8 text-[#FFD43B] mb-4" />
              <h4 className="font-bold text-lg text-neutral-white mb-2">
                Data-Driven
              </h4>
              <p className="text-neutral-mid">
                Real-time environmental and traffic monitoring
              </p>
            </div>
            <div className="bg-dark-600 p-6 rounded-xl">
              <HeartIcon className="h-8 w-8 text-[#FF6B6B] mb-4" />
              <h4 className="font-bold text-lg text-neutral-white mb-2">
                Community
              </h4>
              <p className="text-neutral-mid">
                Built with and for delivery workers
              </p>
            </div>
          </div>
        </div>
        <div className="bg-dark-600 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-neutral-white mb-4">
            Our Technology
          </h3>
          <p className="text-neutral-white mb-6">
            Heat-Safe Route Finder uses advanced AI models that incorporate
            multiple data sources to create the most accurate heat and safety
            predictions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-[#2F9E44] font-bold text-lg">LST</div>
              <div className="text-sm text-[#9CA3AF]">
                Land Surface Temperature
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-[#3FA9F5] font-bold text-lg">NDVI</div>
              <div className="text-sm text-[#9CA3AF]">Vegetation Index</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-[#FFD43B] font-bold text-lg">RH</div>
              <div className="text-sm text-[#9CA3AF]">Relative Humidity</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-[#FF6B6B] font-bold text-lg">UV</div>
              <div className="text-sm text-[#9CA3AF]">Ultraviolet Index</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-[#0CA678] font-bold text-lg">WIND</div>
              <div className="text-sm text-[#9CA3AF]">
                Wind Speed & Direction
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};