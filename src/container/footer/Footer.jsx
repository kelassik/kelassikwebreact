import { styled } from "styled-components";
import React from "react";
import {ReactComponent as LogoFooter} from "../../assets/images/logofooter.svg"
import {ReactComponent as EmailIcon} from "../../assets/icons/emailicon.svg"
import {ReactComponent as TeleIcon} from "../../assets/icons/telesosmed.svg"
import {ReactComponent as YtIcon} from "../../assets/icons/ytsosmed.svg"
import {ReactComponent as InstaIcon} from "../../assets/icons/instasosmed.svg"



function Footer() {
    return (
        <AppStyle>
        <div className="firstcontainer">
        <div className="left-container">
        <div className="logo-footer">
            <LogoFooter/>
            <p>OLIMPIADE <span>KELASSIK</span></p>
        </div>
        <div className="location-footer">
          <p> INDONESIA <br/> <span>Jakarta</span></p>  
        </div>
        <div className="contact-sosmed">
          <p>Contact Us</p>
          <div className="icon-sosmed">
            <div className="email-sosmed">
            <EmailIcon/>
            </div>
            <div className="tele-sosmed">
            <TeleIcon/>
            </div>
            <div className="yt-sosmed">
            <YtIcon/>
            </div>
            <div className="insta-sosmed">
            <InstaIcon/>
            </div>
          </div>
        </div>
        </div>
        <div className="right-container">
        <div className="legal-contain">
          <p> Legal </p>
          <p> Terms of Service </p>
          <p> Privacy policy </p>
          <p> Refund Policy </p>
          <p> Earning Disclaimer </p>
        </div>
        <div className="sitemap-contain">
          <p>Sitemap</p>
          <p> About</p>
          <p> FAQ </p>
        </div>
        </div>
        </div>
        <div className="second-container">
        <div className="copyright-contain">
          <p>Copyright PT Konexus Indonesia © 2022</p>
        </div>
        <div className="url-contain">
          <p>www.kelassik.com  <span> |  All rights reserved.</span></p>
        </div>
        </div>
        </AppStyle>
    );
  }
  
  export default Footer;


  const AppStyle = styled.div`
  
  .firstcontainer {
    background-color: #F6F7F8;
    padding: 48px 114px 0px;
    display: flex;

  }
  .logo-footer {
    display: flex;
    align-items: center;
    gap: 10px;

    >p {
      color: #212121;
      font-size: 24px;
      font-weight: 700;
      margin: 0;
      span {
        color: #F4A93F;
      }
    }
  }
  .location-footer {

    margin-top: 58px;
    >p {
      margin: 0;
      color: var(--carbon-black, #212121);
      font-size: 20px;
      font-weight: 700;
      span {
        color: var(--carbon-black, #212121);
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
  .contact-sosmed {
    margin-top: 72px;
    >p {
      color: var(--carbon-black, #212121);
      font-size: 16px;
      font-weight: 400;
    }
  }
  .icon-sosmed {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
  }
  .right-container {
    display: flex;
  }
  .legal-contain {
    margin-left: 447px;
    >p:nth-child(1) {
      color: var(--carbon-black, #212121);
      font-size: 22px;
      font-weight: 700;
      margin: 0;
    }
    >p:nth-child(2), p:nth-child(3), p:nth-child(4), p:nth-child(5) {
      color: var(--wisteria-purple, #607D8B);
      font-size: 16px;
      font-weight: 400;
      margin-top: 20px;
    }
  }
  
  .sitemap-contain {
    margin-left: 169px;

    >p:nth-child(1){
      color: var(--carbon-black, #212121);
      font-size: 22px;
      font-weight: 700;
      margin: 0;
    }
    >p:nth-child(2), p:nth-child(3) {
      color: var(--wisteria-purple, #607D8B);
      font-size: 16px;
      font-weight: 400;
    }
  }
  .second-container {
    background-color: #ECEFF1;
    margin-top: 0;
    padding: 5px 114px;
    display: flex;
    justify-content: space-between;
  }
  .copyright-contain {
    margin: 0;

    >p{
      color: var(--wisteria-purple, #607D8B);
      font-size: 16px;
      font-weight: 400;
    }
  }
  .url-contain {

    >p {
      color: #607D8B;
      text-align: right;
      font-size: 16px;
      font-weight: 400;
      >span {
        
      }
    }
  }

  `
