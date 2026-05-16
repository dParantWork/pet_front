import type { UserApi } from '~/infrastructure/model/user'
import type { User } from '~/domain/model/user'
import type { UserAuthenticationSpi } from '~/domain/ports/spi/user/userAuthenticationSpi'
import { UserRepository } from '~/infrastructure/repositories/userRepository'

export class UserAuthenticationSpiAdapter implements UserAuthenticationSpi {
  private static instance: UserAuthenticationSpiAdapter
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  static getInstance(): UserAuthenticationSpiAdapter {
    if (!UserAuthenticationSpiAdapter.instance) {
      UserAuthenticationSpiAdapter.instance = new UserAuthenticationSpiAdapter(UserRepository.getInstance())
    }
    return UserAuthenticationSpiAdapter.instance
  }

  async login(email: string, password: string): Promise<User> {
    return this.userRepository.login(email, password)
      .then(userApi => this.mapToDomainUser(userApi))
  }

  async register(user: User): Promise<void> {
    return this.userRepository.register(this.mapToApiUser(user))
  }

  private mapToDomainUser(userApi: UserApi): User {
    return {
      id: userApi.id,
      firstName: userApi.firstName,
      lastName: userApi.lastName,
      email: userApi.email
    }
  }

  private mapToApiUser(user: User): UserApi {
    return <UserApi>{
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password!
    }
  }
}
