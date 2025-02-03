// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';



// // import required modules
// import { Autoplay, Navigation } from 'swiper/modules';

// const MainContent = () => {
//   return (
//     <div className='px-14 pb-14 font-[Sora] max-w-7xl mx-auto'>
//         <div className='h-80 '>
//         <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide >
//             <img className='rounded-2xl' src="https://pub-40734399c7f94f69a897234644955410.r2.dev/01he7m2apetr8bqw50j3yp2j9a/0/0/0/01hz284q8pw5yjyjyj27m7br2h" alt="" />
//         </SwiperSlide>
//         <SwiperSlide >
//             <img className='rounded-2xl' src="https://pub-40734399c7f94f69a897234644955410.r2.dev/01he7m2apetr8bqw50j3yp2j9a/0/0/0/01hz284q8n3wwefrsdvka42t4y" alt="" />
//         </SwiperSlide>
        
//       </Swiper>
//         </div>
//         <div className='mt-14'>
//             <div className='relative'>
//                 <div className='text-[#eeeeee] text-[144px] font-bold'> Offer</div>
//                 <div className='absolute top-1/2 -translate-y-1/2 left-10 text-4xl font-bold text-[#333333]'>what we offer</div>
//             </div>
//             <div className='grid grid-cols-4 gap-4'>
//                <div className='rounded-3xl py-10 px-5 min-h-60 h-full  col-span-2 bg-[#333333] text-white font-bold text-2xl flex flex-row justify-between items-center relative min:h-60'>
//                         <img src="https://www.ewheelers.com/assets/card-images/escooer-picture.png" alt="scooter" />
//                         <div className=' '>
//                             <p className='text-red-900'>eMobility</p>
//                             <p>Online Store</p>
//                         </div>
//                         <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>                        
//                 </div>
//                 <div className='rounded-3xl px-5 pt-5 pb-0 min-h-60 h-full  bg-[#eeeeee] text-2xl font-bold flex flex-col justify-between relative min:h-60'>
//                     <div className='  '>
//                         <p className=' inline text-red-900'> Phygital </p>
//                         <p className='inline '>Experience</p>
//                     </div>
//                     <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>                        
//                 <div className=' relative'>
//                 <img className=' w-24 h-28' src="https://www.ewheelers.com/assets/card-images/87-871840_snapshot-phone-in-hand-png.png" alt="" />
//                 <div className=' absolute top-0 left-12'>
//                 <img className=' w-28 h-20' src="https://www.ewheelers.com/assets/card-images/escooer-picture.png" alt="" />
//                 </div>
//                 </div>  
//             </div>
//             <div className='rounded-[30px] p-5 min-h-60 h-full  bg-[#eeeeee] text-2xl font-bold flex flex-col justify-between relative min:h-60'>
//                     <div className='text-2xl gap-x-2 flex flex-wrap'>
//                         <p> Book a</p>
//                         <p className='text-red-900 '>Test Drive</p>
//                         <p>Online</p>
//                     </div>
//                     <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>  
//                     <div>
//                         <img className='w-40 h-32' src="https://www.ewheelers.com/assets/card-images/escooer-picture.png" alt="not applied" />
//                     </div>                      
//                 </div>
//                 <div className='rounded-3xl px-5 pt-5 pb-0 min-h-60 h-full  bg-[#eeeeee] text-2xl font-bold flex flex-col justify-between relative min:h-60'>
//                     <div className='   '>
//                         <p className=' inline text-red-900'> Phygital </p>
//                         <p className='inline '>Experience</p>
//                     </div>
//                     <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>                        
//                 <div className=' relative'>
//                 <img className=' w-24 h-28' src="https://www.ewheelers.com/assets/card-images/87-871840_snapshot-phone-in-hand-png.png" alt="" />
//                 <div className=' absolute top-0 left-12'>
//                 <img className=' w-28 h-20' src="https://www.ewheelers.com/assets/card-images/escooer-picture.png" alt="" />
//                 </div>
//                 </div>  
//             </div>
//             <div className='rounded-3xl px-5 pt-5 pb-0 min-h-60 h-full  bg-[#eeeeee]  cursor-pointertext-2xl font-bold flex flex-col justify-between relative min:h-60'>
//                 <div>
//                     <img className='w-60 h-24' src="https://static.vecteezy.com/system/resources/thumbnails/008/505/855/small/banknotes-rain-illustration-money-falling-png.png" alt="" />
//                 </div>
//                 <div className=' text-2xl'>
//                     <p> Finance and</p>
//                     <p className='text-red-900'> Insuarnace</p>
//                 </div>
//                 <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>  
//             </div>
//             <div className='rounded-3xl py-10 px-5 min-h-60 h-full  col-span-2 bg-[#eeeeee] font-bold text-2xl flex flex-row justify-between items-center relative min:h-60'>
                
//                 <div className='pr-12'>
//                     <p className='text-red-900'> Charging &</p>
//                     <p> Swapping Network</p>
//                 </div>
//                 <div className='pr-20 z-10'>
//                     <img className='w-40 h-48 ' src="https://electriccarcharger.ie/wp-content/uploads/2022/06/Tethered-Connector-EV-Chargers.jpg" alt="" />
//                 </div>
//                 <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>  
//             </div>
//             </div>
//             <div className='mt-14'>
//                 <div className='relative'>
//                     <div className='text-[#eeeeee] text-[144px] font-bold'> Why</div>
//                     <div className='absolute top-1/2 -translate-y-1/2 left-10 text-4xl font-bold text-[#333333]'> Why eWheelers</div>
//                 </div>
//                 <div className='flex flex-row justify-between'>
//                     <div>
//                     <div className='text-red-900 text-[65px] font-bold'> 150+</div>
//                     <div className=' text-black text-lg'> Brands</div>
//                     </div>
//                     <div>
//                     <div className='text-red-900 text-[65px] font-bold'> 800+</div>
//                     <div className=' text-black text-lg'> Brands</div>
//                     </div>
//                     <div>
//                     <div className='text-red-900 text-[65px] font-bold'> 3000+</div>
//                     <div className=' text-black text-lg'> Brands</div>
//                     </div>
//                     <div>
//                     <div className='text-red-900 text-[65px] font-bold'> 10,000+</div>
//                     <div className=' text-black text-lg'> Brands</div>
//                     </div>
//                 </div>
//             </div>
//             <div className='mt-14'>
//                 <div className=' relative'>
//                     <div className='text-[#eeeeee] text-[9rem] font-bold'>Online Store</div>
//                     <div className='absolute top-1/2 -translate-y-1/2 left-10 text-4xl font-bold text-[#333333]'> Online eMobility Store</div>
//                 </div>
//                 <div className=' grid grid-cols-4 gap-4'>
//                 <div className='rounded-3xl py-10 px-5 min-h-60 h-full  col-span-2 bg-[#333333] text-white font-bold text-2xl flex flex-row justify-between items-center relative min:h-60'>
//                         <img src="https://www.ewheelers.com/assets/card-images/escooer-picture.png" alt="scooter" />
//                         <div className=' '>
                          
//                             <p>eScooters</p>
//                         </div>
//                         <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>                        
//                 </div>
//                 <div className='rounded-3xl px-5 pt-5 pb-0 min-h-60 h-full  bg-[#eeeeee] text-2xl font-bold flex flex-col justify-between relative min:h-60'>
//                     <div className='  '>
                       
//                         <p className='inline '>eScoots</p>
//                     </div>
//                     <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>                        
//                 <div className=' relative'>
//                 <img className=' w-24 h-28' src="https://www.ewheelers.com/assets/card-images/87-871840_snapshot-phone-in-hand-png.png" alt="" />
//                 <div className=' absolute top-0 left-12'>
//                 <img className=' w-28 h-20' src="https://www.ewheelers.com/assets/card-images/escooer-picture.png" alt="" />
//                 </div>
//                 </div>  
//             </div>
//             <div className='rounded-[30px] p-5 min-h-60 h-full  bg-[#eeeeee] text-2xl font-bold flex flex-col justify-between relative min:h-60'>
//                     <div className='text-2xl gap-x-2 flex flex-wrap'>
//                         <p> Hoverboards</p>
                       
//                     </div>
//                     <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>  
//                     <div>
//                         <img className='w-40 h-32' src="https://www.ewheelers.com/assets/card-images/escooer-picture.png" alt="not applied" />
//                     </div>                      
//                 </div>
//                 <div className='rounded-3xl px-5 pt-5 pb-0 min-h-60 h-full  bg-[#eeeeee] text-2xl font-bold flex flex-col justify-between relative min:h-60'>
//                     <div className='   '>
                        
//                         <p className='inline '>eMopeds</p>
//                     </div>
//                     <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>                        
//                 <div className=' relative'>
//                 <img className=' w-24 h-28' src="https://www.ewheelers.com/assets/card-images/87-871840_snapshot-phone-in-hand-png.png" alt="" />
//                 <div className=' absolute top-0 left-12'>
//                 <img className=' w-28 h-20' src="https://www.ewheelers.com/assets/card-images/escooer-picture.png" alt="" />
//                 </div>
//                 </div>  
//             </div>
//             <div className='rounded-3xl px-5 pt-5 pb-0 min-h-60 h-full  bg-[#eeeeee]  cursor-pointertext-2xl font-bold flex flex-col justify-between relative min:h-60'>
//                 <div>
//                     <img className='w-60 h-24' src="https://static.vecteezy.com/system/resources/thumbnails/008/505/855/small/banknotes-rain-illustration-money-falling-png.png" alt="" />
//                 </div>
//                 <div className=' text-2xl'>
//                     <p> eBicyles</p>
//                 </div>
//                 <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>  
//             </div>
//             <div className='rounded-3xl py-10 px-5 min-h-60 h-full  col-span-2 bg-[#eeeeee] font-bold text-2xl flex flex-row justify-between items-center relative min:h-60'>
                
//                 <div className='pr-12'>
//                     <p> eMotorcycles</p>
//                 </div>
//                 <div className='pr-20 z-10'>
//                     <img className='w-40 h-48 ' src="https://electriccarcharger.ie/wp-content/uploads/2022/06/Tethered-Connector-EV-Chargers.jpg" alt="" />
//                 </div>
//                 <svg className='w-10 h-10 flex items-center justify-center cursor-pointer bg-[#ffffff] text-[#707070] rounded-full shadow-md absolute right-5 bottom-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000" d="M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z"/></svg>  
//             </div>
                
            
                    

//                 </div>
//             </div>
           
            
            
//         </div>
//     </div>
//   )
// }

// export default MainContent
