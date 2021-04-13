import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const TheHeaderDropdown = () => {

  const clickSubmit = (e) =>{
    localStorage.removeItem("email");
    window.location.reload();
  
  }

  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src="https://cdn.onlinewebfonts.com/svg/img_520583.png"
            className="c-avatar-img"
            alt="hair-share@gmail.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
         
         
        
        
        
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          <button className="btn " onClick={clickSubmit} >Logout</button>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
