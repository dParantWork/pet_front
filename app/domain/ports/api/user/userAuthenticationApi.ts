import type { User } from '~/domain/model/user'

export interface UserAuthenticationApi {
  register(user: User): Promise<void>

  login(email: string, password: string): Promise<User>
}
