/* eslint-disable react/prop-types */
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
} from "@chakra-ui/react";

import { useEffect, useRef, useState } from "react";

const Testimonial = (props) => {
    const { children } = props;

    return <Box>{children}</Box>;
};

const TestimonialContent = (props) => {
    const { children } = props;

    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"lg"}
            p={8}
            rounded={"xl"}
            align={"center"}
            pos={"relative"}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: "solid transparent",
                borderLeftWidth: 16,
                borderRight: "solid transparent",
                borderRightWidth: 16,
                borderTop: "solid",
                borderTopWidth: 16,
                borderTopColor: useColorModeValue("white", "gray.800"),
                pos: "absolute",
                bottom: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
            }}
        >
            {children}
        </Stack>
    );
};

const TestimonialHeading = (props) => {
    const { children } = props;

    return (
        <Heading as={"h3"} fontSize={"xl"}>
            {children}
        </Heading>
    );
};

const TestimonialText = (props) => {
    const { children } = props;

    return (
        <Text
            textAlign={"center"}
            color={useColorModeValue("gray.600", "gray.400")}
            fontSize={"sm"}
        >
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({ src, name, title }) => {
    return (
        <Flex align={"center"} mt={8} direction={"column"}>
            <Avatar src={src} mb={2} />
            <Stack spacing={-1} align={"center"}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};

const data = [
    {
        heading: "Efficient Collaborating",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        name: "Jane Cooper",
        title: "CEO at ABC Corporation",
    },
    {
        heading: "Efficient Collaborating",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        name: "Jane Cooper",
        title: "CEO at ABC Corporation",
    },
    {
        heading: "Efficient Collaborating",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        name: "Jane Cooper",
        title: "CEO at ABC Corporation",
    },
    {
        heading: "Efficient Collaborating",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        name: "Jane Cooper",
        title: "CEO at ABC Corporation",
    },
    {
        heading: "Efficient Collaborating",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        img: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
        name: "Jane Cooper",
        title: "CEO at ABC Corporation",
    },
];

export default function Testimonials() {
    const [isDragStart, setIsDragStart] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [prevPageX, setPrevPageX] = useState(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState(0);
    const [positionDiff, setPositionDiff] = useState(0);
    const carousel = useRef(null);
    const carousel_item = useRef(null);

    const dragStart = (event) => {
        setIsDragStart(true);
        setPrevPageX(event.pageX);
        setPrevScrollLeft(carousel.current.scrollLeft);
        carousel.current.style.scrollBehavior = "auto";
        carousel.current.style.cursor = "grabbing";
    };

    const dragging = (event) => {
        event.preventDefault();
        if (isDragStart) {
            setIsDragging(true);
            setPositionDiff(event.pageX - prevPageX);
            carousel.current.scrollLeft = prevScrollLeft - positionDiff;
        }
    };

    const draggStop = () => {
        carousel.current.style.scrollBehavior = "smooth";
        setIsDragStart(false);
        if (!isDragging) return;
        setIsDragging(false);
        autoSlide()
        carousel.current.style.cursor = "grab";
    };


    const autoSlide = () => {
        if (carousel.current.scrollLeft === carousel.current.scrollWidth - carousel.current.clientWidth) {
            return;
        }
        const absPositionDiff = Math.abs(positionDiff);
        const firstItemWidth = carousel_item.current.clientWidth;
        const valDifference = firstItemWidth - absPositionDiff;

        if (carousel.current.scrollLeft > prevScrollLeft) carousel.current.scrollLeft += absPositionDiff > firstItemWidth / 3 ? valDifference : -absPositionDiff
        else carousel.current.scrollLeft -= absPositionDiff > firstItemWidth / 3 ? valDifference : -absPositionDiff;
    };

    const handleResize = () => {
        carousel.current.scrollLeft = 0
    }


    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


    return (
        <Box bg="primary.100">
            <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
                <Stack spacing={0} align={"center"} color="primary.600">
                    <Heading>Our Clients Speak</Heading>
                    <Text>We have been working with clients around the world</Text>
                </Stack>
                <Box
                    direction={{ base: "column", md: "row" }}
                    spacing={{ base: 10, md: 4, lg: 10 }}
                >
                    <div className="wrapper">
                        <div
                            className="carousel flex overflow-x-hidden cursor-grab"
                            ref={carousel}
                            onMouseDown={dragStart}
                            onMouseMove={dragging}
                            onMouseUp={draggStop}
                            onMouseLeave={draggStop}
                        >
                            {data.map((testimonial, key) => (
                                <div key={key} className="item px-2 flex-shrink-0 w-full md:w-1/2 lg:w-1/3" ref={carousel_item}>
                                    <Testimonial>
                                        <TestimonialContent>
                                            <TestimonialHeading>
                                                {testimonial.heading}
                                            </TestimonialHeading>
                                            <TestimonialText>{testimonial.text}</TestimonialText>
                                        </TestimonialContent>
                                        <TestimonialAvatar
                                            src={testimonial.img}
                                            name={testimonial.name}
                                            title={testimonial.title}
                                        />
                                    </Testimonial>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Intuitive Design</TestimonialHeading>
                            <TestimonialText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                imperdiet nibh lectus feugiat nunc sem.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                            }
                            name={'Jane Cooper'}
                            title={'CEO at ABC Corporation'}
                        />
                    </Testimonial>
                    <Testimonial>
                        <TestimonialContent>
                            <TestimonialHeading>Mindblowing Service</TestimonialHeading>
                            <TestimonialText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                                imperdiet nibh lectus feugiat nunc sem.
                            </TestimonialText>
                        </TestimonialContent>
                        <TestimonialAvatar
                            src={
                                'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                            }
                            name={'Jane Cooper'}
                            title={'CEO at ABC Corporation'}
                        />
                    </Testimonial> */}
                </Box>
            </Container>
        </Box>
    );
}
