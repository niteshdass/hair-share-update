import React, { lazy,useState,useEffect } from 'react'
import firebase from 'firebase'
import {db} from '../../../firebase_config'
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
import { DocsLink } from 'src/reusable'

 
import CommonTable4 from './Common/CommonTable4'

 

const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}
const fields = ['name','registered', 'role', 'status']

const Tables4 = () => {


  const [newOrder, setNewOrder] = useState([])
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
 

  useEffect(() => {
   
    getNewOrder()
  }, [])


   const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

      const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(newOrder);
    else {
      const filteredData = newOrder.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      console.log("filterdata", filteredData)
      setData(filteredData);
    }
  }



  function getNewOrder (){

   

    db.collection("allOrderList").where('product_order.status', '==', "cancelled").orderBy("product_order.booking_date").onSnapshot(function(querySnapshot){
      setNewOrder(
        querySnapshot.docs.map((doc) =>({
          id:doc.id,
          status:doc.data().product_order.status,
          booking_date:doc.data().product_order.booking_date,
          booking_time:doc.data().product_order.booking_time,
          buyer:doc.data().product_order.buyer,
          email:doc.data().product_order.email,
          phone:doc.data().product_order.phone,
          total_fees:doc.data().product_order.total_fees,
          payment_id:doc.data().stripePaymentId,
          order_id:doc.data().orderID,
          created_date:doc.data().created_at
          

       
      
      
        }))
      )
    })
  
    
 

  }




  return (
    <>
    <CRow>
      <CCol>
       
      
      
      
      
      
        <CCard>
        
        <CCardBody>
          
        
        <div class="row">

          <div className="col-md-12  "  >
            
                                    <div className="row">
                    <div className="col-md-8" style={{marginBottom:"10px"}}>
                               <h4>Refundable Bookings</h4>
                    </div>
                    <div className="col-md-4">
                      <input type="text" class="form-control" value={searchText} onChange={e => handleChange(e.target.value)} placeholder="Search" />

                    </div>


                  </div>
          

            <table > 
            <thead className="thead-light">
              
              <tr>
                 
                
                <th>Buyer</th>
                <th>Order Id</th>
                <th className="text-center">Payment Id</th>
               
                <th className="text-center">Booking Date</th>
                <th className="text-center">Booking 
                Time</th>
                <th className="text-center">Total-Fee</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
                
              </tr>


            </thead>
            <tbody>

                      {
                        searchText === "" ?
      newOrder.map((item) =>(
        <CommonTable4 key={item.id}
          buyer={item.buyer}
          payment_id={item.payment_id}
          email={item.email}
          phone={item.phone}
          booking_date={item.booking_date}
          booking_time={item.booking_time}
          total_fees={item.total_fees}
          status={item.status}
          id={item.id}
          order_id={item.order_id}
          created_date={item.created_date}


        />
      )):data.map((item) =>(
        <CommonTable4 key={item.id}
          buyer={item.buyer}
          payment_id={item.payment_id}
          email={item.email}
          phone={item.phone}
          booking_date={item.booking_date}
          booking_time={item.booking_time}
          total_fees={item.total_fees}
          status={item.status}
          id={item.id}
          order_id={item.order_id}
          created_date={item.created_date}


        />
      ))
    }
             
             
      
               
      
            </tbody>
          </table>
  
                      {
                    data.length === 0 && searchText !== "" ? <h3 style={{ textAlign: "center", color: "red", marginLeft: "2%", marginTop: "10%" }}>Data Not Found</h3> : ""
                  }
       
          </div>
         

        
       </div>
       
        </CCardBody>


        
      </CCard>
      
      
      
      
      
      </CCol>
    </CRow>
  </>
  )
}

export default Tables4
