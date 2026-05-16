import type { UserAuthenticationSpi } from '~/domain/ports/spi/user/userAuthenticationSpi'
import type { User } from '~/domain/model/user'
import { UserAuthenticationSpiAdapter } from '~/infrastructure/spi/userAuthenticationSpiAdapter'

export class UserAuthenticationService {
  private static instance: UserAuthenticationService
  private userAuthenticationSpi: UserAuthenticationSpi

  constructor(userAuthenticationSpi: UserAuthenticationSpi) {
    this.userAuthenticationSpi = userAuthenticationSpi
  }

  static getInstance(): UserAuthenticationService {
    if (!UserAuthenticationService.instance) {
      UserAuthenticationService.instance = new UserAuthenticationService(UserAuthenticationSpiAdapter.getInstance())
    }
    return UserAuthenticationService.instance
  }

  async register(user: User): Promise<void> {
    this.userAuthenticationSpi.register(user)
  }

  async login(email: string, password: string): Promise<User> {
    return this.userAuthenticationSpi.login(email, password)
  }
}
