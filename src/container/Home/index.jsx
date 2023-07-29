import Bgfront from "../../assets/images/bgfront.png"
import Menfront from "../../assets/images/menfront.png"
import ImgContentPiala from "../../assets/images/contentpiala.png"
import ImgSertifikat from "../../assets/icons/iconsertifikat.png"
import {ReactComponent as IconPembelajaran}from "../../assets/icons/iconpembelajaran.svg"
import {ReactComponent as IconGift} from "../../assets/icons/icongift.svg"
import {ReactComponent as IconGlobe} from "../../assets/icons/iconglobe.svg"
import {ReactComponent as IconHeadset} from "../../assets/icons/iconheadset.svg"
import {ReactComponent as IconCpu} from "../../assets/icons/iconcpu.svg"
import {ReactComponent as IconQuest} from "../../assets/icons/iconquest.svg"
import { styled } from "styled-components";
import { card } from "../../constant/Card";
import Footer from '../footer/Footer';
import Menu from "../Menu/menu";

function Home() {
  return (
    <AppStyle>
      <div className="navbar">
        <Menu/>       
      </div>
      <div className="body">
      <div className="header">
      <div className="header-contain">
      <p> DAFTAR <br/> Olimpiade Nasional</p>
      <p> Tingkat SMA/MA/SMK Sederajat <br/>Biologi, Kimia, Matematika, Ekonomi, Sejarah <br/> Bahasa Inggris</p>
      <button> Start for free</button>
      <img className="backgroundutama" src={Bgfront} alt="background"/>
      <img className="menbackground" src={Menfront} alt="menbg"/>
      </div>     
      </div>
      <div className="content">
      <img className="imgpiala" src={ImgContentPiala} alt="piala"/>
      <div className="subcontent">
      <p>Fitur</p>
      <p>Apa Yang Kami <br/>Tawarkan</p>
      <div className="sertifikat">
        <img className="imgsertifikat" src={ImgSertifikat} alt="sertifikat"/>       
        <div className="contentsertifikat">
        <p>Sertifikat</p>
        <p>Sebagai partisipan pelatihan online dan kompetisi Online, kami <br/>
         akan memberikan e sertifikat yang akan dikirimkan langsung ke <br/>
         alamat pemenang</p>
        </div>
      </div>
      <div className="pembelajaran">
        <IconPembelajaran/>       
        <div className="contentpembelajaran">
        <p>Pembelajaran</p>
        <p>Kami akan memberikan anda pengalaman baru dalam <br/> perlombaan dimana anda berlomba sambil belajar</p>
        </div>
      </div>
      <div className="hadiah">
        <IconGift/>       
        <div className="contentgift">
        <p>Pembelajaran</p>
        <p>Kami akan memberikan anda pengalaman baru dalam <br/> perlombaan dimana anda berlomba sambil belajar</p>
        </div>
      </div>
      </div> 
      </div>
      <div className="feature">
      <div className="title">
        <p>F E A T U R E S</p>
        <p>Apa Yang Kamu Dapat?</p>
      </div>
      <div className="contentfeature">
      <div className="firstlinefeature">
      <div className="firstfeature">
      <IconGlobe/>
      <p>Full Akses <br/><span>(Popularitas)</span></p>
      </div>
      <div className="contentfirstfeature">
      <p>Akses full untuk mengetahui apa saja <br/> perlombaan dan siapa saja yang menang</p>
      </div>
      <div className="secondfeature">
      <IconHeadset/>
      <p>Konsultasi<br/><span>(Layanan) </span></p>
      </div>
      <div className="contentsecondfeature">
      <p>Selain pelatihan siswa juga dapat konsultasi <br/> mengenai materi lingkup kelassik.id sesuai <br/> bidang setelah kegiatan pelatihan selesai.</p>
      </div>
      </div>
      <div className="secondlinefeature">
      <div className="firstfeature">
      <IconCpu/>
      <p>Pengetahuan Edukasi<br/><span>(Pendidikan) </span></p>
      </div>
      <div className="contentfirstfeature">
      <p>Kamu akan mendapatkan pengetahuan lebih <br/> dan terus belajar untuk menjadi yang terbaik</p>
      </div>
      <div className="firstfeature">
      <IconQuest/>
      <p>Soal<br/><span>(Quiz) </span></p>
      </div>
      <div className="contentfirstfeature">
      <p>kamu akan mendapatakan soal pelatihan yang <br/> dibuat langsung oleh tutor yang komputen </p>
      </div>
      </div>
      </div>   
      </div>
      <div className="historylomba">
        <p> COBAIN PENGALAMAN LOMBA <br/> YANG BERBEDA</p>
        <p> Lihat dan rasakan pengalaman itu pada layanan kami <br/> dan banyak hadiah menarik disini</p>
      </div>
      <div className="historycard">
      <div className="grid-container">
        {card.map((value) => (
          <div className="grid-item" key={value.id}>{<img src="/images/imgcardhome.png" alt="imgcard"/>} <div className="title-name">{value.label} <p><br/> {value.labelContent}</p></div></div>
        ))}
      </div>
      </div>
      <div className="footer"></div>
      <Footer/>
      </div>
    </AppStyle>
  );
}

export default Home;

const AppStyle = styled.div`
  .header {
    padding: 38px 114px;
  }
  .header-contain {
  padding: 76px 99px;
  position: relative;
  > img.backgroundutama {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
  > img.menbackground {
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
  }
  > p:nth-child(1) {
    margin: 0;
    color: var(--meteoroid-purple, #455A64);
    font-size: 33.884px;
    font-weight: 700;
  }
  > p:nth-child(2) {
    margin-top: 43px;
    color: var(--meteoroid-purple, #455A64);
    font-size: 18.824px;
    font-weight: 400;
  }
  > button {
    padding: 13.177px 28px;
    align-items: center;
    gap: 5px;
    border-radius: 8px;
    border: none;
    margin-top: 28px;
    background: var(--orange, #F2994A);
    color: var(--pure-white, #FFF);
    font-size: 20.707px;
    font-weight: 400;
  }
  }
  .content {
    display: flex;
    padding: 10px;
    padding: 38px 114px;
   
  > img.imgpiala {
    margin-top: 91px;
    margin-left: 80px;
  }
  .subcontent {
    margin-top: 81px;
    margin-left: 33px;
  > p:nth-child(1) {
    color: var(--dusty-gray, #B0BEC5);
    font-size: 24px;
    font-weight: 400;
    margin: 0;
  }
  > p:nth-child(2){
    color: var(--meteoroid-purple, #455A64);
    font-size: 36px;
    font-weight: 700;
    margin: 0;
  }
  .sertifikat {
    display: flex;
    gap: 20px;
    

    > img.imgsertifikat {
      background-color: #D1FDFF;
      padding: 5px;
      border-radius: 10px;
      width: 54px;
      height: 54px;
      margin-top: 5px;
    }
  }
  .contentsertifikat {
    
    > p:nth-child(1){
      margin: 0;
      color: var(--meteoroid-purple, #455A64);
      font-size: 22px;
      font-weight: 700;
    }
    > p:nth-child(2) {
      margin: 0;
      color: var(--wisteria-purple, #607D8B);
      font-size: 16px;
      font-weight: 400;
    }
  }
  }
  .pembelajaran {
    display: flex;
    gap: 20px;
    margin-top: 6px;

    > svg {
      background-color: #D1FDFF;
      padding: 5px;
      border-radius: 10px;
      width: 54px;
      height: 54px;
      margin-top: 5px;
    }
  }
  .contentpembelajaran {

    > p:nth-child(1){
      margin: 0;
      color: var(--meteoroid-purple, #455A64);
      font-size: 22px;
      font-weight: 700;
    }
    > p:nth-child(2) {
      margin: 0;
      color: var(--wisteria-purple, #607D8B);
      font-size: 16px;
      font-weight: 400;
    }
  }
  .hadiah {
    display: flex;
    gap: 20px;
    margin-top: 6px;

    > svg {
      background-color: #D1FDFF;
      padding: 5px;
      border-radius: 10px;
      width: 54px;
      height: 54px;
      margin-top: 35px;
    }
  }
  .contentgift {
    margin-top: 30px;

    > p:nth-child(1){
      margin: 0;
      color: var(--meteoroid-purple, #455A64);
      font-size: 22px;
      font-weight: 700;
    }
    > p:nth-child(2) {
      margin: 0;
      color: var(--wisteria-purple, #607D8B);
      font-size: 16px;
      font-weight: 400;
    }
  }
  }
  .feature {
    height: 535px;
    background-color: #F8F8F8;
    padding: 31px;
    margin-top: 89px;
  }
  .contentfeature {
    display: flex;
    justify-content: space-between;
    gap: 100px;
  }
  .title {
   
    > p:nth-child(1){
    color: var(--silver-gray, #90A4AE);
    text-align: center;
    font-size: 13px;
    margin-top: 31px;
    font-weight: 400;
    margin: 0;
    }
    >p:nth-child(2){
    color: var(--meteoroid-purple, #455A64);
    text-align: center;
    font-size: 36px;
    font-weight: 700;
    margin-top: 5px;
    }
  }
  .firstlinefeature {
    margin-left: 150px;
  }
  .firstfeature {
    display: flex;
    margin-top: 60px;

    >svg {
      margin-right: 10px;
    }

    >p {
      margin: 0;
      font-size: 18px;
      font-weight: 400;
      color: #455A64;

      span {
        color: #90A4AE;
        font-size: 16px;
        
      }
    }
  }
  .contentfirstfeature {
    margin-top: 5px;
    >p {
      margin: 0;
      color: var(--wisteria-purple, #607D8B);
      font-size: 16px;
      font-weight: 400;
    }
  }

  .secondfeature {
    display: flex;
    margin-top: 60px;

    >svg {
      margin-right: 10px;
    }

    >p {
      margin: 0;
      font-size: 18px;
      font-weight: 400;
      color: #455A64;

      span {
        color: #90A4AE;
        font-size: 16px;
        
      }
    }
  }
  .contentsecondfeature {
    margin-top: 5px;
    >p {
      margin: 0;
      color: var(--wisteria-purple, #607D8B);
      font-size: 16px;
      font-weight: 400;
    }
  }

  .secondlinefeature {
    margin-right: 150px;

  }
  .secondfeature {
    display: flex;
    margin-top: 60px;



    >p {
      margin: 0;
      font-size: 18px;
      font-weight: 400;
      color: #455A64;

      span {
        color: #90A4AE;
        font-size: 16px;
        
      }
    }
  }
  .contentsecondfeature {
    margin-top: 5px;
    >p {
      margin: 0;
      color: var(--wisteria-purple, #607D8B);
      font-size: 16px;
      font-weight: 400;
    }
  }
  .historylomba {
    margin-top: 100px;
    

    > p:nth-child(1) {
      color: var(--meteoroid-purple, #455A64);
      text-align: center;
      font-size: 36px;
      font-weight: 700;
      margin: 0;
    }

    > p:nth-child(2) {
      color: var(--dusty-gray, #B0BEC5);
      text-align: center;
      font-size: 20px;
      font-weight: 400;
      margin: 0;
    }
  }

  .grid-container {
    padding: 38px 114px;
    display: grid;
    grid-template-columns: auto auto auto;
   
    

    .grid-item {
      border-radius: 12px;
      border: 1px solid var(--gray-5, #E0E0E0);
      margin: 10px;
      padding: 10px;
      margin-top: 60px;

      >label {
          color: #000;
          font-size: 24px;
          font-weight: 800;
        }
    }
  }
  .title-name {
    color: #000;
    font-size: 24px;
    font-weight: 800;
    margin-top: 5px;

    >p {
      color: #000;
      font-size: 12px;
      font-weight: 400;
      margin: 0;
    }
  }
`;
