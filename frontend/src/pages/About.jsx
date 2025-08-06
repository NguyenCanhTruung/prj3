import React from 'react'
import {assets} from '../assets/assets'
const About = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>VỀ <span className='text-gray-700 font-medium'>CHÚNG TÔI</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p className='indent-8'> Chào mừng bạn đến với chúng tôi, đối tác đáng tin cậy giúp bạn quản lý nhu cầu chăm sóc sức khỏe một cách thuận tiện và hiệu quả. Tại đây, chúng tôi thấu hiểu những thách thức mà mọi người gặp phải khi đặt lịch hẹn khám bệnh và quản lý hồ sơ sức khỏe.</p>
          <p className='indent-8'> Chúng tôi cam kết mang đến sự xuất sắc trong công nghệ chăm sóc sức khỏe. Chúng tôi không ngừng nỗ lực cải tiến nền tảng, tích hợp những tiến bộ mới nhất để nâng cao trải nghiệm người dùng và cung cấp dịch vụ vượt trội. Dù bạn đang đặt lịch hẹn khám đầu tiên hay quản lý việc chăm sóc sức khỏe liên tục, Chúng tôi luôn sẵn sàng hỗ trợ bạn trong từng bước.</p>
          <b className='text-gray-800 indent-8'>Tầm nhìn của chúng tôi</b>
          <p className='indent-8'> Chúng tôi tạo ra trải nghiệm chăm sóc sức khỏe liền mạch cho mọi người dùng. Chúng tôi mong muốn thu hẹp khoảng cách giữa bệnh nhân và nhà cung cấp dịch vụ chăm sóc sức khỏe, giúp bạn dễ dàng tiếp cận dịch vụ chăm sóc cần thiết, bất cứ khi nào bạn cần.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
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
