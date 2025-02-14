import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Wrapper from '../Wrapper';
import { shortenLink } from '../../api/shortenLink';

const isValidUrl = (url: string): boolean => {
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)" + // Ensure it starts with http:// or https://
    "((([a-zA-Z\\d]([a-zA-Z\\d-]*[a-zA-Z\\d])*)\\.)+[a-zA-Z]{2,}|" + // Domain name
    "localhost|" + // Allow localhost for development
    "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3})" + // OR IPv4 address
    "(\\:\\d+)?(\\/[-a-zA-Z\\d%@_.~+&:]*)*" + // Port and path
    "(\\?[;&a-zA-Z\\d%@_.,~+&:=-]*)?" + // Query parameters
    "(\\#[-a-zA-Z\\d_]*)?$", // Fragment/hash
    "i"
  );
  return urlPattern.test(url);
};

const InputURL: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [urlLinks, setUrlLinks] = useState<any[]>([]);
  const [activeButtonIndex, setActiveButtonIndex] = useState<number>(-1);

  useEffect(() => {
    const past_url_links = JSON.parse(localStorage.getItem('urlItems') || "[]");
    const latest3links = past_url_links.slice(Math.max(past_url_links.length - 3, 0));
    setUrlLinks(latest3links);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (url.trim() === "") {
      setError("Please add a link");
      return;
    } else if (!isValidUrl(url)) {
      setError("Please enter a valid URL.");
      return;
    } else {
      setError("");
      const shortenedURL = await shortenLink(url);

      const items = JSON.parse(localStorage.getItem('urlItems') || "[]");
      const newURL = {
        url: url,
        shortenedURL: shortenedURL
      }      
      const newItems = JSON.stringify([...items, newURL]);
      localStorage.setItem('urlItems', newItems);

      const past_url_links = JSON.parse(localStorage.getItem('urlItems') || "[]");
      const latest3links = past_url_links.slice(Math.max(past_url_links.length - 3, 0));
      setUrlLinks(latest3links);
      }
  }

  return (
    <Wrapper>
      <div className='mb-12 -mt-30 z-1 mx-4 md:mx-0 rounded-md p-8 md:p-12 bg-dark-violet bg-[url(assets/images/bg-shorten-mobile.svg)] md:bg-[url(assets/images/bg-shorten-desktop.svg)] bg-center bg-cover'>
        <form onSubmit={handleSubmit} className='flex flex-col md:flex-row items-center'>
            <input
              value={url}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)} 
              className={`${error === "" ? "" : "border-red border-2 text-red"} 
              md:w-10/12 w-full bg-white rounded-sm ml-4 md:ml-0 px-4 py-2 mb-4 md:mb-0 font-poppins text-sm poppins-medium text-dark-violet mr-4`} 
              placeholder='Shorten a link here...' />
            <Button type='submit' square>Shorten it!</Button>
          </form>
          {error !== "" && <p className='font-poppins text-sm pt-2 italic text-red'>{error}</p>}
          </div>

          {urlLinks.map((item, index) => 
          <div key={index} className='mb-4 mt-6 '>
          <div className='bg-white rounded-sm flex md:flex-row flex-col md:items-center justify-between font-poppins poppins-medium md:text-sm lg:text-base'>
              <h4 className='lg:px-6 lg:py-3 px-3 py-2 text-black border-gray/20 border-b-2 md:border-0'>{item.url}</h4>
              <div className='lg:px-6 lg:py-3 px-3 py-2 flex md:flex-row flex-col md:items-center'>
                  <h4 className='pb-2 md:pb-0 text-cyan pr-8'>{item.shortenedURL}</h4>
                  <button 
                    className={`${index === activeButtonIndex ? "bg-dark-violet py-2 px-3" : "bg-cyan hover:bg-[#9ce2e2] py-2 px-6"} font-poppins text-white poppins-bold rounded-sm hover:cursor-pointer w-10/12 mb-2 md:mb-0 transition duration-300 ease-in-out`}
                    onClick={() =>  { 
                      navigator.clipboard.writeText(item.shortenedURL);
                      setActiveButtonIndex(index);
                      }}
                    >
                    {index === activeButtonIndex ? (<>Copied!</>) : (<>Copy</>)}
                  </button>
                </div>
          </div>
          </div>
          )}
    </Wrapper>
  );
}


export default InputURL;