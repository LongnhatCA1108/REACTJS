import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./Components/AlbumList";
//
AlbumFeatutes.propTypes = {

}
//
function AlbumFeatutes(props) {
    const albumList = [
        {
            id: 1,
            name: "Giai Điệu Chữa Lành",
            thumbnailUrl: "	https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/1/a/9/a1a9b4ec1741b0f150347bc8582d89ba.jpg"
        },
        {
            id: 2,
            name: "Giai Điệu Chữa Lành",
            thumbnailUrl: "	https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/5/1/8351ceb59c750597f4fd74670d2c9088.jpg"
        },
        {
            id: 3,
            name: "Giai Điệu Chữa Lành",
            thumbnailUrl: "	https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/8/3/5/1/8351ceb59c750597f4fd74670d2c9088.jpg"
        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}
export default AlbumFeatutes;