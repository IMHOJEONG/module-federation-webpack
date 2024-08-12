import React, { useState, useEffect, useRef } from "react";
import "react-toastify/dist/ReactToastify.css";

import {
  ToastContainer as _ToastContainer,
  toast as reactToastify,
} from "react-toastify";

import { toast as reactHotToast } from "react-hot-toast";

// import { Info as InfoIcon } from "@mui/icons-material";
import { MdInfo as InfoIcon } from "react-icons/md";


export function ToastifyContainer() {
  return <_ToastContainer autoClose={3000} />;
}

export const toastify = reactToastify;
export const hotToast = reactHotToast;

interface IToastMessage {
  type?: string;
  title: string;
  icon?: string;
}

function SimpleMessageObserver() {
  const subscribers: Array<(msg: IToastMessage) => void> = [];

  function subscribe(cb: (msg: IToastMessage) => void) {
    subscribers.push(cb);
  }

  function notify(msg: IToastMessage) {
    subscribers.forEach((cb) => cb(msg));
  }

  subscribe((msg: IToastMessage) => {
    console.log(">> msg:", msg);
  });

  return [subscribe, notify] as const;
}

const [msgSubscribe, msgNotify] = SimpleMessageObserver();

export function CustomToastContainer() {
  const [msg, setMsg] = useState<IToastMessage | null>(null);
  const firstRef = useRef(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!firstRef.current) {
      return;
    }
    firstRef.current = false;

    msgSubscribe((msg) => {
      setMsg(msg);
    });
  }, []);

  useEffect(() => {
    if (msg) {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setMsg(null);
      }, 3000);

      return () => {
        if (timerRef.current !== null) {
          clearTimeout(timerRef.current);
        }
      };
    }
  }, [msg]);

  return msg ? (
    <div className="fixed flex w-full h-14 mt-0 justify-center items-center bg-gray-100 z-[999] border-b-2 border-gray-200">
      <div className="flex items-center">
        <InfoIcon />
        <div className="ml-1 mr-5">{msg.title}</div>
        <div
          className="bg-gray-300 rounded px-2 py-1 cursor-pointer"
          onClick={() => setMsg(null)}
        >
          {"닫기"}
        </div>
      </div>
    </div>
  ) : null;
}

export const customToast = (msg: string) => {
  msgNotify({ title: msg });
};

export default reactHotToast;
