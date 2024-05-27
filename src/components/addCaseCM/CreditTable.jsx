import React from 'react';

const CreditTable = ({ creditDetails }) => {
  return (
    <div className="p-10 w-full">
      <table className="min-w-full bg-white overflow-hidden">
        <thead>
          <tr className="bg-[#B9B9B9]">
            <th className="w-1/2 px-6 py-3 text-left">Credit Details</th>
            <th className="w-1/2 px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {creditDetails.map((detail, index) => (
            <tr key={index} className="border-t">
              <td className="px-6 py-4 border-r font-semibold">{detail.label}</td>
              <td className="px-6 py-4">
                <input
                  type={detail.type}
                  placeholder={detail.placeholder}
                  defaultValue={detail.value}
                  className="w-full px-3 py-2 "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CreditTable;
