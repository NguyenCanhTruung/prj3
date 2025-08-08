import React from 'react'
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>VỀ <span className='text-gray-700 font-medium'>CHÚNG TÔI</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12 items-center justify-center'>
        <img className='w-full md:max-w-[360px] rounded' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p className='indent-4'> Chào mừng bạn đến với chúng tôi – người bạn đồng hành tin cậy trong việc quản lý nhu cầu chăm sóc sức khỏe một cách dễ dàng và hiệu quả. Chúng tôi thấu hiểu những khó khăn mà bạn có thể gặp phải khi đặt lịch khám bệnh hay theo dõi hồ sơ sức khỏe cá nhân. Vì vậy, chúng tôi mang đến giải pháp thuận tiện, giúp bạn tiết kiệm thời gian và chủ động hơn trong việc chăm sóc sức khỏe cho bản thân và gia đình.</p>
          <p className='indent-4'> Chúng tôi cam kết mang đến sự xuất sắc trong công nghệ chăm sóc sức khỏe. Chúng tôi không ngừng nỗ lực cải tiến nền tảng, tích hợp những tiến bộ mới nhất để nâng cao trải nghiệm người dùng và cung cấp dịch vụ vượt trội. Dù bạn đang đặt lịch hẹn khám đầu tiên hay quản lý việc chăm sóc sức khỏe liên tục, Chúng tôi luôn sẵn sàng hỗ trợ bạn trong từng bước.</p>
          <b className='text-gray-800 indent-4'>Tầm nhìn của chúng tôi</b>
          <p className='indent-4'> Chúng tôi hướng đến việc xây dựng một hệ sinh thái chăm sóc sức khỏe toàn diện và liền mạch. Bằng cách kết nối hiệu quả giữa người bệnh và các nhà cung cấp dịch vụ y tế, chúng tôi giúp quá trình tiếp cận và sử dụng dịch vụ y tế trở nên dễ dàng, nhanh chóng và đáng tin cậy.</p>
        </div>
      </div>

      <div className='indent-0 md:indent-32 text-xl my-4'>
        <p>VÌ SAO <span className='text-gray-700 font-semibold'>CHỌN CHÚNG TÔI</span> </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Hiệu quả</b>
          <p>Lịch hẹn được sắp xếp hợp lý phù hợp với lối sống bận rộn của bạn.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Sự tiện lợi</b>
          <p>Tiếp cận mạng lưới các chuyên gia chăm sóc sức khỏe đáng tin cậy trong khu vực của bạn.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[-15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Cá nhân hóa</b>
          <p>Những lời khuyên và lời nhắc nhở phù hợp giúp bạn luôn giữ gìn sức khỏe.</p>
        </div>
      </div>

    </div>
  )
}

export default About
