import './DetailNotification.scss'



const DetailNotification = (thongbao) => {
    console.log('props: ', thongbao)
    return (

        <div div className="card card2 w-100" >
            <div className="card-body2">
                <h4 className="card-title">{thongbao.thongbao.title}</h4>
            </div>
            <div className="card-body2">
                <p className="card-text">{thongbao.thongbao.text}</p>
            </div>
            <div className="card-body2">
                <p className="card-text">{thongbao.thongbao.id}</p>
            </div>
        </div>

    )

}
export default DetailNotification;