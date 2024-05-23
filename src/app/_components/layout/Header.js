import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="navbar bg-black text-white md:px-10 text-lg lg:px-14 xl:px-20 py-5">
            <div className="flex-1">
                <Link href="#" className="btn btn-ghost text-xl">
                    <Image src="/images/logo.png" alt="logo" width={200} height={200} />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-lg ">
                    <li>
                        <details>
                            <summary>
                                Book Celebrites
                            </summary>
                            <ul className="p-2  rounded-t-none">
                                <li><Link href="#">Celebrites 1</Link></li>
                                <li><Link href="#">Celebrites 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href="#">Join Community</Link></li>
                    <li className="btn-color"><Link href="#">Post Your Requirements</Link></li>
                </ul>
            </div>
        </div>
    )
}
