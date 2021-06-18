import { gql } from "@apollo/client";

export const GET_DATA_QUERY = gql `

query ($page: Int, $perPage: Int) { 
    Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media {
          id
          title {
            english
            native
          }
          bannerImage
          siteUrl 
          source
          status
          description
        }
      }
    }
`