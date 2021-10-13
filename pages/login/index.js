import { useEffect, useState } from "react"
import { colors } from "styles/theme"
import Button from "components/Button"
import Google from "components/Icons/Google"

import AppLayout from "components/AppLayout"

import { loginGoogle, onAuthChanged } from "../../firebase/client"

export default function Home() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthChanged(setUser)
  }, [])

  const handleClick = () => {
    loginGoogle(setUser)
  }

  return (
    <>
      <AppLayout>
        <section>
          <img src="/iafcj.gif" alt="Logo" />
          <h1>IAFCJ</h1>
          <div>
            {user === null && (
              <Button onClick={handleClick} color={colors.primary}>
                <Google width={24} height={24} />
                Login with Google
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <img src={user.avatar} />
                <strong>{user.username}</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }

        div {
          margin-top: 16px;
        }

        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }

        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  )
}
