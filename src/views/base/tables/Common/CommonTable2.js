 
import React, { lazy,useState,useEffect } from 'react'
import firebase from 'firebase'
import "../../../../App.css"
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


function CommonTable2({created_date,buyer,order_id,email,phone,booking_date,booking_time,total_fees,status,id}) {

      const [show, setShow] = useState(false);
      const handleClose = () =>{
            myFunction()
            setShow(false);
           
      
        } 
        const handleShow = () => setShow(true);

      function cancelledOrder () {
            db.collection("allOrderList").doc(id).update({
                  "product_order.status":"refundable"
  
            })

            setShow(false);
            myFunction1()
      }
 

      function acceptedOrder(){
            db.collection("allOrderList").doc(id).update({
                  "product_order.status":"accepted"
  
            }) 
      }
      function refundedOrder(){
            db.collection("allOrderList").doc(id).update({
                  "product_order.status":"refunded"
  
            }) 
      }


      function myFunction() {
            var x = document.getElementById("snackbar");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }

          function myFunction1() {
            var x = document.getElementById("snackbar1");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
          }


      return (
            

            <>

<div id="snackbar">The Order has not cancele!</div>
<div id="snackbar1">The Order is successfully Cancele and add to Refundable Table</div>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure ? </Modal.Title>
        </Modal.Header>
        <Modal.Body> Cancele this Order </Modal.Body>


          <Modal.Footer>
          <Button variant="secondary" onClick={cancelledOrder}>
            Yes
          </Button>
          <Button variant="primary" onClick={handleClose}>
            No
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
                      <strong>{new Date(created_date).toLocaleString()}</strong>
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
                   
                  </tr>

                  </>

            
      )
}

export default CommonTable2
