import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import header_img2 from './header_img2.png'
import header_img3 from './header_img3.png'
import header_img4 from './header_img4.png'
import group_profile2 from './group_profile2.png'
import logo2 from './logo.png'
import bacsi1 from './bacsi1.png'
import bacsi2 from './bacsi2.png'
import bacsi3 from './bacsi3.png'
import bacsi4 from './bacsi4.png'
import bacsi5 from './bacsi5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    logo2,
    header_img2,
    header_img3,
    header_img4,
    group_profile2
    
}

export const specialityData = [
    {
        speciality: 'Bác sĩ đa khoa',
        image: General_physician
    },
    {
        speciality: 'bác sĩ phụ khoa',
        image: Gynecologist
    },
    {
        speciality: 'Bác sĩ da liễu',
        image: Dermatologist
    },
    {
        speciality: 'Bác sĩ nhi khoa',
        image: Pediatricians
    },
    {
        speciality: 'Nhà thần kinh học',
        image: Neurologist
    },
    {
        speciality: 'Bác sĩ tiêu hóa',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Bs. Hoàng Hà Sơn',
        image: bacsi1,
        speciality: 'Bác sĩ đa khoa',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Bs. Hoàng Thị Tuyết Mai',
        image: bacsi2,
        speciality: 'bác sĩ phụ khoa',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 600,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Bs. Nguyễn Cảnh Trung',
        image: bacsi3,
        speciality: 'Bác sĩ da liễu',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 300,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Bs. Lý Hoài Nam',
        image: bacsi4,
        speciality: 'Bác sĩ nhi khoa',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 400,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Bs. Nguyễn Thị Bạch Dương',
        image: bacsi5,
        speciality: 'Nhà thần kinh học',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Bs. Nguyễn Thanh Hải',
        image: doc6,
        speciality: 'Nhà thần kinh học',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Bs. Hà Kim Minh',
        image: doc7,
        speciality: 'Bác sĩ đa khoa',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Bs. Đào Thành Mạnh',
        image: doc8,
        speciality: 'bác sĩ phụ khoa',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 600,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Bs. Phạm Thị Lan Hương',
        image: doc9,
        speciality: 'Bác sĩ da liễu',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 300,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Bs. Nguyễn Thành Vinh',
        image: doc10,
        speciality: 'Bác sĩ nhi khoa',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 400,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Bs. Hoàng Ngọc Anh',
        image: doc11,
        speciality: 'Nhà thần kinh học',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Bs. Nguyễn Công Phương',
        image: doc12,
        speciality: 'Nhà thần kinh học',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Bs. Lê Hà Giang',
        image: doc13,
        speciality: 'Bác sĩ đa khoa',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Bs. Hoàng Hải Đăng',
        image: doc14,
        speciality: 'bác sĩ phụ khoa',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 600,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Bs. Nguyễn Hoài Anh',
        image: doc15,
        speciality: 'Bác sĩ da liễu',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Bác sĩ cam kết một cách mạnh mẽ và lâu dài trong việc cung cấp dịch vụ chăm sóc y tế toàn diện cho người bệnh. Cam kết này không chỉ thể hiện qua việc điều trị các bệnh lý hiện tại, mà còn nhấn mạnh đến vai trò quan trọng của y học dự phòng nhằm hạn chế nguy cơ mắc bệnh trong tương lai. Đồng thời, bác sĩ chú trọng đến việc chẩn đoán sớm để phát hiện kịp thời các vấn đề sức khỏe ngay từ giai đoạn đầu, từ đó xây dựng và triển khai các chiến lược điều trị hiệu quả, cá nhân hóa theo tình trạng và nhu cầu của từng bệnh nhân, nhằm nâng cao chất lượng cuộc sống và sức khỏe bền vững cho cộng đồng.',
        fees: 300,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]