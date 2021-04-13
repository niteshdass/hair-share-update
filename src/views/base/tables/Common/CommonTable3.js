 
import React, { lazy,useState,useEffect } from 'react'
import firebase from 'firebase'
import {db} from '../../../../firebase_config'
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


function CommonTable3({created_date,buyer,order_id,email,phone,booking_date,booking_time,total_fees,status,id}) {

       
      return (
            
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

            
      )
}

export default CommonTable3
