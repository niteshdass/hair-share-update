import React, { lazy,useState,useEffect } from 'react'
import firebase from 'firebase'
import {db} from '../../firebase_config'
import {
  CWidgetDropdown,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'

const WidgetsDropdown = () => {


   
  const [barbers,setBarbers] = useState([])
  const [user,setUser] = useState([])
  const [order,setOrder] = useState([])
   
  const [newOrder,setNewOrder] = useState([])
 

  useEffect(() => {
    getUser()
    getBarber()
    getOrder()
    getNewOrder()
 
  }, [])
  // render

  function getBarber (){


   

    db.collection("barbers").onSnapshot(function(querySnapshot){
      setBarbers(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
      
        }))
      )
    })
    console.log(barbers)

  }

  function getUser (){


   

    db.collection("users").onSnapshot(function(querySnapshot){
      setUser(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
      
        }))
      )
    })
    console.log(barbers)

  }

  function getOrder (){


   

    db.collection("allOrderList").onSnapshot(function(querySnapshot){
      setOrder(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
      
        }))
      )
    })
     

  }

  function getNewOrder (){


   

    db.collection("allOrderList").where('product_order.status', '==', "waiting").onSnapshot(function(querySnapshot){
      setNewOrder(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
          
       
      
      
        }))
      )
    })
     

  }



  const noUser = user.length
  const noBarbar = barbers.length
  const orderno = order.length
  const neworderno = newOrder.length


  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-primary"
          header={noUser}
          text="Total User"
        
        >
        
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-info"
          header={noBarbar}
          text="Total Barber"
         
        >
          
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-warning"
          header={orderno}
          text="Total Booking"
           
        >
          
        </CWidgetDropdown>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetDropdown
          color="gradient-danger"
          header={neworderno}
          text="New Booking"
        
        >
          
        </CWidgetDropdown>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
