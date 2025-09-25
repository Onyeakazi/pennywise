import React, { useEffect, useRef, useState } from 'react'
import { Plus, MinusCircle, PlusCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

export default function FloatingButton() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const containerRef = useRef(null);

    useEffect(()=> {
        function handleClickOutSide(event) {
            if(containerRef.current && !containerRef.current.contains(event.target)){
                setOpen(false)
            }
        }

        if(open) {
            document.addEventListener("mousedown", handleClickOutSide)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    }, [open])
  return (
    <>
        <AnimatePresence>
            {open && (
                <motion.div 
                    className='fixed inset-0 bg-black/10 backdrop-blur-sm z-40'
                    initail={{opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0}}
                />
            )}
        </AnimatePresence>

        <div ref={containerRef} className="fixed bottom-6 right-6 md:right-14 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {open && (
                    <>
                        <motion.button
                            initail={{opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0}}
                            exit={{ opacity: 0, y: 20}}
                            transition={{ duration: 0.2}}
                            onClick={()=> {
                                setOpen(false)
                                navigate("/add-expense")
                            }}
                            className='flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-red-600 transition'
                        >
                            <MinusCircle size={20}/>
                            <span className='md:text-2xl'>Expense</span>
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, y: 20}}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            onClick={() => {
                                setOpen(false)
                                navigate("/add-income")
                            }}
                            class="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition"
                        >
                            <PlusCircle size={20}/>
                            <span className='md:text-2xl'>Income</span>
                        </motion.button>
                    </>
                )}
            </AnimatePresence>

            <motion.button
                onClick={()=> setOpen(prev => !prev)}
                class="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition"
                whileTap={{ scale: 0.9 }}
            >
                <motion.div
                    initial={false}
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20}}
                >
                    <Plus size={36}/>
                </motion.div>
            </motion.button>
        </div>
    </>
  )
}

