export default function guest ({ next }){
  if(localStorage.getItem('user')){
    return next({
        name: 'home'
    })
  }
 
  return next()
}