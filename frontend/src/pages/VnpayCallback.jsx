import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const VnpayCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    axios.get('http://localhost:4000/api/payment/verify', {
      params: Object.fromEntries(params.entries())
    })
      .then(res => {
        if (res.data.success) {
          toast.success('Thanh toán thành công!');
        } else {
          toast.error('Thanh toán thất bại!');
        }
        navigate('/my-appointments');
      })
      .catch(() => {
        toast.error('Lỗi xác nhận giao dịch!');
        navigate('/my-appointments');
      });
  }, [location.search, navigate]);

  return <div>Đang xác nhận giao dịch...</div>;
};
export default VnpayCallback;
