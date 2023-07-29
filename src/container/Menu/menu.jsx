import { ReactComponent as DropDown }  from "../../assets/icons/bxs_down-arrow.svg"
import { menu } from "../../constant/menus";
import { ReactComponent as Logoolympiade } from "../../assets/images/logoolympiade.svg";
import { styled } from "styled-components";



function Menu() {
return (
    <Appstyle>
    <div className="navbar">
        <div className="logo">
          <Logoolympiade />
          <p>OLIMPIADE <span>KELASSIK</span></p>
        </div>

        <div className="menu">
        {menu.map((value)=> (
          <button key={value.id}>{value.label} {!!value.dropdown && <DropDown/> }</button>
        ))}
        </div>       
      </div>

    </Appstyle>

);
}

export default Menu;
const Appstyle = styled.div `
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 38px 114px;
    .logo {
      display: flex;
      align-items: center;
      gap: 5px;
      > p {
        color: #212121;
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        margin: 0;
        span {
          color: #F4A93F;
        }
      }
      > svg {

      }
    }
  }
  .menu {
    display: flex;
    gap: 40px;
    button{
      display: flex;
      gap: 3px;
      align-items: center;
      height: fit-content;
      border: none;
      background-color: transparent;
      > svg {

      }
    }
  }
`

