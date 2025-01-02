const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex min-h-screen items-center justify-center  bg-gradient-to-r from-slate-500 to-slate-800">
        {children}
      </div>
    );
}

export default AuthLayout