"use client";
import { Github as GithubLogo, Loader2 } from "lucide-react";
import { useState } from "react";



export default function LoginPage() {
    const [githubLoading, setGithubLoading] = useState(false);

    async function onSignInGithub() {
    setGithubLoading(true); 
    // TODO: Add signin using preferred provider
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setGithubLoading(false);
  }

  return (
    <div className="flex flex-col gap-5 items-center justify-center h-screen w-screen bg-white dark:bg-black
    text-black dark:text-white">
    <h2 className="font-semibold text-2xl tracking-tight">Welcome Back</h2>
    <p className="font-medium text-sm dark:text-gray-300 text-gray-500">
        Log in to your account</p>

    <input type='email' placeholder="johndoe@example.com"
    className="w-xs p-2 rounded-xl border border-gray-800 placeholder:text-gray-500" />
    <input type='password' placeholder="password"
    className="w-xs p-2 rounded-xl border border-gray-800 placeholder:text-gray-500" />
    <button className="bg-black dark:bg-white text-white dark:text-black w-xs text-center p-2 rounded-2xl
            cursor-pointer transition-colors duration-200 dark:hover:bg-white/80 hover:bg-black/80">
        Log in
    </button>   


    <div className="relative flex justify-center text-xs uppercase">
        <span className="text-gray-600 dark:text-gray-400">
        Or continue with
        </span>
    </div>


    <button className="flex items-center justify-center p-2 gap-2 rounded-2xl bg-white dark:bg-black 
    border border-gray-800 w-xs cursor-pointer transition-all duration-200 hover:bg-gray-100
    dark:hover:bg-gray-900" 
        onClick={() => {onSignInGithub()}}>
        {githubLoading ?  
        <Loader2 className="size-4 animate-spin" /> :
        <GithubLogo className="size-4" /> }
        Github
    </button> 
</div>
  );
}
