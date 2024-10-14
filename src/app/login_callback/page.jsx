"use client"
import {useState, useEffect, useRef} from 'react'
import { callBack, storeLoginDomain, cookieDommains, mainDomains } from '@/config/api'
import { getCookie, setCookie } from 'cookies-next'
import SearchParamsComponent from './searchParamsComponent'
import Image from 'next/image'
import LoadingImg from '@/public/images/loading_login.png'
import WhiteLogo from '@/public/images/logos/white_logo.png'
import SmileEmoji from '@/public/images/smile_emoji.png'
import SentencesAnimation from './sentences_animation'
import { senteces } from './sentences'
import axios from 'axios'
import LoginWelcome from './login_welcom'
import AnimatedCharacter from './animated-character'

function Page() {
    const [isMounted, setIsMounted] = useState(false)
    const [sessionId, setSessionId] = useState(null)
    const [returnUrl, setReturnUrl] = useState('https://arabhardware.net')
    const [token, setToken] = useState(null)
    const [afterPeriod, setAfterPeriod] = useState(false)

    useEffect(()=>{
      localStorage.removeItem(returnUrl)
        setIsMounted(true)
        localStorage?.setItem("jwt_token", token)
        if(isMounted && token && token.length>5){
            cookieDommains.forEach(item=>{
              setCookie(
                item.title,
                token,
                {secure: true, sameSite: "None", domain: item.domain}
              )}
            )
        }
    }, [token])

    useEffect(()=>{
      const timer = setTimeout(() => {
        location.href = `${returnUrl}${(sessionId && returnUrl.includes('?')) ?`&`:'?'}session_id=${localStorage.getItem('session_id')}&jwt_token=${localStorage.getItem('jwt_token')}`
      }, 12000);
      return ()=>{
          // clearTimeout(timer1)
          clearTimeout(timer)
      }
    }, [returnUrl])

  return (
    <div className='w-screen h-screen'>
      <SearchParamsComponent setReturnUrl={setReturnUrl} setToken={setToken} setSessionId={setSessionId} />
        {token && 
        <div className='justify-between items-center max-h-[50vh] hidden'>
          {sessionId && <iframe id={`iframe-cart`}
          src={`${storeLoginDomain}&token=${token}&session_id=${localStorage?.getItem('session_id')??''}`} 
          frameBorder="0" className='hidden' ></iframe>}
        </div>}

        <LoginWelcome >
          <div className="flex flex-col items-center justify-around gap-8">
            <SentencesAnimation sentences={senteces} />
            <AnimatedCharacter mood='happy' />
          </div>
        </LoginWelcome>
    </div>
  )
}

export default Page