import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

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
} from './Form.css'

const yupFormSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .min(6, 'Username must must be at least 6 characters')
    .max(20, 'Username must not exceed 20 characters'),
  email: yup.string().required('Email is required').email('Invalid email'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(40, 'Password must not exceed 40 characters'),
  confirmPassword: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('password')], 'Passwords do not match'),
  terms: yup.bool().oneOf([true], 'Accept Terms is required'),
})

interface YupFormType {
  username: string
  email: string
  password: string
  confirmPassword: string
  terms: boolean
}

const YupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<YupFormType>({
    resolver: yupResolver(yupFormSchema),
  })

  const onSubmit: SubmitHandler<YupFormType> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <Card>
      <Header>
        <h1>Yup Form</h1>
      </Header>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <label htmlFor="username">Your username</label>
          <StyledInput type="text" id="username" {...register('username')} />
          {errors.username ? (
            <ErrorSpan>{errors.username.message}</ErrorSpan>
          ) : (
            <Blank />
          )}
        </Row>
        <Row>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <StyledInput type="email" id="email" {...register('email')} />
          {errors.email ? (
            <ErrorSpan>{errors.email.message}</ErrorSpan>
          ) : (
            <Blank />
          )}
        </Row>
        <Row>
          <label htmlFor="password">Password</label>
          <StyledInput
            type="password"
            id="password"
            {...register('password')}
          />
          {errors.password ? (
            <ErrorSpan>{errors.password.message}</ErrorSpan>
          ) : (
            <Blank />
          )}
        </Row>
        <Row>
          <label htmlFor="confirm-password">Confirm password</label>
          <StyledInput
            type="password"
            id="confirm-password"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword ? <ErrorSpan>{errors.confirmPassword.message}</ErrorSpan> : <Blank />}
        </Row>
        <Row>
          <AcceptRow>
            <CheckboxContainer>
              <input
                id="terms"
                aria-describedby="terms"
                type="checkbox"
                {...register('terms')}
              />
            </CheckboxContainer>
            <div>
              <label htmlFor="terms">
                I accept the{' '}
                <a href="https://www.google.com/">Terms and Conditions</a>
              </label>
            </div>
          </AcceptRow>
          {errors.terms ? <ErrorSpan>{errors.terms.message}</ErrorSpan> : <Blank />}
        </Row>

        <Button type="submit" disabled={isSubmitting}>
          Create an account
        </Button>
      </form>
    </Card>
  )
}

export default YupForm
