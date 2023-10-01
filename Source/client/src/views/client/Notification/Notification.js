import './Notification.scss'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react';
const Notification = () => {
    const [thongbao, useThongbao] = useState([
        {
            id: 1,
            date: '21/08/2023',
            title: 'THÔNG BÁO VỀ VIỆC TỔ CHỨC HỘI NGHỊ ĐẠI BIỂU VIÊN CHỨC, NGƯỜI LAO ĐỘNG NĂM 2023-2024',
            text: 'Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại.Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại ',
        },
        {
            id: 2,
            date: '21/08/2023',
            title: '2THÔNG BÁO VỀ VIỆC TỔ CHỨC HỘI NGHỊ ĐẠI BIỂU VIÊN CHỨC, NGƯỜI LAO ĐỘNG NĂM 2023-2024',
            text: 'Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại.Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại ',
        },
        {
            id: 3,
            date: '21/08/2023',
            title: '3THÔNG BÁO VỀ VIỆC TỔ CHỨC HỘI NGHỊ ĐẠI BIỂU VIÊN CHỨC, NGƯỜI LAO ĐỘNG NĂM 2023-2024',
            text: 'Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại.Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại ',
        },
        {
            id: 4,
            date: '21/08/2023',
            title: '4THÔNG BÁO VỀ VIỆC TỔ CHỨC HỘI NGHỊ ĐẠI BIỂU VIÊN CHỨC, NGƯỜI LAO ĐỘNG NĂM 2023-2024',
            text: 'Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại.Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại ',
        },
        {
            id: 5,
            date: '21/08/2023',
            title: '5THÔNG BÁO VỀ VIỆC TỔ CHỨC HỘI NGHỊ ĐẠI BIỂU VIÊN CHỨC, NGƯỜI LAO ĐỘNG NĂM 2023-2024',
            text: 'Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại.Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại ',
        },
        {
            id: 6,
            date: '21/08/2023',
            title: '6THÔNG BÁO VỀ VIỆC TỔ CHỨC HỘI NGHỊ ĐẠI BIỂU VIÊN CHỨC, NGƯỜI LAO ĐỘNG NĂM 2023-2024',
            text: 'Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại.Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại biểu viên chức, người lao động năm 2023-2024 Nội dung và văn bản về việc tổ chức hội nghị đại ',
        }
    ]

    );
    return (
        <>
            <div className='container-list-nofication'>
                <div className='container-nofication'>
                    <MarkUnreadChatAltIcon sx={{ color: 'tomato', fontSize: '45px', marginTop: '3px', marginLeft: '11%' }} />
                    <h5>THÔNG BÁO MỚI</h5>
                </div>
                <div className='container-search'>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Tìm kiếm ..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"><SearchIcon sx={{ fontSize: '21px' }} /></button>
                        </div>
                    </div>
                </div>
                <div className='container-container-list-notification'>
                    <div className='container-list-notification'>
                        {
                            thongbao.map((item, index) => {
                                return (
                                    <div className="card card2 w-100" key={item.id} >
                                        <div className="card-body2">
                                            <h4 className="card-title">{item.title}</h4>
                                        </div>
                                        <div className="card-body2">
                                            <p className="card-text">{item.text}</p>
                                        </div>
                                        <div className="card-body2">
                                            <h6 className="card-text">{item.date}</h6>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className='continue'>
                            <div className='continue2'><a href='#'>Xem thêm</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Notification;