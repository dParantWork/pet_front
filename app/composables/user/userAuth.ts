import { UserAuthenticationApiAdapter } from '~/application/api/userAuthenticationApiAdapter'
import { z } from 'zod'
import type { User } from '~/domain/model/user'

export const loginSchema = z.object({
  email: z.email('Email invalide'),
  password: z.string().min(8, 'Minimum 8 caractères')
})

export type LoginForm = z.infer<typeof loginSchema>

export const registerSchema = z.object({
  firstname: z.string().nonempty(),
  lastname: z.string().nonempty(),
  email: z.email('Email invalide'),
  password: z.string().min(8, 'Minimum 8 caractères')
})

export type RegisterForm = z.infer<typeof registerSchema>

export const useAuth = () => {
  const token = useCookie<string | null>('auth_token', {
    default: () => null
  })

  const isAuthenticated = computed(() => !!token.value)

  const userAuthenticationApiAdapter = UserAuthenticationApiAdapter.getInstance()

  const register = async (payload: RegisterForm) => {
    const result = registerSchema.safeParse(payload)

    if (result.success) {
      const userRequest: User = {
        firstName: result.data.firstname,
        lastName: result.data.lastname,
        email: result.data.email,
        password: result.data.password
      }

      await userAuthenticationApiAdapter.register(
        userRequest
      )
    }
  }

  const login = async (payload: LoginForm) => {
    const result = loginSchema.safeParse(payload)

    if (result.success) {
      const user = await userAuthenticationApiAdapter.login(
        payload.email,
        payload.password
      )

      console.log('Logged : ', user)
      token.value = 'dummy_token' // toDo : replace with a real token from the api
      console.log('Token set : ', token.value)
      return user
    }
  }

  const logout = () => {
    token.value = null
  }

  return {
    token,
    isAuthenticated,
    login,
    loginSchema,
    register,
    registerSchema,
    logout
  }
}
