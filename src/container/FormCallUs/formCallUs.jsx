import React from "react";
import { styled } from "styled-components";
import Menu from "../Menu/menu";
import Footer from "../footer/Footer";


function FormCallUs(){
    return (
        <Appstyle>
        <div className="menu">
            <Menu/>
        </div>
        <div className="contain">
            <div className="title">
                <p>Hubungi kami</p>
                <p>Butuh bantuan atau ada yang <br/> ingin dismpaikan silahkan kirim pesan berikut ini</p>
            </div>
            <div className="form-call">
            <form name="register" method="post">
            <div className="first-field">
            <div className="namefield">
            <label for="name">Nama Lengkap</label>
            <input type="text" id="name" name="fullname" placeholder="Nama"/>
            </div>
            <div className="email">           
            <label for="name">Alamat E-mail</label>
            <input type="text" id="email" name="email" placeholder="example@gmail.com"/>
            </div>
            </div>
            <label for="name">No. Whatsapp</label>
            <input type="text" id="whatsapp" name="whatsapp" placeholder="SD Santa Thomas Jakarta"/>
            <label for="name">Topik</label>
            <input type="text" id="topic" name="topic" placeholder="example@gmail.com"/>
            <label for="name">Pesan</label>
            <textarea id="massage" name="massage" rows="7" cols="60" placeholder="Massage ..."/>
            </form>      
            </div>
        </div>
        <div className="footer">
            <Footer/>
        </div>

        </Appstyle>
    );
}

export default FormCallUs;
const Appstyle = styled.div`

.title {
    padding: 55px 152px 30px 152px;

    >p:nth-child(1) {
        color: var(--meteoroid-purple, #455A64);
        text-align: center;
        font-size: 36px;
        font-weight: 700;
        margin: 0;
    }
    >p:nth-child(2){
        color: var(--dusty-gray, #B0BEC5);
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        margin: 0;
    }
}
.form-call {
    padding: 60px 152px;

}

label {
    margin-top: 28px;
    display: inline-block;
}
.first-field {
    display: flex;
    justify-content: space-between;
    gap: 70px;
    
}

.namefield {
    width: 50%;
}
.email{
    width: 50%;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: inline-block;
}
textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    display: inline-block;
}
`