import type { UserApi } from '~/infrastructure/model/user'

export class UserRepository {
  private static instance: UserRepository
  private usersInMemory: Map<string, UserApi>

  constructor() {
    this.usersInMemory = new Map<string, UserApi>()
    this.usersInMemory.set('1', {
      id: '1',
      firstName: 'John',
      lastName: 'Doe',
      email: 'dylan.parant.personnel@gmail.com',
      password: 'password123'
    })
  }

  static getInstance(): UserRepository {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository()
    }
    return UserRepository.instance
  }

  async register(user: UserApi): Promise<void> {
    const userId = (this.usersInMemory.size + 1).toString()
    this.usersInMemory.set(userId, user)
  }

  async login(email: string, password: string): Promise<UserApi> {
    const user = Array.from(this.usersInMemory.values())
      .find(u => u.email === email && u.password === password)
    if (!user) {
      throw new Error('Invalid email or password')
    }
    return user
  }
}
