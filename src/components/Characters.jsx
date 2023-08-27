import React from 'react'
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

function Characters({img, name,comics, description}) {
  return (
    <Card className="py-4 w-96">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
      <h4 className="font-bold text-large">{name}</h4>

        <small className="text-default-500">{description}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={`${img}.jpg`}
          width={270}
        />
      </CardBody>
    </Card>
  )
}

export default Characters