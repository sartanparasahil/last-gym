import "../../styles/Main.css";
import hello from "../../assets/hello.svg";
import Chart from "../../components/Chart";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashborad = () => {
  const [mydata, setMydata] = useState()
  const [myproduct, setMyproduct] = useState()
  const [myitem, setMyitem] = useState([])
  const [totalsales, setTotalsales] = useState()
  console.log("totalsales is", totalsales)

  const { userData, token, isAuth, AdminIsAuth } = useSelector((store) => store.auth);
  // const { details } = userData
  console.log("dashboard", userData)


  useEffect(() => {
    axios.get("http://localhost:8080/user")
      .then((r) => {
        setMydata(r.data)
      })
  }, [])
  useEffect(() => {
    axios.get("http://localhost:8080/products")
      .then((r) => {
        setMyproduct(r.data)
      })
  }, [])
  useEffect(() => {
    axios.get("http://localhost:8080/payment/list-order")
      .then((r) => {
        setMyitem(r.data)
      })
  }, [])



  // useEffect(() => {
  //   setMyitem(userData.purchase)
  // }, [])
  const { data, loading, error } = useSelector((store) => store.product);

  const { data: adminData } = useSelector((store) => store.admin);


  let pending_sales = 0
  let cart = adminData.carts.map((el) => el.cart)
    .flat().forEach((el) => pending_sales += +el.price)


  let sales_revenue = 0
  let purchase = adminData.carts.map((el) => el.purchase)
    .flat().forEach((el) => sales_revenue += +el.price)



  console.log(pending_sales.toFixed(1), sales_revenue)


  //adminData.carts.map((el) => el.cartData.map((x) => Income += +x.price));

  // const allProducts = Array.isArray(data) && data.length




  // console.log("purchase",userData.purchase)


  // let PendingPurchase = 0;
  // adminData.carts.map((el) => PendingPurchase += +el.cart.length)

  // let TotalNumberOfSales = 0;
  // adminData.carts.map((el) => TotalNumberOfSales += +el.purchase.length)

  // console.log(PendingPurchase, TotalNumberOfSales);
  // console.log(myitem)

  useEffect(() => {
    const totalsale = myitem.reduce((acc, ele) => {
      if (ele.isPaid) {
        let { amount } = ele
        return acc = acc + Number(ele.amount);
      }
    }, 0)
    setTotalsales(totalsale)
  }, [myitem])


  return (
    <HStack zIndex={50} maxW="1200px" >
      <Box alignSelf={"center"} className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <HStack className="main__title" >
          <img src={hello} alt="hello" />
          <div style={{ textAlign: "start" }} className="main__greeting">
            <h1 >Hello Chief</h1>
            <p >Welcome To Your Admin Dashboard</p>
          </div>
        </HStack>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">

            <div className="card_inner">
              <p className="text-primary-p">Number of Users</p>
              <span className="font-bold text-title">
                {/* {adminData.users.length} */}
                {mydata ? mydata.length : 0}
              </span>
            </div>
          </div>

          <div className="card">

            <div className="card_inner">
              <p className="text-primary-p">Number of Products</p>
              <span className="font-bold text-title">{myproduct ? myproduct.length : 0}</span>
            </div>
          </div>

          <div className="card">

            <div className="card_inner">
              <p className="text-primary-p">Number of Purchase</p>
              <span className="font-bold text-title">
                {myitem ? myitem.length : 0}
              </span>
            </div>
          </div>

          <div className="card">

            <div className="card_inner">
              <p className="text-primary-p"> Total Sales </p>
              <span className="font-bold text-title " style={{ fontSize: '20px' }}>₹{totalsales ? totalsales : 0}</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Surat, India</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Stats Reports</h1>
                <p>Surat, India</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Revenue </h1>
                <p>₹ {totalsales ? totalsales / 5 : 0}</p>
              </div>


              <div className="card2">
                <h1>Sales</h1>
                <p>₹{totalsales ? totalsales : 0}</p>
              </div>
             
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </Box>
    </HStack>
  );
};

export default Dashborad;