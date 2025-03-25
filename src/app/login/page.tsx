import { Button } from '@/components/ui/button'
import { login, signInWithDiscord, signup } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <Button formAction={login}>Log in</Button>
      <Button formAction={signup}>Sign up</Button>

      <Button formAction={signInWithDiscord}>Sign in with Discord</Button>
    </form>
  )
}
