import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Single from "./Single";


const Swippp = () => {
    const [loadData, setLoadData] = useState([]);
    useEffect(() => {
        fetch('https://service-provider-phi.vercel.app/services')
            .then(res => res.json())
            .then(data => setLoadData(data))
    }, [])
    const bannerData = loadData.slice(0, 6);

    return (
        <div className="w-11/12 mx-auto -z-40">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    bannerData.map(bannerSingleData => <SwiperSlide key={bannerSingleData._id}>
                        <Single bannerSingleData={bannerSingleData}></Single>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Swippp;