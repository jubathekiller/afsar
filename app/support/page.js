import React from 'react'

export default function page() {
  return (
    <div className="bg-white  w-full p-6 md:p-10 relative animate-in fade-in zoom-in duration-300 ">

        {/* Close Button */}


        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-red-600 font-black text-2xl md:text-4xl tracking-tight uppercase">
            Direct Support
          </h2>
          <div className="h-1 w-20 bg-red-600 mx-auto mt-2 rounded-full"></div>
          <p className="text-gray-500 mt-4 font-medium text-sm md:text-base">
            Your contribution fuels independent research and analysis.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left Column: QR Code Section */}
          <div className="bg-red-50/50 border border-red-100 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center">
            <div className="bg-white p-4 rounded-3xl shadow-xl mb-6 transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://www.afsarsquest.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbkash-qr.ff81a16e.png&w=1920&q=75"
                alt="bKash QR Code"
                className="w-48 h-48 md:w-64 md:h-64 object-contain"
              />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-black text-gray-800">Scan to Pay</p>
              <div className="flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <img src="https://www.afsarsquest.com/_next/image?url=%2FbKash.png&w=64&q=75" alt="bKash" className="w-6 h-6" />
                <span className="text-red-600 font-bold text-sm uppercase tracking-wider">bKash Merchant/Personal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Wallets & Bank */}
          <div className="space-y-6">

            {/* Mobile Wallets Card */}
            <div className="bg-white border-2 border-gray-100 rounded-[2rem] p-6 hover:border-red-200 transition-all shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  <img src="https://www.afsarsquest.com/_next/image?url=%2FbKash.png&w=64&q=75" alt="bKash" className="w-10 h-10 object-contain rounded-full border-4 border-white shadow-md" />
                  <img src="https://www.afsarsquest.com/_next/image?url=%2Fnagad-logo.png&w=48&q=75" alt="Nagad" className="w-10 h-10 object-contain rounded-full border-4 border-white shadow-md" />
                </div>
                <div>
                  <p className="font-black text-gray-900 leading-none">MFS Wallets</p>
                  <p className="text-gray-400 text-xs font-bold mt-1 uppercase">bKash / Nagad Personal</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 flex items-center justify-between border border-gray-100">
                <span className="text-red-600 font-black text-xl md:text-2xl tracking-tighter">+880 1635 332980</span>
                <button className="text-[10px] font-bold bg-white px-3 py-1 rounded-lg border border-gray-200 text-gray-400 uppercase hover:bg-red-600 hover:text-white transition-all">Copy</button>
              </div>
            </div>

            {/* Bank Details Card */}
            <div className="bg-gray-900 rounded-[2rem] p-6 md:p-8 text-white relative overflow-hidden shadow-2xl">
              {/* Decorative Background Icon */}
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <img src="https://www.afsarsquest.com/_next/image?url=%2Fislami-bank.png&w=64&q=75" alt="IBBL" className="w-12 h-12 object-contain rounded-xl bg-white p-1" />
                  <div>
                    <p className="font-black text-lg leading-tight uppercase">Islami Bank Plc</p>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Mirpur 1 Branch, Dhaka</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Account Holder</p>
                    <p className="font-bold text-sm md:text-base tracking-wide">MD. NURUL AFSAR</p>
                  </div>
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Account Number</p>
                    <p className="text-red-500 font-black text-xl md:text-2xl tracking-[0.15em]">20502100205884502</p>
                  </div>
                  <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase">
                    <span>Routing: 125263106</span>
                    <span className="text-red-500/50 italic">Independent Quest</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-400 text-[10px] mt-8 font-bold uppercase tracking-[0.3em]">
          Thank you for being part of this journey
        </p>
      </div>
  )
}
