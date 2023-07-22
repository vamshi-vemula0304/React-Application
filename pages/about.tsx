import styles from '../styles/about.module.css';
import Image from 'next/image';
import resume from '../assets/MyResume.pdf'
import Link from 'next/link';

export default function Home() {
    // const handleDownload = () => {
    //     const fileURL = resume;
    //     const link = document.createElement('a');
    //     link.href = fileURL;
    //     link.setAttribute('download', 'VamshiVemulaResume.pdf');
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    //   };
    return (
        <div className={styles.body}>
            <h1 className={styles.heading}>
                Vamshi Vemula
            </h1>
            {/* <iframe src='../public/Vamshi-Vemula-07.pdf'></iframe> */}
            <Image className={styles.profilePic} src={require("../public/258_A.png")} alt="This is how I look"></Image>
            <div className={styles.para}>
                <p>I am Highly motivated and skilled individual with a diverse set of technical skills, including Python, HTML5, CSS3, React.js, JavaScript, Node.js, Django, EJS, MongoDB, Mongoose, Postgresql, C, Matlab, Multisim. I am passionate about innovative and creative thinking, and I consistently strive to stay updated with the latest technologies in the field.</p>
                <p>With a strong work ethic, organizational skills, and patience, I am adept at tackling complex problems and delivering high-quality results. I am adaptable to change and possess a responsible attitude. My objective is to apply my skills and contribute to the development of impactful projects, while continuously expanding my knowledge and expertise in the ever-evolving world of technology.</p>
                <ul>
                    <h4>Technical Skills</h4>
                    <p>Python, HTML5, CSS3, React.js, JavaScript, Node.js, Django, EJS, MongoDB, Mongoose, Postgresql, C, Matlab, Multisim.</p> 
                    <h4>Soft Skills</h4>
                    <p>Innovative and Creative thinking, Hardworking, Organised, Patient, Responsible, Adaptable to change.</p>
                    <h4>Resume Link</h4>
                    {/* <a onClick={handleDownload}>Download PDF</a> */}
                    <Link className={styles.link} href="https://drive.google.com/file/d/1TZP6ESPhUjwjSvErUCCtpyTOw7aZCWWo/view?usp=drive_link" >Click here</Link>
                </ul>
            </div>
            <div>
                <h4 className={styles.para} >My Online Profile</h4>
                <div className={styles.div}>
                    <div className={styles.divd}>
                        <Link className={styles.link} href="https://www.linkedin.com/in/vamshi-vemula0304/" >LinkedIn</Link>
                    </div>
                    <div className={styles.divd}>
                        <Link className={styles.link} href="https://www.github.com/vamshi-vemula0304/" >Github</Link>
                    </div>
                    <div className={styles.divd}>
                        <Link className={styles.link} href="https://www.leetcode.com/vamshi-vemula0304/" >LeetCode</Link>
                    </div>
                </div>
            </div>
            <div className={styles.para}>
                <h4>Contact info</h4>
                <p>vamshi.vemula4087@gmail.com</p>
            </div>
            
        </div>
    )
}

// import Link from 'next/link';

// export default function DownloadPDF() {
//   return (
//     <div>
//       <h1>Download PDF</h1>
//       <p>Click the link below to download the PDF:</p>
//       <Link href="/my-existing-pdf.pdf">
//         <a>Download PDF</a>
//       </Link>
//     </div>
//   );
// }