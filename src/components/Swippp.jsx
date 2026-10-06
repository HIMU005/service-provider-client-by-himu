import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Single from "./Single";
import { API_URL } from "../api/baseUrl";


const Swippp = () => {
    const [loadData, setLoadData] = useState([]);
    useEffect(() => {
        fetch(`${API_URL}/services`)
            .then(res => res.json())
            .then(data => setLoadData(data))
            .catch(err => console.error(err))
    }, [])
    const bannerData = loadData.slice(0, 6);

    return (
        <div className="w-11/12 mx-auto">
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