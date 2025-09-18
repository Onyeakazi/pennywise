import React from 'react'
import { Download } from 'lucide-react'

const GenerateReportButton = () => {
  return (
    <div className='hidden relative top-9 right-6 md:right-14 z-50 flex-col items-end gap-3 md:flex'>
        <button 
            className='flex gap-2 bg-blue-600 text-white rounded-sm cursor-pointer p-2 mb-17 shadow-xl'
        > 
            <Download className='w-6 h-6 text-gray-100' />
            Download Report
        </button>
    </div>
  )
}

export default GenerateReportButton