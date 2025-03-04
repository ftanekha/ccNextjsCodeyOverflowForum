"use client";
import React, { useEffect, useState } from "react";
import {
  getRandomElementsWithDelay,
  POSTS,
  USERS,
  Post,
  User,
} from "../lib/utils"; // Import relevant functions and types

import Link from "next/link";

export default function HomePage() {
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [featuredUser, setFeaturedUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      getRandomElementsWithDelay(POSTS, 5)
      .then(randomPosts => setFeaturedPosts(randomPosts))

      getRandomElementsWithDelay(USERS, 1)
      .then(randomUsers => {
        if(randomUsers.length > 0) {
          setFeaturedUser(randomUsers[0]);
        }
      })
      .finally(() => setIsLoading(false))

    }, []
  )

  return (
    <>
      <header className={`my-6 text-sm text-slate-300`}>
        <h1>Welcome To CodeyOverflow Forum</h1>
        <p>A question forum for the curious.</p>
      </header>
      <h2 className='text-slate-300 text-md font-semibold underline'>Featured Posts</h2>
      {
        isLoading 
          ? 
        <p>Loading featured posts...</p>
          : 
        (
          <ul className='mb-6 text-slate-400 text-sm'>
            {
              featuredPosts.map(
                post => (
                  <li key={post.id}>
                    <Link href={`questions/${post.id}`}>{post.title}</Link>
                  </li>
                )
              )
            }
          </ul>
        )
      }
      <h2 className='text-slate-300 text-md font-semibold underline'>Featured User</h2>
      {
        isLoading 
          ?
        <p>Loading featured user...</p>
          : 
        featuredUser ? 
        (
          <div className='mb-6'>
            <p><span className='text-slate-400 text-sm'>Username:</span> {featuredUser.username}</p>
            <p><span className='text-slate-400 text-sm'>Name:</span> {featuredUser.name}</p>
            <p><span className='text-slate-400 text-sm'>Email:</span> {featuredUser.email}</p>
          </div>
        ) 
          :
        <p className='mb-6'>No featured user available.</p>
      }
    </>
  );
}