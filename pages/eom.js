import {Toolbar} from '../components/Toolbar'
import styles from '../styles/EOM.module.css'

export const EOM = ({employee}) => {
    console.log(employee)
    return (
        <div className="page-container">

            <Toolbar />
            <div className={styles.main}>
                <h1>Employee Of the Month</h1>
                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} alt={employee.name} />
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const res = await fetch(
        'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth',
      );
    const employee = await res.json()

    return ({
        props: {
            employee
        }
    })
}

export default EOM