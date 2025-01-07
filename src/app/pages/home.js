import React from 'react';
import Image from 'next/image';

export default function Homescreen() {
    return (
        <div className='p-10 flex flex-col lg:flex-row'>
            <div className='lg:w-3/4 pr-5'>
                <h1 className='text-start font-bold text-3xl text-gray-900'>MONSISKA:</h1>
                <h2 className='text-start font-semibold text-2xl mb-4 text-gray-700'>
                    JASA KONSULTASI PENELITIAN DAN PEMBELAJARAN
                </h2>
                <Image
                    src='/images/consultant.jpg'
                    width={550}
                    height={450}
                    alt='Consultant Image'
                    className='rounded-lg shadow-lg'
                />
                <div className='p-5'>
                    <p className='text-justify text-gray-600'>
                        MONSISKA adalah konsultan yang bergerak di bidang penelitian dan
                        pengembangan. Kami membantu para peneliti dalam menyelesaikan
                        penelitian mereka dengan cepat dan tepat. Kami menyediakan jasa
                        konsultasi yang profesional dan terpercaya.
                    </p>
                </div>
            </div>
            <div className='lg:w-1/4 pl-5 mt-10 lg:mt-0'>
                <h1 className='text-start font-bold text-3xl text-gray-900'>LAYANAN KAMI:</h1>
                <div className='grid grid-cols-1 gap-4 mt-4'>
                    <div className='bg-gray-100 p-5 rounded-lg shadow-md'>
                        <h2 className='font-semibold text-xl text-gray-800'>Konsultasi Penelitian</h2>
                        <div className='text-justify text-gray-600'>
                            Kami menyediakan layanan konsultasi untuk:
                            <ul className='list-disc list-inside mt-2'>
                                <li>Penelitian Kualitatif</li>
                                <li>Penelitian Kuantitatif</li>
                                <li>Penelitian Campuran</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
