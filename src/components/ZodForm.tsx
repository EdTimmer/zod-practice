import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Card,
  Row,
  StyledInput,
  AcceptRow,
  Button,
  CheckboxContainer,
  ErrorSpan,
  Blank,
  Header,
  CheckboxInput,
  Checkmark,
} from './Forms.css'
import { useState } from 'react'

const zodFormSchema = z
  .object({
    username: z
      .string()
      .nonempty('Username is required')
      .min(6, 'Username must must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: z.string().nonempty('Email is required').email('Invalid email'),
    password: z
      .string()
      .nonempty('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: z.string().nonempty('Password confirmation is required'),
    terms: z.literal(true, {
      errorMap: () => ({
        message: 'Accept Terms is required',
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  })

type ZodFormType = z.infer<typeof zodFormSchema>

const ZodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ZodFormType>({
    resolver: zodResolver(zodFormSchema),
  })

  const [isChecked, setIsChecked] = useState(false)

  const onSubmit: SubmitHandler<ZodFormType> = (data) => {
    console.log(data)
    reset()
  }

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked)
  }

  return (
    <Card>
      <Header>
        <h1>Zod Form</h1>
      </Header>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Row>
          <label htmlFor="username_">Your username</label>
          <StyledInput type="text" id="username_" {...register('username')} />
          {errors.username ? (
            <ErrorSpan>{errors.username.message}</ErrorSpan>
          ) : (
            <Blank />
          )}
        </Row>
        <Row>
          <label
            htmlFor="email_"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <StyledInput type="email" id="email_" {...register('email')} />
          {errors.email ? (
            <ErrorSpan>{errors.email.message}</ErrorSpan>
          ) : (
            <Blank />
          )}
        </Row>
        <Row>
          <label htmlFor="password_">Password</label>
          <StyledInput
            type="password"
            id="password_"
            {...register('password')}
          />
          {errors.password ? (
            <ErrorSpan>{errors.password.message}</ErrorSpan>
          ) : (
            <Blank />
          )}
        </Row>
        <Row>
          <label htmlFor="confirm-password_">Confirm password</label>
          <StyledInput
            type="password"
            id="confirm-password_"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword ? (
            <ErrorSpan>{errors.confirmPassword.message}</ErrorSpan>
          ) : (
            <Blank />
          )}
        </Row>
        <Row>
          <AcceptRow>
            <CheckboxContainer>
              <CheckboxInput
                onClick={handleCheckboxClick}
                id="terms_"
                aria-describedby="terms"
                type="checkbox"
                {...register('terms')}
              />
              {isChecked && <Checkmark />}
            </CheckboxContainer>
            <label htmlFor="terms_">
              I accept the{' '}
              <a href="https://thecatapi.com/" target="_blank" rel="noreferrer">
                Terms and Conditions
              </a>
            </label>
          </AcceptRow>
          {errors.terms ? (
            <ErrorSpan>{errors.terms.message}</ErrorSpan>
          ) : (
            <Blank />
          )}
        </Row>

        <Button type="submit" disabled={isSubmitting}>
          Create an account
        </Button>
      </form>
    </Card>
  )
}

export default ZodForm
