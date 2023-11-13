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
  Input

} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'; // Import EditIcon
import { useEffect, useRef, useState } from 'react';

const LICENSE_STATUS_COLOR_SCHEME = {
  active: 'green',
  inactive: 'red'
};

const _data = [
  { id: 1, date: '2023-01-01', name: 'John Doe', accountMail: 'john@example.com', status: 'Active', licenseCode: 'ABC123', licenseStatus: 'active' },
  { id: 2, date: '2023-01-02', name: 'Jane Smith', accountMail: 'jane@example.com', status: 'Inactive', licenseCode: 'XYZ456', licenseStatus: 'inactive' },
  { id: 3, date: '2023-01-03', name: 'Alice Johnson', accountMail: 'alice@example.com', status: 'Active', licenseCode: 'PQR789', licenseStatus: 'active' },
  { id: 4, date: '2023-01-04', name: 'Bob Anderson', accountMail: 'bob@example.com', status: 'Inactive', licenseCode: 'LMN123', licenseStatus: 'inactive' },
  { id: 5, date: '2023-01-05', name: 'Eva Martinez', accountMail: 'eva@example.com', status: 'Active', licenseCode: 'JKL456', licenseStatus: 'active' },
  { id: 6, date: '2023-01-06', name: 'Charlie Brown', accountMail: 'charlie@example.com', status: 'Inactive', licenseCode: 'XYZ789', licenseStatus: 'inactive' },
  { id: 7, date: '2023-01-07', name: 'Grace Lee', accountMail: 'grace@example.com', status: 'Active', licenseCode: 'ABC456', licenseStatus: 'active' },
  { id: 8, date: '2023-01-08', name: 'David Wilson', accountMail: 'david@example.com', status: 'Inactive', licenseCode: 'PQR123', licenseStatus: 'inactive' },
  { id: 9, date: '2023-01-09', name: 'Sophia Davis', accountMail: 'sophia@example.com', status: 'Active', licenseCode: 'LMN456', licenseStatus: 'active' },
  { id: 10, date: '2023-01-10', name: 'Matthew Taylor', accountMail: 'matthew@example.com', status: 'Inactive', licenseCode: 'JKL789', licenseStatus: 'inactive' },
];


export default function Dashboard() {

  const initialRef = useRef(null)
  const [data, setData] = useState([]);
  const [user, setUser] = useState({})

  const { isOpen, onOpen, onClose } = useDisclosure()


  const removeUser = (user_id) => {
    const filteredData = data.find((item) => item.id !== user_id);
    setData(filteredData);
  };

  const updateUser = (user_id) => {
    onOpen()
    const currentUser = data.find(user => user.id === user_id)
    setUser(currentUser)
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
        onClose={onClose}
        initialRef={initialRef}
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
                      <Button colorScheme="blue" mr={2} onClick={() => updateUser(user.id)}>
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


function Model({ isOpen, onClose, user }) {

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
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder='name' defaultValue={user.name} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Acount mail</FormLabel>
              <Input placeholder='email' defaultValue={user.accountMail}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}