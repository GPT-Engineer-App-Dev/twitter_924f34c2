import React, { useState } from "react";
import { Box, Flex, Avatar, Input, IconButton, Button, Text, Divider, Textarea, Image } from "@chakra-ui/react";
import { FaRegComment, FaRetweet, FaRegHeart, FaUpload } from "react-icons/fa";

const Index = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");

  const handleTweetSubmit = () => {
    if (newTweet.trim()) {
      setTweets([
        {
          id: Date.now(),
          text: newTweet,
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDAyMTA1OXww&ixlib=rb-4.0.3&q=80&w=1080',
          name: "John Doe",
          username: "@johndoe",
        },
        ...tweets,
      ]);
      setNewTweet("");
    }
  };

  return (
    <Box maxW="600px" mx="auto" py={8}>
      <Flex alignItems="center" mb={4}>
        <Avatar size="md" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx1c2VyJTIwYXZhdGFyfGVufDB8fHx8MTcxMDAyMTA1OXww&ixlib=rb-4.0.3&q=80&w=1080" mr={4} />
        <Textarea placeholder="What's happening?" value={newTweet} onChange={(e) => setNewTweet(e.target.value)} resize="none" mr={2} />
        <IconButton aria-label="Upload Image" icon={<FaUpload />} mr={2} isDisabled />
        <Button colorScheme="twitter" onClick={handleTweetSubmit}>
          Tweet
        </Button>
      </Flex>
      <Divider mb={4} />
      {tweets.map((tweet) => (
        <Box key={tweet.id} mb={4}>
          <Flex alignItems="center" mb={2}>
            <Avatar size="sm" src={tweet.avatar} mr={2} />
            <Box>
              <Text fontWeight="bold">{tweet.name}</Text>
              <Text color="gray.500">{tweet.username}</Text>
            </Box>
          </Flex>
          <Text mb={2}>{tweet.text}</Text>
          <Flex justifyContent="space-between" color="gray.500">
            <Flex alignItems="center">
              <IconButton aria-label="Comment" icon={<FaRegComment />} variant="ghost" mr={2} isDisabled />
              <IconButton aria-label="Retweet" icon={<FaRetweet />} variant="ghost" mr={2} isDisabled />
              <IconButton aria-label="Like" icon={<FaRegHeart />} variant="ghost" isDisabled />
            </Flex>
            <Image src="https://images.unsplash.com/photo-1679061399645-f2d8eccd7328?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0d2VldCUyMGltYWdlfGVufDB8fHx8MTcxMDAyMTA1OXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Tweet Image" maxH="300px" objectFit="cover" isDisabled />
          </Flex>
        </Box>
      ))}
    </Box>
  );
};

export default Index;
