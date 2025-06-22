import React from 'react';
import { MailIcon, PhoneIcon, MessageSquareIcon, SendIcon } from 'lucide-react';
export const ContactSection = () => {
  return <section id="contact" className="py-12 bg-dark-800">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-neutral-white mb-6">
                Contact Us
              </h2>
              <p className="text-[#9CA3AF] mb-8">
                Have questions or feedback? We'd love to hear from you. Our team
                is here to help with any inquiries about our service.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary-cyan/10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <MailIcon className="h-5 w-5 text-primary-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-white">Email</h4>
                    <p className="text-[#9CA3AF]">support@heatsaferoute.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#3FA9F5]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <PhoneIcon className="h-5 w-5 text-[#3FA9F5]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-white">Phone</h4>
                    <p className="text-[#9CA3AF]">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#FFD43B]/10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <MessageSquareIcon className="h-5 w-5 text-[#FFD43B]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-white">
                      Live Chat
                    </h4>
                    <p className="text-[#9CA3AF]">Available 9am-5pm EST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 bg-dark-700 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-xl text-neutral-white mb-4">
                Send us a message
              </h3>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[#9CA3AF] mb-1">
                      Name
                    </label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F9E44] focus:border-transparent outline-none" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#9CA3AF] mb-1">
                      Email
                    </label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F9E44] focus:border-transparent outline-none" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#9CA3AF] mb-1">
                    Subject
                  </label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F9E44] focus:border-transparent outline-none" placeholder="How can we help?" />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-[#9CA3AF] mb-1">
                    Message
                  </label>
                  <textarea className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F9E44] focus:border-transparent outline-none" rows={4} placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" className="bg-gradient-to-r from-primary-cyan to-primary-blue text-white py-2 px-6 rounded-lg font-medium hover:opacity-90 transition flex items-center">
                  <SendIcon className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};