import { useForm } from 'react-hook-form'
import React, { useState } from 'react'
import {
	FormErrorMessage,
	FormLabel,
	FormControl,
	FormHelperText,
	Input,
	Button,
	Flex,
    
} from '@chakra-ui/core'

export default function ContactForm() {
	const { handleSubmit, errors, register, formState } = useForm()
	function validateName(value) {
		let error
		if (!value) {
			error = 'Name is required'
		}
		return error || true
	}
    function validateEmail(value) {
		let error
		if (!value) {
			error = 'Email is required'
		}
		return error || true
	}
	function validateMessage(value) {
		let error
		if (!value) {
			error = 'Message is required'
		}
		return error || true
	}
	function onSubmit(values) {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2))
		}, 1000)
	}
	return (
		<Flex
			w={['90vw', '40vw', '30vw' ]}
			justifyContent='center'
			alignItems='center'
            m='auto'
			mt='3rem'
			mb='3rem'
            >
			<form
				onSubmit={handleSubmit(onSubmit)}
				method='post'
				data-netlify='true'
				netlify-honeypot='bot-field'>
				<p hidden>
					<label>
						Don't fill this out:
						<input
							name='bot-field'
							aria-label='Do not fill this out'></input>
					</label>
				</p>
                <Flex w={1/2} display='inline-flex'>
				<FormControl isInvalid={errors.name} isRequired>
					<FormLabel htmlFor='name'>First name</FormLabel>
					<Input
						name='name'
						placeholder='name'
						ref={register({ validate: validateName })}
					/>
					<FormErrorMessage>
						{errors.name && errors.name.message}
					</FormErrorMessage>
				</FormControl>
                </Flex>
                <Flex w={1/2} display='inline-flex'>
				<FormControl>
					<FormLabel htmlFor='lastName'>Last name</FormLabel>
					<Input
						name='lastName'
						placeholder='last name'
						
					/>
					<FormErrorMessage>
						{errors.lastName && errors.lastName.message}
					</FormErrorMessage>
				</FormControl>
                </Flex>
				<FormControl isInvalid={errors.message} isRequired>
					<FormLabel htmlFor='email'>Email address</FormLabel>
					<Input
						type='email'
						id='email'
						aria-describedby='email-helper-text'
                        placeholder="We'll never share your email address"
                        ref={register({ validate: validateEmail })}
					/>
				</FormControl>
				<FormControl>
					<FormLabel htmlFor='name'>Company Name</FormLabel>
					<Input name='companyName' placeholder='company name' />
                    <FormErrorMessage>
						{errors.email && errors.email.message}
					</FormErrorMessage>
				</FormControl>
				<FormControl isInvalid={errors.message} isRequired >
					<FormLabel htmlFor='name'>Message</FormLabel>
					<Input
                        h='6rem'
						name='message'
						placeholder='message'
						ref={register({ validate: validateMessage })}
					/>
					<FormErrorMessage>
						{errors.message && errors.message.message}
					</FormErrorMessage>
				</FormControl>
				<Button
					mt={4}
					variantColor='teal'
					isLoading={formState.isSubmitting}
					type='submit'>
					Submit
				</Button>
			</form>
		</Flex>
	)
}
