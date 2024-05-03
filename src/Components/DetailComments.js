
const DetailComments = (props) =>{

    return (
        <>
            <div className="detailCommentContainer">
                <div>
                    <img className="detailCommentAvatar" src="https://as2.ftcdn.net/v2/jpg/05/49/98/39/1000_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg" />
                </div>
                <div>
                    <p>{props.comment}</p>
                </div>
            </div>
        
        </>
    )
}

export default DetailComments;