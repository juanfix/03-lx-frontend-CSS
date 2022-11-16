import { BenefitsInfo, IntroInfo, PreparationsInfo } from "../components"

export const MainPage = () => {
  return (
    <>
        <div className="container-fluid">
            <IntroInfo />
            <BenefitsInfo />
            <PreparationsInfo />
        </div>
    </>
  )
}
