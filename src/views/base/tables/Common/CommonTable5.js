 
import React, { lazy,useState,useEffect } from 'react'
import firebase from 'firebase'
import {db} from '../../../../firebase_config'
import { Button,Modal } from 'react-bootstrap';
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
} from '@coreui/react'


function CommonTable5({buyer,order_id,email,phone,booking_date,booking_time,total_fees,status,id}) {

      const [show, setShow] = useState(false);

      function cancelledOrder () {
            db.collection("allOrderList").doc(id).update({
                  "product_order.status":"refunded"
  
            })
            setShow(false);
      }

  const handleClose = () =>{
      setShow(false);
     

  } 
  const handleShow = () => setShow(true);


      
       
      return (

            <>



<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure ? </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button variant="secondary" onClick={handleClose}>
            No
          </Button> 
          
           <Button variant="primary" onClick={cancelledOrder}>
            Yes
          </Button>
         </Modal.Body>
       
      </Modal>
            
                  <tr>
                  <td className="text-center">
                      <strong> {buyer}</strong>
                    </td>
                    <td className="text-center">
                      <strong> {order_id}</strong>
                    </td>
                    <td className="text-center">
                      <strong>{email}</strong>
                    </td>
                  
                  
                   
                    <td className="text-center">
                      <strong>{phone}</strong>
                    </td>
                    <td>
                    <strong>{booking_date}</strong>
                    </td>
  
                    <td>
                    <strong>{booking_time}</strong>
                    </td>
  
                    <td>
                    <strong>{total_fees} $</strong>
                    </td>
                    <td>
                    <strong>{status}</strong>
                    </td>
                    <td>
                    <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
          

           <a className="btn btn-danger" style={{margin:"2px" , color:"white"}} onClick={handleShow}>
        Refunded
      </a>
        
         </CCol>
                    </td>

                
  
                   
                  </tr>

      </>

            
      )
}

export default CommonTable5
