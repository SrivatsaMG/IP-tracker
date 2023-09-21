'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getIpLocationData, getClientIpLocationData } from '@/lib/getIpData';
import InputSection from '@/app/components/InputSection';

const Loading = () => {
  return (
    <div className='flex flex-col items-center'>
      <p className='font-rubik font-bold'>A map is loading..</p>
      <svg
        width='75'
        height='75'
        viewBox='0 0 75 75'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='animate-spin'
      >
        <circle
          cx='38'
          cy='38'
          r='23'
          fill='white'
          stroke='#2B2B2B'
          stroke-width='5'
        />
        <mask
          id='mask0_1_5'
          style={{ maskType: 'alpha' }}
          maskUnits='userSpaceOnUse'
          x='13'
          y='13'
          width='50'
          height='50'
        >
          <circle cx='38' cy='38' r='23' stroke='#2B2B2B' stroke-width='5' />
        </mask>
        <g mask='url(#mask0_1_5)'>
          <path d='M36 13H63V40H36V13Z' fill='#969696' />
        </g>
      </svg>
    </div>
  );
};

export default function App() {
  const [ip, setIp] = useState('');
  const [data, setData] = useState<IPLocation | null>(null);

  const Map = dynamic(() => import('../components/LeafMap'), {
    loading: () => <Loading />,
    ssr: false,
  });

  useEffect(() => {
    async function getData(param: string) {
      if (ip) {
        const res: IPLocation = await getIpLocationData(param);
        setData(res);
      } else if (ip === '') {
        const res: IPLocation = await getClientIpLocationData();
        setIp(res.ip);
        setData(res);
      }
    }

    getData(ip);
  }, [ip]);

  return (
    <div className='relative'>
      {data && (
        <InputSection
          ip={ip}
          city={data.location.city}
          region={data.location.region}
          postalCode={data.location.postalCode}
          timezone={data.location.timezone}
          isp={data.isp}
          setIp={setIp}
        />
      )}
      <div
        className={`relative z-0 flex justify-center items-center h-[calc(100vh-236px)]`}
      >
        {data && <Map lat={data.location.lat} lng={data.location.lng} />}
      </div>
    </div>
  );
}
