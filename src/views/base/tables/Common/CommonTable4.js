 
import React, { lazy,useState,useEffect } from 'react'
import firebase from 'firebase'
import {db} from '../../../../firebase_config'
import { Button,Modal } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

toast.configure()
function CommonTable4({buyer,order_id,email,phone,booking_date,booking_time,total_fees,status,id,payment_id}) {

      const [show, setShow] = useState(false);

      function cancelledOrder () {
       
            db.collection("allOrderList").doc(id).update({
                  "product_order.status":"refunded"
  
            })
            setShow(false);
            toast.info("Successfully refunded !", {

              autoClose: 4000
            });
           
      }

  const handleClose = () =>{
      setShow(false);
      
     

  } 
  const handleShow = () => setShow(true);


      
       
      return (

            <>


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure ! </Modal.Title>
        </Modal.Header>
        <Modal.Body> Do you want to refund the order? </Modal.Body>


          <Modal.Footer>
          
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>

          <Button variant="primary" onClick={cancelledOrder}>
            Yes
          </Button>
        </Modal.Footer>
       
      </Modal>
            
                  <tr>
                  <td className="text-center">
                      <strong> {buyer}</strong>
                    </td>
                    <td className="text-center">
                      <strong> {order_id}</strong>
                    </td>
                    <td className="text-center">
                      <strong> {payment_id}</strong>
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
          

           <a className="btn btn-info"  style={{margin:"5px" , color:"white"}} variant="danger" onClick={handleShow}>
        Refund
      </a>
        
         </CCol>
                    </td>

                
  
                   
                  </tr>

      </>

            
      )
}

export default CommonTable4
