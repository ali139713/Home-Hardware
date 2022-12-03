import React from 'react';
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from 'native-base';
import {appColor} from '../assets/colors';

const CardWithImage = () => {
  return (
    <Box alignItems="center" w={180} h={200}>
      <Box maxW="80" rounded="lg" overflow="hidden">
        <Box>
          <AspectRatio w="20%" h="100%">
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            _text={{
              color: 'warmGray.50',
              fontWeight: '700',
              fontSize: 'xs',
            }}
            position="absolute"
            top="0"
            right="0"
            px="3"
            py="1.5">
            {/* <HeartIcon isFavourite={true} /> */}
          </Center>
        </Box>
        <Stack p="5" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-4">
              Room Chair Set
            </Heading>
            <Text
              fontSize="sm"
              fontWeight="500"
              color={appColor.gray}
              ml="-0.5"
              mt="-1">
              2000$
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default CardWithImage;
