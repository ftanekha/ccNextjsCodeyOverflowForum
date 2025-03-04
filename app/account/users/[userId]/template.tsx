function Template(
    { children }: { children: React.ReactNode }
){
    const requestTime = new Date()
    return (
    <div>
        {children}
        <footer className="text-xs text-black">Last Checked: {requestTime.toLocaleTimeString()}</footer>
    </div>
    )
}
  
export default Template