function Template(
    { children }: { children: React.ReactNode }
){
    const requestTime = new Date()
    return (
    <div>
        {children}
        <footer className="text-slate-300 text-sm">Last Checked: {requestTime.toLocaleTimeString()}</footer>
    </div>
    )
}
  
export default Template