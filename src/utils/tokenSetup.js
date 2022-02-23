export const refreshTokenSetup = (res)=>{
   let refreshTiming =  (res.tokenObj.expires_in || 3600 - 5*60) * 1000;
   const refreshToken = async()=>{
       const newAuthRes = await res.reloadAuthResponse()
       localStorage.setItem('google-login',JSON.stringify(newAuthRes))
       refreshTiming = (newAuthRes.expires_in || 3600 - 5*60)*1000;
       setTimeout(refreshToken,refreshTiming)
   }
   setTimeout(refreshToken,refreshTiming)

}