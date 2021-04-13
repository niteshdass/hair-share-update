import React, { lazy,useState,useEffect } from 'react'
import firebase from 'firebase'

import { db } from '../../../firebase_config'


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

 import { Button,Modal } from 'react-bootstrap';
import CommonTable7 from './Common/CommonTable7'

 

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

const Tables7 = () => {


  const [newOrder,setNewOrder] = useState([])
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
    const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

let myData = []




  useEffect(() => {
   
    getNewOrder()
  }, [])

 const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  console.log(searchText)

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


  


  const  getNewOrder = async () => {

//    firebase.database().ref("wallet").get().then(function(snapshot) {
//   if (snapshot.exists()) {
    
//     // if (snapshot.val().payoutRequest != null) {
//     //   setNewOrder(snapshot.val())
//     //   console.log(snapshot.val());
//     // }

//     setNewOrder(snapshot.val())

//     myData.push(snapshot.val())

//     console.log(snapshot.val().getResult());
    
//   }
//   else {
//     console.log("No data available");
//   }
// }).catch(function(error) {
//   console.error(error);
// });

    
   var leadsRef =firebase.database().ref('wallet');
    leadsRef.on('value', function (snapshot) {
  
      let myTransArray = []

    snapshot.forEach( function(childSnapshot) {
      var childData = childSnapshot.val();

      

      if (childData.payoutRequest != null) {
        console.log(childData)

        let trans = childData.transaction

        let transArray = trans.split("##")

        myTransArray.push(transArray)

        console.log(transArray)

      }

     


    });
      
       setNewOrder(myTransArray)
});
    
    



//  const tokenRef = db.collection("wallet").doc("barberWallet");
//         const doc = await tokenRef.get();
    
//     console.log("balet",doc.data().transactions)
    
//            setNewOrder(
//               doc.data().transactions.map((doc) =>({
//                 doc
            
//               }))
//             )
    
//     doc.data().transactions.map( item => setNewOrder(item))

  

  }

  if (myData.length > 0) {
    console.log("mydata",myData)
  }

 console.log("mydata",newOrder)
 
const handleShow1 = () =>{

  setShow1(true);
}
const handleShow2 = () =>{

  setShow2(true);
}

  
  const handleClose1 = () =>{
  setShow1(false);
 
} 

const handleClose2 = () =>{
  setShow2(false);
 
} 


  return (
    <>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure ! </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <strong>Do you want to cancel the order?</strong>  
        
         </Modal.Body>


          <Modal.Footer>
          
          <Button variant="secondary" onClick={handleClose1}>
            No
          </Button>
          <Button variant="primary" >
            Yes
          </Button>
        </Modal.Footer>
       
      </Modal>
            
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure ! </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <strong>This order is complete?</strong>  
        
         </Modal.Body>


          <Modal.Footer>
         
          <Button variant="secondary" onClick={handleClose2}>
            No
          </Button>
          <Button variant="primary">
            Yes
          </Button>
        </Modal.Footer>
       
      </Modal> 

    <CRow>
      <CCol>
       
      
      
      
      
      
        <CCard>
        
            <CCardBody>
              
              
      
        
        <div class="row">

          <div className="col-md-12  "  >
                 
                  
                    <div className="row">
                    <div className="col-md-8" style={{marginBottom:"10px"}}>
                       <h4>Order Request</h4>
                    </div>
                    <div className="col-md-4">
                      <input type="text" class="form-control" value={searchText} onChange={e => handleChange(e.target.value)} placeholder="Search" />

                    </div>


                  </div>
          

            <table  >
            <thead  >
              
              <tr>
                 
                
           
                <th className="text-center">account</th>
                <th>amount</th>
                <th className="text-center">currency</th>
                <th className="text-center"> 
                          Date</th>
                        <th className="text-center"> 
                Time</th>
               
        
                        <th className="text-center">status</th>
                        <th className="text-center">action</th>
              
              </tr>


            </thead>
            <tbody>

                      
                      {newOrder.map(item => (
                     <tr>
                      <td className="text-center">
                            <strong>{ item[4]}</strong>
                        </td>
                        <td className="text-center">
                            <strong>{ item[3]}</strong>
                        </td>
                         <td className="text-center">
                          <strong> { item[5]}</strong>
                        </td>
                         <td className="text-center">
                          <strong> { item[2]}</strong>
                        </td>
                         <td className="text-center">
                          <strong> { item[1]}</strong>
                        </td>
                         <td className="text-center">
                          <strong> { item[0]}</strong>
                          </td>
                           <td className="text-center">
                                             <CCol col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
                    <a className="btn btn-danger" style={{margin:"1px" , color:"white",width:"85px"}}   >
             
         Cancel
           </a>


           <a className="btn btn-success" style={{margin:"1px" , color:"white"}} >Complete</a>
         </CCol>
                      </td>
                  </tr> 
                        
                  ))}
                     
                       
      
                      
             {/* <CommonTable7/> */}
      
               
      
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

export default Tables7
