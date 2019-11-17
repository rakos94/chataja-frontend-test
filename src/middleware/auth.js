export default function auth ({ next }){
  if(!localStorage.getItem('user')){
    return next({
        name: 'login'
    })
  }
 
  return next()
}