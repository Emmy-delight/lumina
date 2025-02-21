import { signOut } from "@/auth";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Profile () {
    return (
        <main className="min-h-screen flex justify-center py-4 md:py-6 lg:py-8 md:px-12 lg:px-16 bg-gray-100">
           <div className="w-full md-[380px] flex flex-col gap-4 border border-gray-200 rounded-md bg-gray-50 p-2 md:p-6 ">
              <div className="flex justify-center">
                <Image
                width={80}
                height={80}
                src="/jimmycarter.webp"
                alt="profile picture"
                className="rounded-full w-[80px] h-[80px]"/>
                </div>
                <p className="text-center py-3 border-b border-sky-200">User Name</p>
                <p className="text-center py-3 border-b border-sky-200">User Email</p>
                <p className="text-center py-3 border-b border-sky-200">User ID</p>

                <form 
                action={async () => {
                    "use server"
                    await signOut ()
                }}
                >
                    <Button className="w-full" variant="contained" color="error" type="submit">Log out </Button>
                </form>
                <Link href={"/dashboard/update-profile"}
                className="p-2 bg-blue-700 rounded-md text-lg text-white text-center">
                  Update Profile
                </Link>
           </div>
        </main>
    )
}