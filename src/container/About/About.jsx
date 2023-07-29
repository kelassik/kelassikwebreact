import React from "react";
import { styled } from "styled-components";
import ImgArticle from "../../assets/images/imgarticle.png";
import { ReactComponent as IconGlobe } from "../../assets/icons/iconglobe.svg";
import { ReactComponent as IconHeadset } from "../../assets/icons/iconheadset.svg";
import { ReactComponent as IconCpu } from "../../assets/icons/iconcpu.svg";
import { ReactComponent as IconQuest } from "../../assets/icons/iconquest.svg";
import Footer from "../footer/Footer";
import Menu from "../Menu/menu";

function About() {
  return (
    <Appstyle>
      <div className="menu">
      <Menu/>
      </div>
      <div className="content">
        <div className="first-contain">
          <div className="right-contain">
            <p>Artikel</p>
            <p>
              OLIMPIADE <span> KELASSIK </span>
            </p>
            <p>
              Olimpiade kelassik adalah event program perlombaan <br />
              yang dimana dimulai dari SD, SMP, SMA dan diselenggarakan <br />
              serentak, terbuka dan secara online.
            </p>
            <p>Tujuan Kegiatan </p>
            <p>
              Tujuan kegiatan kelassik adalah, menjadi pra-sarana <br /> bagi
              siswa/siswi untuk mengembangkan potensi dalam <br /> diri mereka.
            </p>
          </div>
          <div className="left-contain">
            <img className="imgarticle" src={ImgArticle} alt="article-top" />
          </div>
        </div>
        <div className="second-contain">
          <div className="firstlinefeature">
            <div className="firstfeature">
              <IconGlobe />
              <p>
                Pengetahuan <br />
                <span>Wadah penyaluran bakat</span>
              </p>
            </div>
            <div className="contentfirstfeature">
              <p>
              Sebagai wadah penyalur minat dan bakat serta <br/> hobi para siswa/i dibidang pendidikan
              </p>
            </div>
            <div className="secondfeature">
              <IconHeadset />
              <p>
              Percaya Diri
                <br />
                <span> </span>
              </p>
            </div>
            <div className="contentsecondfeature">
              <p>
              Meningkatkan kreativitas dan percaya diri serta <br/> membantu sistem motorik anak bekerja dengan <br/> baik
              </p>
            </div>
          </div>
          <div className="secondlinefeature">
            <div className="firstfeature">
              <IconCpu />
              <p>
                Kreativitas
                <br />
                <span>Wadah Kreativitas </span>
              </p>
            </div>
            <div className="contentfirstfeature">
              <p>
              Meningkatkan kreativitas dan menunjang <br/> prestasi siswa/i
              </p>
            </div>
            <div className="firstfeature">
              <IconQuest />
              <p>
              Prestasi
                <br />
                <span> </span>
              </p>
            </div>
            <div className="contentfirstfeature">
              <p>
              Peningkatan prestasi sejak dini dan meningkat <br/> karakter menjadi lebih baik
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </Appstyle>
  );
}

export default About;

const Appstyle = styled.div`
  .content {
    padding: 99px 150px;

    .first-contain {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    .right-contain {
      > p:nth-child(1) {
        color: var(--meteoroid-purple, #455a64);
        font-size: 48px;
        font-weight: 700;
        margin: 0;
      }
      > p:nth-child(2) {
        color: #212121;
        font-size: 48px;
        font-weight: 700;
        margin: 0;

        > span {
          color: #f4a93f;
        }
      }
      > p:nth-child(3) {
        color: var(--gray-2, #4f4f4f);
        font-size: 20px;
        font-weight: 400;
        margin: 0;
        margin-top: 30px;
      }
      > p:nth-child(4) {
        color: var(--carbon-black, #212121);
        font-size: 48px;
        font-weight: 700;
        margin: 0;
        margin-top: 65px;
      }
      > p {
        color: var(--gray-2, #4f4f4f);
        font-size: 20px;
        font-weight: 400;
        margin: 0;
        margin-top: 30px;
      }
    }
  }
  .second-contain {
    display: flex;
    gap: 60px;
  }
  .firstfeature {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
    margin-top: 50px;

    >p{

        >span {
            color: var(--orange, #F2994A);
            font-size: 16px;
            font-weight: 400;
        }
    }
  }
  .secondfeature {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
    margin-top: 50px;
  }
  .contentfirstfeature {
    
    >p {
        margin: 0;
    }
  }
`;
