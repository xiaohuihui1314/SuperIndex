import React from "react";
import {Carousel} from 'antd';



class CarouselList extends React.Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.fetchBtn = this.fetchBtn.bind(this);
    }

    next() {
        this.slider.refs.slick.slickNext()
    }

    previous() {
        this.slider.refs.slick.slickPrev()
    }
    fetchBtn(){

    }
    render() {
        const settings = {
            autoplay: true,//是否自动播放
            adaptiveHeight: true,//高度自适应
            autoplaySpeed: 20000,//播放时间间隔
            pauseOnHover: true,//鼠标放上是否停止播放
            dots: true,
            infinite: true,
            slidesToShow: 1,//一屏显示多少列
            slidesToScroll: 1,//每次播放多少列
            beforeChange: function (currentSlide, nextSlide) {
                console.log("beforeChange:" + currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                console.log("afterChange:" + currentSlide);
            }

        };
        let imgArray = [
            "https://t1.mmonly.cc//uploads/tu/sm/20151226/50.jpg",
            "https://t1.mmonly.cc//uploads/tu/sm/20151226/46.jpg",
            "https://t1.mmonly.cc//uploads/tu/sm/20151226/49.jpg",
            "https://t1.mmonly.cc/uploads/tu/201610/61/d043ad4bd11373f08987bb08a60f4bfbfaed04e8.jpg",
            "https://t1.mmonly.cc/uploads/tu/201610/61/sj1116dm03.jpg",
            "https://t1.mmonly.cc/uploads/tu/201610/61/241f95cad1c8a786fce1fd4a6409c93d71cf50ae.jpg"
        ];
        return (
            <div>
                <Carousel ref={c => this.slider = c } {...settings} >
                    {imgArray.map(function (value, index) {
                        return (
                            <div key={index} style={{"backgroundImage": "url(" + value + ")"}}></div>
                        )
                    })}
                </Carousel>
                <div style={{textAlign: 'center'}}>
                    <button className='button' onClick={this.previous}>Previous</button>
                    <button className='button' onClick={this.next}>Next</button>
                </div>
                <div>
                    <button type="button" onClick={this.fetchBtn}>点击获取</button>
                </div>
            </div>
        );
    }
}
export {
    CarouselList as default
}