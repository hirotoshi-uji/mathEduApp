// :: Math.Component.js
// :: 数式等の表示に関する components
// :: ExPytha :: Pythagorean Theorem の例示のためのクラス

import React from 'react';
import Tex from './Tex.Component';
import './../../css/math.component.css';




export class ExPytha extends React.Component{
    disp(){
        console.log(this.props.adding);
    }
    render(){
        console.log(this.props.adding);
        if(!this.props.adding){
            return(
                <div class="expytha">
                    <div class="main">
                        <img class="img_l" src={this.props.img} alt={'No Images'}/>
                        <Tex>{this.props.tex}</Tex>
                    </div>
                </div>
            );
        }else{
            return(
                <div class="expytha">
                    <div class="main">
                        <img class="img_l" src={this.props.img} alt={'No Images'}/>
                        <Tex>{this.props.tex}</Tex>
                    </div>
                    <div class="supplement">
                        <img class="img_r" src={this.props.addingImg} alt={'No Images'}/>
                        <Tex>{this.props.adding}</Tex>
                    </div>
                </div>
            );
        }
    }
}