// const KPI = ({ txt1, txt2, val1, val2 }) => {
//   const showSecond = txt2 && val2 != null;



//   return (
//     <div className="h-full">
//       <div className="bg-white h-full rounded-xl p-3 border border-gray-200">

//         <p>
//           <span className="text-gray-500 font-medium text-xs lg:text-sm">{txt1}</span>&nbsp;

//           {!showSecond && <br />}

//           <span className="font-bold text-xs lg:text-2xl">
//             {val1}
//           </span>
//         </p>

//         {showSecond && (
//           <p className="mt-1">
//             <span className="text-gray-500 font-medium text-xs lg:text-sm">{txt2}</span>
//             <span className="font-bold text-xs lg:text-2xl ml-1">{val2}</span>
//           </p>
//         )}

//       </div>
//     </div>
//   );
// };

// export default KPI;








"use client"
import { useEffect, useState } from "react";

const KPI = () => {


  const [totalLeads, setTotalLeads] = useState(null);
  const [ltotalLeads, setLTotalLeads] = useState(null);

  const [bestCompany, setBestCompany] = useState(null);
  const [bestProduct, setBestProduct] = useState(null);

  const [revenue, setRevenue] = useState(null);
  const [company, setCompany] = useState([]);


  const getKPIData = async () => {
    try {
      let [totalLeadsRes, ltotalLeadsRes, bestCompanyRes, bestProductRes, revenueRes, companyRes] = await Promise.allSettled([
        fetch("https://marketing-dashboard.integerstech.com/analyze/leads/current-month"),
        fetch("https://marketing-dashboard.integerstech.com/analyze/leads/previous-month"),
        fetch("https://marketing-dashboard.integerstech.com/analyze/leads/top-company/current-month"),
        fetch("https://marketing-dashboard.integerstech.com/analyze/leads/top-product/current-month"),
        fetch("https://marketing-dashboard.integerstech.com/analyze/leads/top-product/current-month"),  // revenue
        fetch("https://marketing-dashboard.integerstech.com/analyze/leads/industries/current-month"),
      ]);

      // console.log("totalLeadsRes", totalLeadsRes);
      // console.log("ltotalLeadsRes", ltotalLeadsRes);
      // console.log("bestCompanyRes", bestCompanyRes);
      // console.log("bestProductRes", bestProductRes);
      // console.log("revenueRes", revenueRes);
      // console.log("companyRes", companyRes);

      // 1
      if (totalLeadsRes.status === "fulfilled") {
        const totalLeadsData = await totalLeadsRes.value.json();
        // console.log("totalLeadsData", totalLeadsData);
        setTotalLeads(totalLeadsData?.total_leads ?? null);
      }
      else {
        console.log("bounceRate api failed...");
      }

      // 2
      if (ltotalLeadsRes.status === "fulfilled") {
        const ltotalLeadsData = await ltotalLeadsRes.value.json();
        // console.log("ltotalLeadsData", ltotalLeadsData);
        setLTotalLeads(ltotalLeadsData?.total_leads ?? null);
      }
      else {
        console.log("bounceRate api failed...");
      }

      // 3
      if (bestCompanyRes.status === "fulfilled") {
        const bestCompanyData = await bestCompanyRes.value.json();
        // console.log("bestCompanyData", bestCompanyData);
        setBestCompany(bestCompanyData?.company_account ?? null);
      }
      else {
        console.log("bounceRate api failed...");
      }

      // 4
      if (bestProductRes.status === "fulfilled") {
        const bestProductData = await bestProductRes.value.json();
        // console.log("bestProductData", bestProductData);
        setBestProduct(bestProductData?.product_of_interest ?? null);
      }
      else {
        console.log("bounceRate api failed...");
      }

      // 5
      if (revenueRes.status === "fulfilled") {
        const revenueData = await revenueRes.value.json();
        // console.log("revenueData", revenueData);
        setRevenue(revenueData?.product_of_interest ?? null);
      }
      else {
        console.log("bounceRate api failed...");
      }

      // 6
      if (companyRes.status === "fulfilled") {
        const companyData = await companyRes.value.json();
        // console.log("companyData", companyData);
        setCompany(companyData?.industries);
      }
      else {
        console.log("bounceRate api failed...");
      }

    }
    catch (err) {
      console.log("something went wrong...");
    }
  }

  useEffect(() => {
    getKPIData();
  }, []);



  // console.log("totalLeads", totalLeads);
  // console.log("ltotalLeads", ltotalLeads);
  // console.log("bestCompany", bestCompany);
  // console.log("bestProduct", bestProduct);
  // console.log("revenue", revenue);
  // console.log("company", company);


  return (
    <div className="grid grid-cols-5 gap-4 h-full">
      <div className="bg-white h-full rounded-xl p-3 border border-gray-200">
        {/* kpi1 */}
        <p>
          <span className="text-gray-500 font-medium text-xs lg:text-sm">Total Leads</span>&nbsp;
          <span className="font-bold text-xs lg:text-2xl">
            {totalLeads ?? "--"}
          </span>
        </p>
        <p className="mt-1">
          <span className="text-gray-500 font-medium text-xs lg:text-sm">Last month</span>
          <span className="font-bold text-xs lg:text-2xl ml-1">{ltotalLeads ?? "--"}</span>
        </p>
      </div>
      {/* kpi2 */}
      <div className="bg-white h-full rounded-xl p-3 border border-gray-200">
        <p>
          <span className="text-gray-500 font-medium text-xs lg:text-sm">Best Company</span>&nbsp;
          <br />
          <span className="font-bold text-xs lg:text-2xl">{bestCompany ?? "--"}</span>
        </p>
      </div>

      {/* kpi3 */}
      <div className="bg-white h-full rounded-xl p-3 border border-gray-200">
        <p>
          <span className="text-gray-500 font-medium text-xs lg:text-sm">Best Product</span>&nbsp;
          <br />
          <span className="font-bold text-xs lg:text-2xl">{bestProduct ?? "--"}</span>
        </p>
      </div>

      {/* kpi4 */}
      <div className="bg-white h-full rounded-xl p-3 border border-gray-200">
        <p>
          <span className="text-gray-500 font-medium text-xs lg:text-sm">Revenue Generated</span>&nbsp;
          <br />
          <span className="font-bold text-xs lg:text-2xl">{revenue ?? "--"} (d)</span>
        </p>
      </div>

      {/* kpi5 */}
      <div className="bg-white h-full rounded-xl border border-gray-200">
        <div className="h-full p-1 lg:p-3 flex justify-between bg-white rounded-xl">
          <div className=" flex flex-col justify-around bg-gray-100 rounded-lg px-1">
            <div className=" p-1 rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-[#ff6caf]"></div>
            <div className="text-[10px] lg:text-xl font-medium text-center">{company[0]?.lead_count ?? "--"}</div>
            {/* "Nutraceuticals" */}
          </div>
          <div className=" flex flex-col justify-around bg-gray-100 rounded-lg px-1">
            <div className=" p-1 rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-[#04c56b]"></div>
            <div className=" text-[10px] lg:text-xl  font-medium text-center">{company[1]?.lead_count ?? "--"}</div>
            {/* "Pharmaceuticals" */}
          </div>
          <div className=" flex flex-col justify-around bg-gray-100 rounded-lg px-1">
            <div className=" p-1 rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-[#00b6cc]"></div>
            <div className=" text-[10px] lg:text-xl  font-medium text-center">{company[2]?.lead_count ?? "--"}</div>
            {/* "Other" */}
          </div>
          <div className=" flex flex-col justify-around bg-gray-100 rounded-lg px-1">
            <div className=" p-1 rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-[#4b7bf5]"></div>
            <div className=" text-[10px] lg:text-xl  font-medium text-center">{company[3]?.lead_count ?? "--"}</div>
            {/* "Personal Care" */}
          </div>
          <div className=" flex flex-col justify-around bg-gray-100 rounded-lg px-1">
            <div className=" p-1 rounded-full h-4 w-4 lg:h-8 lg:w-8 bg-[#ffcc00]"></div>
            <div className=" text-[10px] lg:text-xl  font-medium text-center">{company[4]?.lead_count ?? "--"}</div>
            {/* "Food & Beverages" */}
          </div>
        </div>
      </div>

    </div>
    // </div >

  );
};

export default KPI;