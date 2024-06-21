import React from 'react';
import { SwiperSlide } from 'swiper/react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
const ReviewCard = ({ item }) => {
    const { photo, reviewStar, message, reviewerName } = item
    return (

        <Card color="transparent" shadow={false} className="w-full border p-2 max-w-[26rem]">
            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
                <Avatar
                    size="lg"
                    variant="circular"
                    src={photo}
                    alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            {
                                reviewerName}
                        </Typography>
                        <div className="5 flex items-center gap-0">
                            <Rating value={reviewStar} readonly />
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
                <Typography>
                    {message}
                </Typography>
            </CardBody>
        </Card>

    );
};

export default ReviewCard;