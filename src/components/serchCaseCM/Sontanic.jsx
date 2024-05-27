import React from 'react'
import { GoArrowLeft } from "react-icons/go";

const Sontanic = () => {
    return (
        <div className=' p-10 bg-[#FAF8F5]'>
            <div className=' flex gap-1 ml-8'>
                <GoArrowLeft className=' mt-1 w-10 h-6' />
                <p className='font-semibold text-xl mb-4'>Sontanic Engine Lub Vehicles</p>
            </div>
            <div className="overflow-x-auto px-10 py-2 mt-4">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className=" px-4 py-2 text-left bg-gray-200">Case Details</th>
                            <th className=" px-4 py-2 text-left bg-gray-200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-200 font-medium bg-white px-4 py-2 w-[50%]">Partner</td>
                            <td className="border border-gray-200 bg-white px-4 py-2">
                                <select className="block w-full font-semibold bg-white border border-gray-300 rounded-md focus:outline-none border-none">
                                    <option>ashv</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 font-medium bg-white py-2">Case Name</td>
                            <td className="border border-gray-200 px-4 font-semibold bg-white py-2">Sontanic Engine Lub Vehicles</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 font-medium px-4 bg-white py-2">Case ID</td>
                            <td className="border border-gray-200 font-semibold px-4 bg-white py-2">ABCH6543988</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 font-medium px-4 bg-white py-2">Allocation Date</td>
                            <td className="border border-gray-200 font-semibold px-4 bg-white py-2">20/5/2024</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 font-medium px-4 bg-white py-2">Month</td>
                            <td className="border border-gray-200 font-semibold px-4 bg-white py-2">May</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto px-10 py-8">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className=" px-4 py-2 text-left bg-gray-200">Loan Details</th>
                            <th className=" px-4 py-2 text-left bg-gray-200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-200 font-medium bg-white px-4 py-2 w-[50%]">Product</td>
                            <td className="border border-gray-200 bg-white px-4 py-2">
                                <select className="block w-full bg-white border border-gray-300 rounded-md focus:outline-none border-none">
                                    <option>Select Product</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 font-medium bg-white py-2">Loan Amount (in Rs)</td>
                            <td className="border border-gray-200 px-4 py-2 bg-white">Enter Loan Amount</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 bg-white font-medium py-2">Tenure</td>
                            <td className="border border-gray-200 px-4 bg-white py-2">Enter Tenure</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 bg-white font-medium py-2">ROI</td>
                            <td className="border border-gray-200 px-4 bg-white py-2">Enter ROI</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto px-10 py-2">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className=" px-4 py-2 text-left bg-gray-200">Business Details</th>
                            <th className=" px-4 py-2 text-left bg-gray-200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-200 px-4 py-2 bg-white w-[50%] font-medium">Location</td>
                            <td className="border border-gray-200 px-4 py-2 bg-white ">Enter Location</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 py-2 bg-white font-medium">State</td>
                            <td className="border border-gray-200 px-4 bg-white py-2">Enter State</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 bg-white py-2 font-medium">Constitution</td>
                            <td className="border border-gray-200 px-4 bg-white py-2">Enter Constitution</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 bg-white py-2 font-medium">Nature of Business</td>
                            <td className="border border-gray-200 px-4 bg-white py-2">
                                <select className="block w-full bg-white border border-gray-300 rounded-md focus:outline-none border-none">
                                    <option>Select Nature of Business</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 py-2 bg-white font-medium">Industry Type</td>
                            <td className="border border-gray-200 bg-white px-4 py-2">
                                <select className="block w-full bg-white border border-gray-300 rounded-md focus:outline-none border-none">
                                    <option>Select Industry Type</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 py-2 bg-white font-medium">IT</td>
                            <td className="border border-gray-200 bg-white px-4 py-2">
                                <select className="block w-full bg-white border border-gray-300 rounded-md focus:outline-none border-none">
                                    <option>Select IT </option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 py-2 bg-white font-medium">Business Vintage (months)</td>
                            <td className="border border-gray-200 bg-white px-4 py-2">
                                <select className="block w-full bg-white border border-gray-300 rounded-md focus:outline-none border-none">
                                    <option>Select Business Vintage</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 py-2 bg-white font-medium">MSME Classification</td>
                            <td className="border border-gray-200 bg-white px-4 py-2">
                                <select className="block w-full bg-white border border-gray-300 rounded-md focus:outline-none border-none">
                                    <option>Select MSME Classification</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 py-2 bg-white font-medium">Turnover (in Lakhs)</td>
                            <td className="border border-gray-200 px-4 bg-white py-2">Enter Turnover (In Lakhs)</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 bg-white py-2 font-medium">CIBl Score (prop)</td>
                            <td className="border border-gray-200 px-4 bg-white py-2">Enter CIBIL Score</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 bg-white py-2 font-medium">GSTIN</td>
                            <td className="border border-gray-200 px-4 bg-white py-2">Enter GSTIN</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 bg-white py-2 font-medium">PAN NO</td>
                            <td className="border border-gray-200 px-4 bg-white py-2">Enter PAN Number</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto px-10 py-8">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className=" px-4 py-2 text-left bg-gray-200">Your Decision</th>
                            <th className=" px-4 py-2 text-left bg-gray-200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-200 px-4 bg-white py-2 w-[50%] font-medium">Query Reasons</td>
                            <td className="border border-gray-200 px-4 bg-white py-2 font-semibold">Enter Query Reason, Lorem ipsum dummy text for rejection reason. This field contains maximum characters. Three lines are the character limit and hieght is double the above single rows. Gqwe hgchgy jcwhucgugug. jbwcjbjujghh ujgcjgjg hvbcjhbjgbjg ujgcvjhkjs yhfsygu jgcjgh.</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 py-8 bg-white font-medium">Rejection Reasons</td>
                            <td className="border border-gray-200 px-4 py-2 bg-white">Enter Rejection Reason</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 px-4 py-2 bg-white font-medium">Credit Manager Name</td>
                            <td className="border border-gray-200 bg-white px-4 py-2">
                                <select className="block w-full bg-white border border-gray-300 rounded-md focus:outline-none border-none">
                                    <option>Select Rejection Sub Category</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="overflow-x-auto px-10 py-2">
                <table className="min-w-full border-collapse border border-gray-200">
                    <thead>
                        <tr>
                            <th className=" px-4 py-2 text-left bg-gray-200">Credit Manager Details</th>
                            <th className=" px-4 py-2 text-left bg-gray-200"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-200 bg-white px-4 py-2 w-[50%] font-medium">Credit Manager Name</td>
                            <td className="border border-gray-200 bg-white px-4 py-2">
                                <select className="block w-full bg-white border border-gray-300 rounded-md focus:outline-none border-none">
                                    <option>Select Your Name</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-gray-200 bg-white px-4 py-2 font-medium">DOA as per matrix defined in policy</td>
                            <td className="border border-gray-200 bg-white px-4 py-2">
                                <select className="block w-full bg-white border border-gray-300 rounded-md focus:outline-none border-none">
                                    <option>Select DOA Level</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end space-x-4 px-10 py-6">
                <button className=" text-[#004097] border-2 font-bold py-1 px-10 rounded">
                    Submit
                </button>
                <button className="bg-[#004098] text-white font-semibold py-1 px-10 rounded">
                    Save
                </button>
            </div>
        </div>
    )
}

export default Sontanic