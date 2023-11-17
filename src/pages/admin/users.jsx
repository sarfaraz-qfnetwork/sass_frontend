/* eslint-disable react/prop-types */
import Layout from '../../layout/admin';
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Box,
  Badge,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select

} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'; // Import EditIcon
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form'

const LICENSE_STATUS_COLOR_SCHEME = {
  active: 'green',
  inactive: 'red'
};

const _data = [
  { id: 1, date: '2023-01-01', name: 'John Doe', accountMail: 'john@example.com', status: 'active', licenseCode: 'ABC123', licenseStatus: 'active' },
  { id: 2, date: '2023-01-02', name: 'Jane Smith', accountMail: 'jane@example.com', status: 'inactive', licenseCode: 'XYZ456', licenseStatus: 'inactive' },
  { id: 3, date: '2023-01-03', name: 'Alice Johnson', accountMail: 'alice@example.com', status: 'active', licenseCode: 'PQR789', licenseStatus: 'active' },
  { id: 4, date: '2023-01-04', name: 'Bob Anderson', accountMail: 'bob@example.com', status: 'inactive', licenseCode: 'LMN123', licenseStatus: 'inactive' },
  { id: 5, date: '2023-01-05', name: 'Eva Martinez', accountMail: 'eva@example.com', status: 'active', licenseCode: 'JKL456', licenseStatus: 'active' },
  { id: 6, date: '2023-01-06', name: 'Charlie Brown', accountMail: 'charlie@example.com', status: 'inactive', licenseCode: 'XYZ789', licenseStatus: 'inactive' },
  { id: 7, date: '2023-01-07', name: 'Grace Lee', accountMail: 'grace@example.com', status: 'active', licenseCode: 'ABC456', licenseStatus: 'active' },
  { id: 8, date: '2023-01-08', name: 'David Wilson', accountMail: 'david@example.com', status: 'inactive', licenseCode: 'PQR123', licenseStatus: 'inactive' },
  { id: 9, date: '2023-01-09', name: 'Sophia Davis', accountMail: 'sophia@example.com', status: 'active', licenseCode: 'LMN456', licenseStatus: 'active' },
  { id: 10, date: '2023-01-10', name: 'Matthew Taylor', accountMail: 'matthew@example.com', status: 'inactive', licenseCode: 'JKL789', licenseStatus: 'inactive' },
];


export default function Dashboard() {

  const initialRef = useRef(null)
  const [data, setData] = useState([])
  const [user, setUser] = useState({})
  // const [errors, setError] = useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { register, handleSubmit, setValue, reset, formState: { errors }, } = useForm()


  const removeUser = (user_id) => {
    const filteredData = data.filter((item) => item.id !== user_id);
    setData(filteredData);
  };

  const editUser = (user_id) => {
    onOpen() // open the modal
    const currentUser = data.find(user => user.id === user_id)
    setUser(currentUser)
    reset()// resting error values to false
    setValue('name', currentUser.name);
    setValue('email', currentUser.accountMail);
  }

  const updateUser = (data) => {
    user.name = data.name
    user.accountMail = data.email
    user.status = data.status
    user.licenseStatus = data.licenseStatus
    onClose()
  }

  const renderLicenseStatusBadge = (status) => (
    <Badge colorScheme={LICENSE_STATUS_COLOR_SCHEME[status]}>{status}</Badge>
  );

  useEffect(() => {
    setData(_data);
  }, []);


  return (
    <Layout>
      <Model
        user={user}
        isOpen={isOpen}
        errors={errors}
        onClose={onClose}
        initialRef={initialRef}
        updateUser={updateUser}
        register={register}
        handleSubmit={handleSubmit}
      />
      <Box background="white" padding="3">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Name</Th>
                <Th>Account Mail</Th>
                <Th>Status</Th>
                <Th>License Code</Th>
                <Th>License Status</Th>
                <Th>Edit/Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.length === 0 ? (
                <Tr>
                  <Td colSpan="7" textAlign="center">
                    No records found
                  </Td>
                </Tr>
              ) : (
                data.map((user) => (
                  <Tr key={user.id}>
                    <Td>{user.date}</Td>
                    <Td>{user.name}</Td>
                    <Td>{user.accountMail}</Td>
                    <Td>{user.status}</Td>
                    <Td>{user.licenseCode}</Td>
                    <Td>{renderLicenseStatusBadge(user.licenseStatus)}</Td>
                    <Td>
                      <Button colorScheme="blue" mr={2} onClick={() => editUser(user.id)}>
                        <EditIcon />
                      </Button>
                      <Button colorScheme="red" onClick={() => removeUser(user.id)}>
                        <DeleteIcon />
                      </Button>
                    </Td>
                  </Tr>
                ))
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}


function Model({ isOpen, onClose, user, updateUser, register, handleSubmit, errors }) {


  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update user account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

            <form id='user_update_form' onSubmit={handleSubmit(updateUser)}>

              <FormControl mt={4} isInvalid={errors.name}>
                <FormLabel>Name</FormLabel>
                <Input placeholder='name' {...register('name', { required: 'field is required', minLength: { value: 3, message: 'username must be 3 characters' } })} />
                <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} isInvalid={errors.email}>
                <FormLabel>Account mail</FormLabel>
                <Input type="email" size={"md"} placeholder="email" {...register('email', { required: 'field is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } })} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>

              <FormControl mt={4} flex>
                <FormLabel>Status</FormLabel>
                <Select {...register('status')} defaultValue={user.status}>
                  <option value='active'>Active</option>
                  <option value='inactive'>Inactive</option>
                </Select>
              </FormControl>

              <FormControl mt={4} flex>
                <FormLabel>Licence Status</FormLabel>
                <Select {...register('licenseStatus')} defaultValue={user.licenseStatus}>
                  <option value='active'>Active</option>
                  <option value='inactive'>Inactive</option>
                </Select>
              </FormControl>
            </form>

          </ModalBody>

          <ModalFooter>
            <Button form='user_update_form' type='submit' colorScheme='blue' mr={3}>Save</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}