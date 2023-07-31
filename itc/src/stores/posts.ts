import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

// API URL
const apiUrl = import.meta.env.VITE_API_URL
const photoUrl = import.meta.env.VITE_PHOTO_URL

// Type
export interface Post {
  userId: number
  user: User
  id: number
  title: string
  body: string
  photo: string
}

interface PostState {
  items: Record<string, Post>
  ids: number[]
  page: number
  postPerPage: number
  newItem?: Post
}

export interface User {
  id: number
  name: string
  username: string
  email: string
}

export const usePost = defineStore('post', () => {
  const postData = ref<Post[]>([])
  const userData = ref<User[]>([])
  const posts = ref<PostState>({
    items: {},
    ids: [],
    page: 1,
    postPerPage: 10
  })

  const filterData = (data: any) => {
    return data.value.slice(
      (posts.value.page - 1) * posts.value.postPerPage,
      posts.value.page * posts.value.postPerPage
    )
  }

  const getPosts = () => {
    Promise.all([
      fetch(`${apiUrl}/posts/`).then((res) => res.json()),
      fetch(`${apiUrl}/users/`).then((res) => res.json())
    ]).then((data) => {
      const post = (postData.value = data[0])
      const user = (userData.value = data[1])
      posts.value.ids = post.map((post: Post) => {
        posts.value.items[post.id] = {
          userId: post.userId,
          user: user.find((user: User) => user.id === post.userId),
          id: post.id,
          title: post.title,
          body: post.body,
          photo: `${photoUrl}/${post.id}`
        }
      })
    })
  }

  const postsId = computed(() => {
    return (posts.value.ids = filterData(postData).map((post: Post) => post.id))
  })

  const updatePage = (page: number) => {
    return posts.value.page !== page ? (posts.value.page = page) : null
  }

  const createPost = (post: Post) => {
    posts.value.items[post.id] = post
    posts.value.newItem = post
    postData.value.unshift(post)
  }

  const updatePost = (post: Post) => {
    return (posts.value.items[post.id] = post)
  }

  const deletePost = (id: number) => {
    return (postData.value = postData.value.filter((post) => post.id !== id))
  }

  return {
    posts,
    postsId,
    getPosts,
    updatePage,
    createPost,
    updatePost,
    deletePost
  }
})
