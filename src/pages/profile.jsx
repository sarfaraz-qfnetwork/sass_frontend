import { Text, VStack, Grid, FormControl, FormLabel, Input, InputGroup, InputRightElement, Select, Switch, FormErrorMessage, Stack, GridItem, Button } from "@chakra-ui/react"
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useState } from "react"
import { useForm } from "react-hook-form"
import Layout from "../layout/app"

const _user = {
    fname: 'test',
    lname: 'test',
    company: 'test',
    phone: '0312-3847665',
    address: 'xyz street abc road usa',
    country: 'usa',
    street: 'xyz',
    zip: '78900',
    state: 'WC',

    email: 'test@test.com',
    password: 'password12345678',
    twofactor: true
}

export default function Profile() {

    const { register: registerInfo, handleSubmit: handleSubmitInfo, formState: { errors: errorsInfo, isDirty:isDirtyInfo }, } = useForm()
    const { register: registerEmail, handleSubmit: handleSubmitEmail, watch, formState: { errors: errorsEmail, isDirty }, } = useForm()
    const { register: registerPassword, handleSubmit: handleSubmitPassword, watch: watchPassword, formState: { errors: errorsPassword }, } = useForm()
    const [showPassword, setPasswordVisibility] = useState(false)
    const [user, setUser] = useState(_user)

    const changePersonalInfo = (data) => {
        console.log(data)
    }

    const changeEmail = (data) => {
        console.log(data)
    }

    const changePassword = (data) => {
        console.log(data)
    }

    return <Layout>
        <VStack alignItems="stretch" gap="5">
            <form onSubmit={handleSubmitInfo(changePersonalInfo)} noValidate>
                <Stack background={"whiteAlpha.900"} gap="2" padding="5" rounded="md">
                    <Text fontSize="xl" fontWeight="medium" mb="3">Personal information</Text>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }} gap="2">
                        <GridItem>
                            <FormControl isInvalid={errorsInfo.fname} isRequired>
                                <FormLabel>Fisrt name</FormLabel>
                                <Input type="text" defaultValue={user.fname} {...registerInfo('fname', { required: 'This field is required', minLength: { value: 3, message: 'minimum 3 characters required' } })} />
                                <FormErrorMessage>{errorsInfo.fname?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                        <GridItem>
                            <FormControl isInvalid={errorsInfo.lname} isRequired>
                                <FormLabel>Last name</FormLabel>
                                <Input type="text" defaultValue={user.lname} {...registerInfo('lname', { required: 'This field is required', minLength: { value: 3, message: 'minimum 3 characters required' } })} />
                                <FormErrorMessage>{errorsInfo.lname?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Grid>
                        <GridItem>
                            <FormControl>
                                <FormLabel>Company name</FormLabel>
                                <Input type="text" defaultValue={user.company} />
                                <FormErrorMessage>Last name is required</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Grid>
                        <GridItem>
                            <FormControl isInvalid={errorsInfo.phone} isRequired>
                                <FormLabel>Phone</FormLabel>
                                <Input type="text" defaultValue={user.phone} {...registerInfo('phone', { required: 'This field is required', minLength: { value: 7, message: 'minimum 7 digits required' }, pattern: { value: /^[0-9-]+$/, message: 'Invalid phone number', }, })} />
                                <FormErrorMessage>{errorsInfo.phone?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
                    </Grid>
                    <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="2">
                        <GridItem colSpan={2}>
                            <FormControl isInvalid={errorsInfo.address} isRequired>
                                <FormLabel>Address line</FormLabel>
                                <Input type="text" defaultValue={user.address} {...registerInfo('address', { required: 'This field is required' })} />
                                <FormErrorMessage>{errorsInfo.address?.message}</FormErrorMessage>
                            </FormControl>
                        </GridItem>
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
                                <FormControl isInvalid={errorsInfo.zip} isRequired>
                                    <FormLabel>Zip code</FormLabel>
                                    <Input min="0" type="number" defaultValue={user.zip} {...registerInfo('zip', { required: 'This field is required' })} />
                                    <FormErrorMessage>{errorsInfo.zip?.message}</FormErrorMessage>
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
                                <Input type="email" defaultValue={'test@gmail.com'} readOnly />
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
                            <FormControl>
                                <FormLabel>Current password</FormLabel>
                                <InputGroup size='md'>
                                    <Input
                                        pr='4.5rem'
                                        type={showPassword ? 'text' : 'password'}
                                        defaultValue={user.password}
                                        readOnly
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={() => setPasswordVisibility(visibility => !visibility)}>
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                        </GridItem>
                    </Grid>

                    <Grid templateColumns={{ base: "1rf", md: "repeat(2,1fr)" }} gap="2">
                        <GridItem>
                            <FormControl isInvalid={errorsPassword.password}>
                                <FormLabel>New password</FormLabel>
                                <Input type="text" {...registerPassword('password', { required: 'This field is required', minLength: { value: 8, message: 'password must be 8 characters long' } })} />
                                <FormErrorMessage>{errorsPassword.password?.message}</FormErrorMessage>
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
