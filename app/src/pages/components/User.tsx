import styles from '@/styles/Home.module.css'

type userProps = {
  name: string,
  isExit: boolean
}

export default function User(props: userProps) {
  return (
    <div className={(props.isExit) ? `${styles.member} ${styles.check}` : `${styles.member}`}>
      <h1>{props.name}</h1>
    </div>
  )
}