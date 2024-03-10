import type { MicroCMSQueries } from 'microcms-js-sdk'
import { client } from '~/libs/microCMS'
import type { Post, PostsData } from '~/types/post'

const ENDPOINT = import.meta.env.PUBLIC_VITE_MICROCMS_ENDPOINT

export const fetchPosts = async (queries?: MicroCMSQueries): Promise<PostsData> => {
	const data = await client.getList<Post>({ endpoint: ENDPOINT, queries })

	return { posts: data.contents, totalCount: data.totalCount }
}

export const fetchPost = async (contentId: string, queries?: MicroCMSQueries) => {
	const detailData = await client.getListDetail<Post>({
		endpoint: ENDPOINT,
		contentId,
		queries,
	})

	return detailData
}
