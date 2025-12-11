import FeaturedTutors from "../../components/featuredTutors/FeaturedTutors"
import HeroSection from "../../components/herosection/HeroSection"
import InfoSection from "../../components/Infos/InfoSection"
import RecentPostsSection from "../../components/recentPosts/RecentPostsSection"

function Homepage() {
  return (
    <div>
     <HeroSection></HeroSection>
     <RecentPostsSection></RecentPostsSection>
     <FeaturedTutors></FeaturedTutors>
     <InfoSection></InfoSection>
    </div>
  )
}

export default Homepage
