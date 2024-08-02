import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Banner = () => {
  const location = useLocation();
  const path = location.pathname;
  const { id } = useParams();

  let title = 'Shop';
  let subtitle = '';

  if (path === '/') {
    title = 'Home';
    subtitle = 'Welcome to our store!';
  } else if (path === '/checkout') {
    title = 'Check out';
    subtitle = 'Payment orders';
  } else if (path === `/product/${id}`) {
    title = 'Product Details';
  }

  return (
    <div className='relative w-full'>
      <img
        src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VIdZ20hlVBIze8X1UkCe50GdSRRHwW-eb-v1QNxjAurv~LAMDVov9uL4lAjt2ZzusAcvJMVLmcw6FbTDeX-1rJdy2GgjUE9oz12FVBK6KOqYulCezslN3XuOzbagt09VgH9868GO0ch67t8Q3DRwBLXH47hImr5jd3w9b8WSQ5b89ZCA68K~JwkNxSoy4nwAALCh8aGResreIU5nzAtoAgcQMf1sN1rcBc~Mqg9qgCpHBeAxHHkEFgTqyiIJxm4bh3hzFq-wbDe2Y1XZ~ENjB7Ls~nZrHPKBkyQYmQyYQP36nOkhoo5KGIgCQzkc~VMYoAZrdnl31mrojrCUeHcfmA__"
        alt=""
        className='w-full object-cover h-96 opacity-50'
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h3 className='text-5xl font-semibold mb-3'>{title}</h3>
          <span className='flex items-center justify-center font-bold'>
            {subtitle} <MdKeyboardArrowRight className='text-2xl' /> {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
