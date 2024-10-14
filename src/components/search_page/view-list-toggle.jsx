"use client"
import { useEffect, useState } from "react";
import {Switch, cn} from "@nextui-org/react";
import { AlignJustifyIcon, Grid2x2Icon, LayoutGrid, ListIcon } from "lucide-react";

function ViewListToggle({isViewList=true, setIsViewList, id='blogs'}) {

  useEffect(() => {
    // const switchLabel = document.querySelector(`#switch-${id} > label`);
    const switchLabel = document.querySelectorAll(`#switch-${id} > label`);
    if (switchLabel) {
      // switchLabel.setAttribute('data-selected', !isViewList[id]);
      switchLabel.forEach(_=>{
        _.setAttribute('data-selected', !isViewList);
      })
    }
  }, [isViewList, id]);

  const handleToggle = (value) => {
    setIsViewList(prev => {
      const val = typeof value === 'boolean' ? value : !prev;
      localStorage.setItem('isViewList', val)
      return val
    })
  }

  return (
    <div id={`switch-${id}`} className="w-full flex items-center justify-end drop-shadow-md">
      <div className="grid grid-cols-2 items-center justify-center">
        <div className="flex flex-col items-center justify-center p-2 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black transition cursor-pointer"
        onClick={()=>{handleToggle(true)}}>
          <AlignJustifyIcon size={24} className={`${isViewList?`text-prime`:``}`} />
        </div>
        <div className="flex flex-col items-center justify-center p-2 bg-white/50 dark:bg-black/50 hover:bg-white dark:hover:bg-black transition cursor-pointer"
         onClick={()=>{handleToggle(false)}}>
          <LayoutGrid size={24} className={`${!isViewList?`text-prime fill-prime`:`fill-black dark:fill-white`}`} />
        </div>
      </div>
      {/* <Switch
        classNames={{
          wrapper: "p-0 rounded-none overflow-visible",
          thumb: cn("w-1/2 h-full rounded-none rtl:group-data-[selected=true]:mr-auto", ),
        }}
        // checked={!isViewList[id]}
        // onChange={(e) => {
        //   setIsViewList(prev => ({
        //     ...prev,
        //     [id]: !prev[id]
        //   }))
        // }}
        checked={!isViewList}
        onChange={handleToggle}
        size="lg"
        color="prime"
        startContent={<Grid2x2Icon />}
        endContent={<ListIcon />}
      >
      </Switch> */}
    </div>
  )
}

export default ViewListToggle