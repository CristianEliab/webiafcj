/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui"
import { Container, Grid } from "theme-ui"
import SectionHeader from "../components/ui/section-header"
import FeatureCardColumn from "../components/ui/feature-card-column.js"

const data = [
  {
    id: 1,
    imgSrc: "./key-feature/performance.svg",
    altText: "Fast Performance",
    title: "Fast Performance",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    imgSrc: "./key-feature/partnership.svg",
    altText: "Partnership deal",
    title: "Partnership deal",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    imgSrc: "./key-feature/subscription.svg",
    altText: "Pro Subscription",
    title: "Pro Subscription",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 4,
    imgSrc: "./key-feature/support.svg",
    altText: "Customer Support",
    title: "Customer Support",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
]

export default function KeyFeature() {
  return (
    <section sx={{ variant: "section.keyFeature" }} id="feature">
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Meet the feature of product"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
}
