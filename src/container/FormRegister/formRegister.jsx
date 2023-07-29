import React from "react";
import { styled } from "styled-components";
import ImgRegister from "../../assets/images/imgregister.png"
import Footer from "../footer/Footer";
import Menu from "../Menu/menu";



function FormRegister(){
    return (
        <Appstyle>
        <div className="menu">
        <Menu/>
        </div>
        <div className="contain">
            <div className="title">
                <p>Pendaftaran <br/> Form pendaftaran olimpiade <br/> <span>kelassik</span></p>
            </div>
            <div className="contain-form">
                <div className="left-contain">
                    <img className="Imgregister" src={ImgRegister} alt="imgregist"/>
                </div>
                <div className="right-contain">
                <form name="register" method="post">
                    <label for="name">Nama Lengkap</label>
                    <input type="text" id="name" name="fullname" placeholder="Nama"/>
                    <label for="codemat">Kode Pelajaran</label>
                    <input type="text" id="code" name="codematerial" placeholder="Kode Pelajaran"/>
                    <label for="email">Alamat E-mail</label>
                    <input type="text" id="email" name="email" placeholder="example@gmail.com"/>
                    <label for="schoolname">Nama Sekolah</label>
                    <input type="text" id="school" name="school" placeholder="Nama Sekolah"/>
                    <label for="class">Kelas</label>
                    <input type="text" id="class" name="class" placeholder="IX - 5 IPA"/>
                    <label for="number">No. HP</label>
                    <input type="number" id="hp" name="hp" placeholder="081234567"/>
                    <label for="No.Whatsapp">Kode Pelajaran</label>
                    <input type="number" id="whatsapp" name="whatsapp" placeholder="0898787874"/>
                    <label for="insta">ID Instagram</label>
                    <input type="text" id="instaid" name="instaid" placeholder="id instagram"/>
                         
                    <button className="button" > Login with E-mail Address </button>
                    
                    </form>
                
                </div>
            </div>
        </div>
        <div className="footer">
        <Footer/>
        </div>
        </Appstyle>
    );
}


export default FormRegister;

const Appstyle = styled.div`
.contain {
    padding: 61px 129px;
}
.title {

    >p {
        color: #455A64;
        text-align: center;
        font-size: 36px;
        font-weight: 700;

        >span {
            color: #F4A93F;
        }
    }
}
.contain-form {
    display: flex;
    gap: 39px;
}

.Imgregister {
    margin-top: 170px;
}
.right-contain {
    margin-top: 61px;

}

label {
    display: inline-block;
    color: var(--gray-2, #4F4F4F);
    font-size: 14px;
    font-weight: 400;
    margin-top: 22px;
   
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=number], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.button {
    border-radius: 5px;
    border: none;
    background: linear-gradient(180deg, #EBC25F 0%, #FFA804 100%);
    width: 100%;
    padding: 16px 22px;
    align-items: center;
    margin-top: 30px;
    color: white;
    font-size: 18px;
    font-weight: 400;
}
`