import Image from 'next/image'
import styles from '../coustomStyles/Gallery.module.css'
export default function SimpleImageCard({ data }) {
    return (
        <div className={` shadow-md `}>
            <Image src={data?.img} width={300} height={350} alt="" className={`${data?.style == 'threeCorner' ? styles.threeCornerRoundedCard : styles.allCornerRoundCard}`} />
        </div>
    )
}
