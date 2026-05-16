import type { UserAuthenticationApi } from '~/domain/ports/api/user/userAuthenticationApi'
import type { User } from '~/domain/model/user'
import { UserAuthenticationService } from '~/domain/services/user/userAuthenticationService'

export class UserAuthenticationApiAdapter implements UserAuthenticationApi {
  private static instance: UserAuthenticationApiAdapter
  private userAuthenticationService: UserAuthenticationService

  constructor(userAuthenticationService: UserAuthenticationService) {
    this.userAuthenticationService = userAuthenticationService
  }

  static getInstance(): UserAuthenticationApiAdapter {
    if (!UserAuthenticationApiAdapter.instance) {
      UserAuthenticationApiAdapter.instance = new UserAuthenticationApiAdapter(UserAuthenticationService.getInstance())
    }
    return UserAuthenticationApiAdapter.instance
  }

  async register(user: User): Promise<void> {
    return this.userAuthenticationService.register(user)
  }

  async login(email: string, password: string): Promise<User> {
    return this.userAuthenticationService.login(email, password)
  }
}
