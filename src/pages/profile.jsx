import { Text, VStack, Grid, FormControl, FormLabel, Input, InputGroup, InputRightElement, Select, Switch, FormErrorMessage, Stack, GridItem, Button } from "@chakra-ui/react"
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { signOut } from "../store/slice/auth"
import Layout from "../layout/app"
import axios from "axios"
import { useAuthSession } from "../hooks/authSession"

export default function Profile() {

    const { register: registerInfo, handleSubmit: handleSubmitInfo, setValue, formState: { errors: errorsInfo, isDirty: isDirtyInfo }, } = useForm()
    const { register: registerEmail, handleSubmit: handleSubmitEmail, watch, formState: { errors: errorsEmail, isDirty }, } = useForm()
    const { register: registerPassword, handleSubmit: handleSubmitPassword, watch: watchPassword, formState: { errors: errorsPassword }, } = useForm()
    const [showPassword, setPasswordVisibility] = useState(false)
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const session = useAuthSession()

    const fetchUserDetails = async () => {
        const response = await axios.get(`users/${session.user?.id}`)
        const user = response.data
        setUser(user)
        setValue('first_name', user.first_name)
        setValue('last_name', user.last_name)
        setValue('phone_number', user.phone_number)
        setValue('address', user.address)
        setValue('street', user.street)
        setValue('zipcode', user.zipcode)
        setValue('state', user.state)
        setValue('city', user.city)
    }

    const changePersonalInfo = async (data) => {
        try {
            const response = await axios.put(`users/${session.user?.id}`, data)
            console.log("change data", response.data);

        } catch (error) {
            alert('something went wrong')
        }
    }

    const changeEmail = async (data) => {
        try {
            await axios.post(`update-email/${session.user?.id}`, data)
            fetchUserDetails()
        } catch (error) {
            console.log(error);
            //     const status = error.response.status
            //     if (status === 401) {
            //         dispatch(signOut())
            //         alert('session expired')
            //         return
            //     }
            alert("something went wrong")
        }
    }

    const changePassword = async (data) => {
        try {
            console.log(await axios.post(`update-password/${session.user?.id}`, data))
        } catch (error) {
            console.log(error);
            //     const status = error.response.status
            //     if (status === 401) {
            //         dispatch(signOut())
            //         alert('session expired')
            //         return
            //     }
            alert("something went wrong")
        }
    }


    useEffect(() => {
        if (session.user) {
            fetchUserDetails()
        }
    }, [session])



    return <Layout>
        <VStack alignItems="stretch" gap="5">
            <form onSubmit={handleSubmitInfo(changePersonalInfo)} noValidate>
                <Stack background={"whiteAlpha.900"} gap="2" padding="5" rounded="md">
                    <Text fontSize="xl" fontWeight="medium" mb="3">Personal information</Text>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }} gap="2">
                        <GridItem>
                            <FormControl isInvalid={errorsInfo.first_name} isRequired>
                                <FormLabel>Fisrt name</FormLabel>
                                <Input type="text" defaultValue={user.first_name} {...registerInfo('first_name', { required: 'This field is required', minLength: { value: 3, message: 'minimum 3 characters required' } })} />
                                <FormErrorMessage>{errorsInfo.first_name?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl isInvalid={errorsInfo.last_name} isRequired>
                                <FormLabel>Last name</FormLabel>
                                <Input type="text" defaultValue={user.last_name} {...registerInfo('last_name', { required: 'This field is required', minLength: { value: 3, message: 'minimum 3 characters required' } })} />
                                <FormErrorMessage>{errorsInfo.last_name?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Grid>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Company name</FormLabel>
                                <Input type="text" defaultValue={user.company_name} {...registerInfo('company_name')} />
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Grid>
                        <GridItem>
                            <FormControl isInvalid={errorsInfo.phone_number} isRequired>
                                <FormLabel>Phone</FormLabel>
                                <Input type="text" defaultValue={user.phone_number} {...registerInfo('phone_number', { required: 'This field is required', minLength: { value: 7, message: 'minimum 7 digits required' }, pattern: { value: /^[0-9-]+$/, message: 'Invalid phone number', }, })} />
                                <FormErrorMessage>{errorsInfo.phone_number?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Grid>
                        <GridItem colSpan={2}>
                            <FormControl isInvalid={errorsInfo.address} isRequired>
                                <FormLabel>Address line</FormLabel>
                                <Input type="text" defaultValue={user.address} {...registerInfo('address', { required: 'This field is required' })} />
                                <FormErrorMessage>{errorsInfo.address?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Grid templateColumns={{ base: "1rf", md: "repeat(2,1fr)" }} gap="2">
                        <GridItem>
                            <FormControl isInvalid={errorsInfo.country} isRequired>
                                <FormLabel>Country</FormLabel>
                                <Select placeholder='Select country' {...registerInfo('country', { required: 'This field is required' })}>
                                    <option value='option1'>Option 1</option>
                                    <option value='option2'>Option 2</option>
                                    <option value='option3'>Option 3</option>
                                </Select>
                                <FormErrorMessage>{errorsInfo.country?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>

                        <GridItem>
                            <FormControl>
                                <FormControl isInvalid={errorsInfo.city} isRequired>
                                    <FormLabel>City</FormLabel>
                                    <Input defaultValue={user.city} {...registerInfo('city', { required: 'This field is required' })} />
                                    <FormErrorMessage>{errorsInfo.city?.message}</FormErrorMessage>
                                </FormControl>
                            </FormControl>
                        </GridItem>

                    </Grid>
                    <Grid templateColumns={{ base: "1rf", md: "repeat(3,1fr)" }} gap="2">
                        <GridItem>
                            <FormControl isInvalid={errorsInfo.street} isRequired>
                                <FormLabel>Street</FormLabel>
                                <Input type="text" defaultValue={user.street} {...registerInfo('street', { required: 'This field is required' })} />
                                <FormErrorMessage>{errorsInfo.street?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormControl isInvalid={errorsInfo.zipcode} isRequired>
                                    <FormLabel>Zip code</FormLabel>
                                    <Input min="0" type="number" defaultValue={user.zipcode} {...registerInfo('zipcode', { required: 'This field is required' })} />
                                    <FormErrorMessage>{errorsInfo.zipcode?.message}</FormErrorMessage>
                                </FormControl>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl>
                                <FormControl isInvalid={errorsInfo.state} isRequired>
                                    <FormLabel>State</FormLabel>
                                    <Input type="text" defaultValue={user.state} {...registerInfo('state', { required: 'This field is required' })} />
                                    <FormErrorMessage>{errorsInfo.state?.message}</FormErrorMessage>
                                </FormControl>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Button type="submit" mt="2" alignSelf="start" colorScheme="primary" disabled={!isDirtyInfo}>Save</Button>
                </Stack>
            </form>

            <form onSubmit={handleSubmitEmail(changeEmail)} noValidate>
                <Stack background={"whiteAlpha.900"} gap="2" padding="5" rounded="md">
                    <Text fontSize="xl" fontWeight="medium" mb="3">Change email</Text>
                    <Grid>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Current email</FormLabel>
                                <Input type="email" defaultValue={user.email} readOnly />
                                <FormErrorMessage>Last name is required</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Grid>
                        <GridItem>
                            <FormControl isInvalid={errorsEmail.email}>
                                <FormLabel>New email</FormLabel>
                                <Input type="email" {...registerEmail('email', { required: 'This field is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } })} />
                                <FormErrorMessage>{errorsEmail.email?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Grid>
                        <GridItem>
                            <FormControl isInvalid={errorsEmail.confirm_email}>
                                <FormLabel>Confirm email</FormLabel>
                                <Input type="email" {...registerEmail('confirm_email', { required: 'This field is required', validate: value => value != watch('email') ? 'Email do not match' : true })} />
                                <FormErrorMessage>{errorsEmail.confirm_email?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Button type="submit" mt="2" alignSelf="start" colorScheme="primary">Save</Button>
                </Stack>
            </form>

            <form onSubmit={handleSubmitPassword(changePassword)} noValidate>
                <Stack background={"whiteAlpha.900"} gap="2" padding="5" rounded="md">
                    <Text fontSize="xl" fontWeight="medium" mb="3">Change password</Text>
                    <Grid>
                        <GridItem>
                            <FormControl isInvalid={errorsPassword.current_password}>
                                <FormLabel>Current password</FormLabel>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={showPassword ? 'text' : 'password'}
                                        defaultValue={user.password}
                                        {...registerPassword('current_password', { required: 'This field is required', minLength: { value: 8, message: 'password must be 8 characters long' } })}
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={() => setPasswordVisibility(visibility => !visibility)}>
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>{errorsPassword.current_password?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>

                    <Grid templateColumns={{ base: "1rf", md: "repeat(2,1fr)" }} gap="2">
                        <GridItem>
                            <FormControl isInvalid={errorsPassword.new_password}>
                                <FormLabel>New new_password</FormLabel>
                                <Input type="text" {...registerPassword('new_password', { required: 'This field is required', minLength: { value: 8, message: 'password must be 8 characters long' } })} />
                                <FormErrorMessage>{errorsPassword.new_password?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl isInvalid={errorsPassword.confirm_password}>
                                <FormLabel>Confirm password</FormLabel>
                                <Input type="text" {...registerPassword('confirm_password', { required: 'This field is required', validate: value => value != watchPassword('password') ? 'password do not matched' : true })} />
                                <FormErrorMessage>{errorsPassword.confirm_password?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Button type="submit" mt="2" alignSelf="start" colorScheme="primary">Save</Button>
                </Stack>
            </form>

            <form>
                <Stack background={"whiteAlpha.900"} gap="2" padding="5" rounded="md">
                    <Grid>
                        <GridItem>
                            <FormControl display='flex' alignItems='center'>
                                <FormLabel htmlFor='email-alerts' mb='0'>
                                    Two factor authentication
                                </FormLabel>
                                <Switch defaultChecked={user.twofactor} colorScheme="primary" id='2fauth' onChange={(event) => console.log(event.target.checked)} />
                            </FormControl>
                        </GridItem>
                    </Grid>
                </Stack>
            </form>
        </VStack>
    </Layout>
}
