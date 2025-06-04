import Link from "next/link";
import { useState } from "react";

export default function Navbar({ onSearch }: { onSearch: (term: string) => void }) {
  const [term, setTerm] = useState("");
  const [searchTerm, setSearchTerm] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (term.trim()) {
      onSearch(term); 
    }
    setSearchTerm(term)
  };

  return (
    <div className=" bg-[#1a1c2df2] text-white sticky top-0   z-10   ">
      
      <form onSubmit={handleSubmit} className="flex items-center justify-between px-6 py-3">
        <div className="lg:flex hidden">
          <button type="button" className="p-2 rounded ">
          <svg  className="fill-[#8a8b93] hover:fill-white transition-colors  duration-100" stroke-width="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
          </button>
          <button type="button" className="p-2 rounded">
  <svg
    className="fill-[#8a8b93] hover:fill-white transition-colors duration-100"strokeWidth="0"viewBox="0 0 512 512"height="1.4em"width="1.4em"xmlns="http://www.w3.org/2000/svg">
    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
  </svg>
</button>

        </div>
<div className="lg:hidden block ">

        <Link  href={"/"}>
        <svg width="45" height="49.46280991735537" viewBox="0 0 363 399" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 267.154V131.714C0.000987483 120.481 2.95865 109.446 8.57578 99.7176C14.1929 89.9894 22.2716 81.9111 32 76.2944L149.3 8.57437C159.029 2.9572 170.066 0 181.3 0C192.534 0 203.571 2.9572 213.3 8.57437L330.59 76.2944C340.318 81.9111 348.397 89.9894 354.014 99.7176C359.631 109.446 362.589 120.481 362.59 131.714V267.154C362.587 278.386 359.629 289.419 354.012 299.146C348.395 308.872 340.317 316.949 330.59 322.564L213.28 390.284C203.551 395.902 192.514 398.859 181.28 398.859C170.046 398.859 159.009 395.902 149.28 390.284L31.99 322.564C22.2649 316.947 14.1892 308.87 8.57394 299.144C2.95871 289.418 0.00172875 278.385 0 267.154V267.154Z" fill="url(#paint0_linear_0)"></path><path d="M212.45 368.604L317.45 307.994C321.01 305.931 324.342 303.498 327.39 300.734L213.28 234.914C203.55 229.299 192.514 226.343 181.28 226.344V350.604C181.279 354.252 182.239 357.836 184.063 360.996C185.886 364.155 188.509 366.779 191.668 368.603C194.827 370.428 198.411 371.388 202.059 371.388C205.707 371.389 209.291 370.428 212.45 368.604V368.604Z" fill="url(#paint1_linear_0)"></path><path d="M327.37 300.734C333.413 295.274 338.244 288.608 341.552 281.165C344.859 273.722 346.568 265.669 346.57 257.524V137.644C346.571 133.996 345.611 130.412 343.788 127.253C341.964 124.093 339.341 121.47 336.182 119.645C333.023 117.821 329.439 116.861 325.791 116.86C322.143 116.86 318.559 117.82 315.4 119.644L200.11 186.214C194.385 189.521 189.631 194.276 186.325 200.002C183.02 205.728 181.28 212.223 181.28 218.834V226.294C192.514 226.293 203.55 229.249 213.28 234.864L327.37 300.734Z" fill="url(#paint2_radial_0)"></path><defs><linearGradient id="paint0_linear_0" x1="264.38" y1="53.7644" x2="45.98" y2="436.614" gradientUnits="userSpaceOnUse"><stop offset="0.31" stop-color="#3ADEE6"></stop><stop offset="0.44" stop-color="#38D8E0"></stop><stop offset="0.61" stop-color="#33C6CE"></stop><stop offset="0.82" stop-color="#2BA9B0"></stop><stop offset="1" stop-color="#21888F"></stop></linearGradient><linearGradient id="paint1_linear_0" x1="288.51" y1="362.514" x2="46.98" y2="133.834" gradientUnits="userSpaceOnUse"><stop offset="0.15" stop-color="#9B7DD9"></stop><stop offset="0.37" stop-color="#7D63B3"></stop><stop offset="0.57" stop-color="#664F95"></stop><stop offset="0.75" stop-color="#584283"></stop><stop offset="0.88" stop-color="#533E7D"></stop></linearGradient><radialGradient id="paint2_radial_0" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(91.39 51.4944) scale(480.67)"><stop offset="0.35" stop-color="#FF78C9"></stop><stop offset="0.42" stop-color="#FD7ECB"></stop><stop offset="0.51" stop-color="#F890D1"></stop><stop offset="0.62" stop-color="#EFAEDB"></stop><stop offset="0.66" stop-color="#EBBCE0"></stop></radialGradient></defs></svg>
        </Link>
        
</div>

        <div className="flex-1 mx-6 max-w-6xl ">
         <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} placeholder="Search through over 70 million podcasts and episodes..." className="w-full border border-[#50515d] rounded-lg text-sm text-center text-white placeholder-gray-400 px-4 py-1 rounded focus:outline-none"   />
        </div>
        <div className=" flex items-center gap-2 ">
          <button
            type="submit"
            className="text-sm bg-[#3b6287] px-3 py-1 rounded hover:border-white lg:flex items-center gap-1 hidden"
          >
            Search
          </button>
          <button className="text-sm bg-[#3b6287] px-4 py-1 rounded hover:bg-gray-300 lg:flex items-center gap-1 hidden">
            Sign up
          </button>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="jsx-8dd1f9521a2787d1 jsx-1363621759" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

        </div>
        
      </form>
      <div className="flex  justify-between items-center p-4 pt-10 border-b border-[#28293D] ">
          <p className="text-sm font-bold   text-white ">
            {searchTerm ? `Top podcasts for ${searchTerm}` : "Popular new podcasts"}
          </p>
          <div className="flex items-center gap-1">

            <svg  className="fill-[#8a8b93] hover:fill-white transition-colors  duration-100" stroke-width="0" viewBox="0 0 512 512" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path></svg>
          <svg
    className="fill-[#8a8b93] hover:fill-white transition-colors duration-100"strokeWidth="0"viewBox="0 0 512 512"height="1.4em"width="1.4em"xmlns="http://www.w3.org/2000/svg">
    <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
  </svg>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" className="jsx-8dd1f9521a2787d1 jsx-1363621759" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg>

          </div>
        </div>
    </div>
  );
}
