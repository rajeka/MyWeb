import { useEffect } from 'react';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import * as Yup from 'yup';
import FullScreenSection from './FullScreenSection';
import useSubmit from '../hooks/useSubmit';
import { useAlertContext } from '../context/alertContext';

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      type: '',
      comment: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(2, 'Name must be at least 2 charactors')
        .required('Name is required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      comment: Yup.string().trim().required('Comment required'),
    }),
    validateOnMount: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        await submit('', values);
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });
  useEffect(() => {
    if (response?.type === 'success') {
      onOpen({
        type: 'success',
        message: `Thanks for contacting us, ${formik.values.name}!`,
      });
      formik.resetForm();
    } else if (response?.type === 'error') {
      onOpen({
        type: 'error',
        message: response.message || `Something went wrong. Please try again.`,
      });
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={8}
      spacing={1}
    >
      <VStack w="1024px" pt={12} pl={10} alignItems="flex-start">
        <Heading as="h1" fontSize="2xl" id="contact-me">
          Contact me
        </Heading>
        <Box p={4} rounded="md" w="95%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.name && formik.errors.name}
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.comment && formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading || formik.isSubmitting}
                isDisabled={isLoading || !formik.isValid || !formik.dirty}
                loadingText="Submitting"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
