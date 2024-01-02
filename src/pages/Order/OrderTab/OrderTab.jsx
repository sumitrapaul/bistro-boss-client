/* eslint-disable react/prop-types */
import FoodOrder from "../../../components/FoodOrder/FoodOrder";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderTab = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

    return (
        <div>
             <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <FoodOrder key={item._id} item={item}></FoodOrder>
          ))}
          </div>
        </SwiperSlide>
       
      </Swiper>
          
        </div>
    );
};

export default OrderTab;