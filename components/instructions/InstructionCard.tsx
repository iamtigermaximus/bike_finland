import {
  InstructionCardTitle,
  InstructionStepCard,
  MoreInfoLink,
} from './InstructionCard.styles'
import Link from 'next/link'

const InstructionCard = () => {
  return (
    <>
      <InstructionStepCard>
        <InstructionCardTitle>REGISTER</InstructionCardTitle>
        <Link href='/instructions'>
          <MoreInfoLink>More</MoreInfoLink>
        </Link>
      </InstructionStepCard>
      <InstructionStepCard>
        <InstructionCardTitle>PICK UP</InstructionCardTitle>
        <Link href='/instructions'>
          <MoreInfoLink>More</MoreInfoLink>
        </Link>
      </InstructionStepCard>
      <InstructionStepCard>
        <InstructionCardTitle>RIDE</InstructionCardTitle>
        <Link href='/instructions'>
          <MoreInfoLink>More</MoreInfoLink>
        </Link>
      </InstructionStepCard>
      <InstructionStepCard>
        <InstructionCardTitle>RETURN</InstructionCardTitle>
        <Link href='/instructions'>
          <MoreInfoLink>More </MoreInfoLink>
        </Link>
      </InstructionStepCard>
    </>
  )
}

export default InstructionCard
