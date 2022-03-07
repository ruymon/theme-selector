import '../styles/globals.css'

import { useEffect } from 'react';
import { themeChange } from 'theme-change';

function MyApp({ Component, pageProps }) {
  const themeValues = [
    "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
  ];

  useEffect(() => {
    themeChange(false);
  }, [])

  return (
    <>
      <select className="text-primary text-lg p-2 ml-5 mt-5 rounded" data-choose-theme>
        <option className='text-primary' option value=''>Default Value</option>

        {themeValues.map((value, index) => {
          return (
            <option className="text-primary" key={index} option value={value.toLocaleLowerCase()}>{value}</option>
          )
        })}
      </select>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
