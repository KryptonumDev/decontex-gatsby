import * as React from "react"
import { graphql } from "gatsby"

const IndexPage = ({ data: { strapiMainPage } }) => {
  debugger
  return (
    <main>
    </main>
  )
}

export default IndexPage

// export const query = graphql`
//   {
//     strapiMainPage {
//       Page_Title {
//         data {
//           internal {
//             content
//           }
//         }
//       }
//       Page_SubTitle {
//         data {
//           internal {
//             content
//           }
//         }
//       }
//       Link {
//         Slug
//         Text
//       }
//     }
//   }
// `