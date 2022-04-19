import * as React from "react"
import { graphql } from "gatsby"
import Hero from "../components/parents/hero-homepage"
import FeaturesWithIcons from "../components/parents/features-with-icons"
import FeaturedWithButton from "../components/parents/featured-with-button"

const IndexPage = ({ data }) => {
  return (
    <main>
      <Hero />
      <FeaturesWithIcons />
      <FeaturedWithButton />
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